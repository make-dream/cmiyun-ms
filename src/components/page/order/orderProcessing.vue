<template>
  <div id="orderDetails">
    <h5>Subscription Info</h5>
    <div class="content">
      <div class="contactUS">
        <ul class="contactUS-ul">
          <li>
            <span class="first" style="margin-bottom: 50px;color: black;">Status</span>
            <span class="second">{{StatusDes}}</span>
            <span class="suffix">(Update Time:{{data.updateTime}})</span>
            <Button v-if="data.status==0" @click="modalQuotePrice=true" style="border: 1px solid #2688d8;color: #2688d8;float:right;">Quote Price</Button>
            <Modal
              v-model="modalQuotePrice"
              title=" "
              @on-ok="quotePrice"
              @on-cancel="modalQuotePrice=false">
              <p>Are you sure to submit this price?</p>
            </Modal>
          </li>
        </ul>
      </div>
      <h4>Basic Info</h4>
      <div class="info">
        <ul>
          <li>
            <span class="first" style="margin-bottom: 30px;">Subscription NO</span>
            <span class="second">{{data.subscriptionNo}}</span>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Create Time</span>
            <span class="second">{{data.createTime}}</span>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Customer Name</span>
            <span class="second">cmiuser</span>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Contacts</span>
            <span class="second">Kevin/13800001234</span>
          </li>
        </ul>
      </div>
      <h4>Inquiry Info</h4>
      <Table :columns="FeeInfo" :data="FeeInfoData" style="margin-bottom: 50px"></Table>

    </div>
  </div>
</template>

<style lang="less">
  #orderDetails{
    width: 1200px;
    margin: 20px auto;
    .ivu-table-column-center{
      row-span: 2 !important;
    }
    h5{
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    h4{
      font-size: 18px;
      margin:40px 0 30px 10px;
      font-weight: 700;
    }
    .content{
      background: #fff;
      border: 2px solid #eceff9;
      padding: 30px 40px;
      .contactUS{
        border-bottom: 2px solid #eceff9;
        .ontactUS-ul{
          li{
            width: auto;
          }
        }
        li{
          width: auto;
          position: relative;
          span{
            display: inline-block;
          }
          .first{
            font-size: 18px;
            width: 60px;
            color: #8390a4;
            font-weight: 400;
            text-align: right;
          }
          .second{
            margin-left: 30px;
            font-size: 18px;
            font-weight: 400;
          }
          .suffix{
            font-size: 16px;
            color: #cbd3e0;
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
      .info{
        li{
          position: relative;
          width: 600px;
          span{
            display: inline-block;

          }
          .first{
            font-size: 14px;
            width: 150px;
            color: #8390a4;
            font-weight: 400;
            text-align: right;
          }
          .second{
            margin-left: 30px;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
      th{
        background: #f6f7fb;
      }
    }
  }
</style>

<script>
  export default {
    data(){
      var that = this;
      return{
        FeeInfo: [
          {
            title: 'Product Name',
            key: 'productName',
            align:'center',
          },
          {
            title: 'Fee Name',
            key: 'feeName',
            align:'center',
            width:190
          },
          {
            title: 'Price with Tax',
            key: 'Tax',
            align:'center',
          },
          {
            title: 'Subscription Cycle(Month)',
            key: 'Subscription',
            align:'center',
          },
          {
            title: 'Quantity',
            key: 'Quantity',
            align:'center',
          },
          {
            title: 'Subtotal(HKD)',
            key: 'Subtotal',
            align:'center',
          },
          {
            title: 'Discount(%)-with Tax/Tax',
            key: 'Discount',
            align:'center',
            width:200,
            render: (h, params) => {
              if(params.row.productName == 'Total(HKD)'){
                that.setTotlePrice();
                that.setSubtotal();
                return h('div',[
                  h('span', {
                    style:{
                      'float':'right',
                      'margin-right':'10px',
                      'color':'#42a5f6',
                      'font-size':'14px'
                    }
                  }, that.totlePrice + '/' + that.totlePrice/10),
                  h('span', {
                    style:{
                      'float':'left',
                      'margin-right':'10px',
                      'color':'#42a5f6',
                      'font-size':'14px'
                    }
                  }, that.Subtotal)
                ])
              }else{
                return h('div',[
                  h('input', {
                    props: {
                      size: 'small',
                    },
                    domProps: {
                      value: params.row.Discount,
                      disabled: that.data.status > 1
                    },
                    on: {
                      change: function (event) {
                        that.FeeInfoData[params.index].Discount = event.target.value
                        that.setTotlePrice();
                        that.setSubtotal();
                      }
                    },
                    style:{
                      'float':'left',
                      'width': '50px'
                    }
                  }),
                  h('span', {
                    style:{
                      'float':'right',
                      'margin-right':'10px',
                      'color':'#42a5f6',
                      'font-size':'14px'
                    }
                  }, params.row.Subtotal*(params.row.Discount===''?100:params.row.Discount)/100+'/'+params.row.Subtotal*(params.row.Discount===''?100:params.row.Discount)/1000)
                ])
              }
            }
          }
        ],
        FeeInfoData: [
          {
            productName: 'Cloud Connect',
            feeName: '10Mbps Monthly Rental Fee',
            Tax: '1000HKD/Month',
            Subscription: '5',
            Quantity: '1',
            Subtotal: 5000,
            Discount: '',
          },
          {
            productName: 'SD-WAN',
            feeName: '10Mbps Monthly Rental Fee',
            Tax: '500HKD/Month',
            Subscription: '5',
            Quantity: '2',
            Subtotal: 5000,
            Discount: '',
          },
          {
            productName: 'SD-WAN',
            feeName: 'CPE-M Device Fee',
            Tax: '200HKD/Month',
            Subscription: '5',
            Quantity: '2',
            Subtotal: 2000,
            Discount: '',
          },
          {
            productName: 'SD-WAN',
            feeName: 'License Fee',
            Tax: '100HKD/Month',
            Subscription: '5',
            Quantity: '2',
            Subtotal: 1000,
            Discount: '',
          },
          {
            productName: 'Total(HKD)',
            feeName: '',
            Tax: '',
            Subscription: '',
            Quantity: '',
            Subtotal: '13000',
            Discount: '',
          }
        ],
        FeeInfoData_PengdingConfig: [
          {
            productName: 'Cloud Connect',
            feeName: '10Mbps Monthly Rental Fee',
            Tax: '1000HKD/Month',
            Subscription: '5',
            Quantity: '1',
            Subtotal: 5000,
            Discount: 80,
          },
          {
            productName: 'SD-WAN',
            feeName: '10Mbps Monthly Rental Fee',
            Tax: '500HKD/Month',
            Subscription: '5',
            Quantity: '2',
            Subtotal: 5000,
            Discount: 80,
          },
          {
            productName: 'SD-WAN',
            feeName: 'CPE-M Device Fee',
            Tax: '200HKD/Month',
            Subscription: '5',
            Quantity: '2',
            Subtotal: 2000,
            Discount: 90,
          },
          {
            productName: 'SD-WAN',
            feeName: 'License Fee',
            Tax: '100HKD/Month',
            Subscription: '5',
            Quantity: '2',
            Subtotal: 1000,
            Discount: 20,
          },
          {
            productName: 'Total(HKD)',
            feeName: '',
            Tax: '',
            Subscription: '',
            Quantity: '',
            Subtotal: '13000',
            Discount: 76.9,
          }
        ],
        // time:this.getTime(),
        data: {
          subscriptionNo:'',
          updateTime:'',
          status:0,
        },
        StatusDes: 'Inquiry',
        totlePrice: 0,
        Subtotal:0,
        modalQuotePrice: false
      }
    },
    methods:{
      getTime(){
        let date = new Date();
        let year = date.getFullYear();
        let seperator1 = "-";
        let month = date.getMonth() +1;
        let strDate = date.getDate();
        if(strDate < 10 && month < 10){
          return (year+seperator1+0+month+seperator1+0+strDate);
        }else if(strDate < 10 && month>=10){
          return (year+seperator1+month+seperator1+0+strDate);
        }else if(strDate >= 10 && month>=10){
          return (year+seperator1+month+seperator1+strDate);
        }else if(month <10 && strDate>=10){
          return (year+seperator1+0+month+seperator1+strDate);
        }else if(month < 10 && strDate>=10){
          return (year+seperator1+0+month+seperator1+strDate);
        }
      },
      quotePrice(){
        
        this.$http.get("customize/switchStatusFromInquiry2PendingConfirm?subscriptionNo="+this.data.subscriptionNo)
          .then(res=>{
            this.getData();
          })
      },
      getDesByStatus(status){
        var StatusDes = 'Inquiry';
          if(status == 0){
            StatusDes = 'Inquiry';
          }else if(status ==1){
            StatusDes = 'Pending Confirm';
          }else if(status ==2){
            StatusDes = 'Pending Config';
          }else if(status == 3){
            StatusDes = 'Config Successful';
          }else if(status == -1){
            StatusDes ='Unsubscribe'
          }
          return StatusDes;
      },
      getData(){
        this.$http.post('/productOrder/orderDetail?subscriptionNo='+this.data.subscriptionNo,{
          'Content-Type': 'application/x-www-form-urlencoded',
        }).then(res=>{
          this.data = res.data;
          this.StatusDes = this.getDesByStatus(this.data.status);
          if(this.data.status == 2){
            this.FeeInfoData = this.FeeInfoData_PengdingConfig;
          }
        })
      },
      setTotlePrice(){
        this.totlePrice = this.FeeInfoData.filter(item=>item.productName !== 'Total(HKD)').map(
          item=>item.Subtotal*(item.Discount===''?100:item.Discount)/100
          ).reduce((value, currentValue)=>
          value+currentValue
        )
      },
      setSubtotal(){
        // 
        this.Subtotal = (this.totlePrice/13000 * 100).toFixed(1);
      }
    },
    mounted(){
      this.data.subscriptionNo = this.$route.query.Subscription;
      // this.data.updateTime = this.$route.query.updateTime;
      // this.data.status = this.$route.query.status;
      this.getData();
    },
  }
</script>

