<template>
  <div id="orderManagement">
    <div class="content">
      <h5>Order Management</h5>
      <div class="table">
        <div class="table_top">
          <span class="font"> Create Time </span>
          <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 234px"></DatePicker>
        </div>
        <div class="table_top">
          <span class="font"> Status </span>
          <Select v-model="model" style="width:207px">
            <Option v-for="item in status" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="table_top">
          <span class="font"> Customer Name </span>
          <Input v-model="search" style="width: 216px" />
        </div>
        <button class="button1" @click="search1">Search</button>
        <div class="table_content">
          <Table :columns="columns1" :data="historyData" width="1115px" style="margin-top: 20px"></Table>
          <Page size="small" :total='pages()' :page-size='pageSize' @on-change="changePage"	/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #orderManagement{
    .content{
      width: 1200px;
      margin: 20px auto;
      h5{
        font-size: 14px;
        color: #919daf;
        font-weight: 400;
        margin-bottom: 10px;
      }
      .table{
        padding: 30px 40px 100px 40px;
        /*height: 660px;*/
        background: #fff;
        border: 1px solid #e2e9f6;
        .button1{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 100px;
          color: #fff;
          background: #42a5f6;
          border-radius: 4px;
          float: right;
          cursor: pointer;
          border:1px solid #42a5f6;
        }
        .table_top{
          display: inline-block;
          margin-right: 30px;
        }
        .font{
          font-size: 14px;
          font-weight: 700;
        }
        .table_content{
          font-weight: 700;

          .ivu-page{
            display: inline-block;
            float: right;
            margin-top: 10px;
          }
        }

      }
    }
  }
</style>

<script type="text/ecmascript-6">

  export default {
    data(){
      return{
        status: [
          {
            value: 'All',
            label: 'All'
          },
          {
            value: 'Inquiry',
            label: 'Inquiry'
          },
          {
            value: 'Pending Confirm',
            label: 'Pending Confirm'
          },
          {
            value: 'Refused',
            label: 'Refused'
          },
          {
            value: 'Pending Config',
            label: 'Pending Config'
          },
          {
            value: 'Successful',
            label: 'Successful'
          },
          {
            value: 'Failed',
            label: 'Failed'
          },
          {
            value: 'Canceled',
            label: 'Canceled'
          },
          {
            value: 'Pending Audit',
            label: 'Pending Audit'
          },

        ],
        columns1: [
          {
            title: 'Subscription NO.',
            key: 'subscriptionNo',
            align:'center',
            width:150
          },
          {
            title: 'Product Name',
            key: 'productName',
            align:'center',
            width:160
          },
          {
            title: 'Trade Type',
            key: 'tradeType',
            align:'center',
            width:140
          },
          {
            title: 'Customer Name',
            key: 'customerName',
            align:'center',
            width:135
          },
          {
            title: 'Total(HKD)',
            key: 'totalHkd',
            align:'center',
          },
          {
            title: 'Create Time',
            key: 'createTime',
            align:'center',
          },
          {
            title: 'Status',
            key: 'status',
            align:'center',
            width:140
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center',
            render: (h, params) => {
              if(params.row.status == 'Inquiry'){
                return h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  style:{
                    'color':'#42a5f6',
                    'font-size':'14px'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        path:'/page/order/orderProcessing',
                        query:{
                          Subscription:params.row.subscriptionNo,
                          CreateTime:params.row.createTime,
                          Status:params.row.status,
                          productName:params.row.productName,
                        }
                      })
                    }
                  }
                }, 'Quote Price')
              }else {

                return h('div',[
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style:{
                      'margin-right':'10px',
                      'color':'#42a5f6',
                      'font-size':'14px'
                    },
                    on: {
                      click: () => {
                        if(params.row.type == 2){
                          this.$router.push({
                            path:'/page/order/orderProcessing',
                            query:{
                              Subscription:params.row.subscriptionNo,
                              CreateTime:params.row.createTime,
                              Status:params.row.status,
                              productName:params.row.productName,
                            }
                          })
                        }else if(params.row.productName == 'SD-WAN'){
                          this.$router.push({
                            path:'/page/order/orderDetailsSDW',
                            query:{
                              subscriptionNo:params.row.subscriptionNo,
                              CreateTime:params.row.createTime,
                              Status:params.row.status,
                            }
                          })
                        }else {
                          this.$router.push({
                            path:'/page/order/orderDetails',
                            query:{
                              Subscription:params.row.subscriptionNo,
                              CreateTime:params.row.createTime,
                              Status:params.row.status,
                            }
                          })
                        }
                      }
                    }
                  }, 'Detail'),
                ])
              }
            }
          }
        ],
        data1:[],
        model: 'All',
        search:'',
        pageSize:50,
        HistoryDataEm:[],
        historyData:[],
      }
    },
    methods:{
      pages(){
        let leng = this.data1.length;
        return leng
      },
      changePage(index){
        let _start = ( index - 1 ) * this.pageSize;
        let _end = index * this.pageSize;
        this.historyData = this.HistoryDataEm.slice(_start,_end);
      },
      pageAction(){
        this.HistoryDataEm = this.data1;
        if(this.data1.length < this.pageSize){
          this.historyData = this.HistoryDataEm;
        }else{
          this.historyData = this.HistoryDataEm.slice(0,this.pageSize);
        }
      },
      search1(){
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        if(this.search != ''){
          let resouse = []
          // this.data1 =  [
          //   {
          //     SubscriptionNo: '20181101100051',
          //     ProductName: 'Cloud  Connect Basic',
          //     SubscriptCycle: '7',
          //     Total: '7500',
          //     Status: 'Pending Config',
          //     CreateTime:'2017/11/01 23:59',
          //   },
          //   {
          //     SubscriptionNo: '20181101100058',
          //     ProductName: 'Cloud Connect Basic',
          //     SubscriptCycle: '7',
          //     Total: '7500',
          //     Status: 'Pending Confirm',
          //     CreateTime:'2017/11/01 23:59',
          //   },
          //   {
          //     SubscriptionNo: '20181101100058',
          //     ProductName: 'Cloud Connect Basic',
          //     SubscriptCycle: '7',
          //     Total: '7500',
          //     Status: 'Pending Config',
          //     CreateTime:'2017/11/01 23:59',
          //   },
          //
          // ];
          this.$http.post('/productOrder/orderList',headers).then(res=>{
            this.data1 = res.data;
            res.data.map((res,index)=>{
              if(res.status == 0){
                status = 'Inquiry'
                res.tradeType ='Subscribe'
              }else if(res.status ==1){
                status = 'Pending Confirm'
                res.tradeType ='Subscribe'
              }else if(res.status ==2){
                status = 'Pending Config'  //两个按钮
                res.tradeType ='Subscribe'
              }else if(res.status == 3){
                status = 'Successful'
                res.tradeType ='Subscribe'
              }else if(res.status == -1){
                res.tradeType ='Unsubscribe'
              }else if(res.status == 6){
                status = 'Successful'
                res.tradeType ='Subscribe'
              }
              this.data1[index].status = status;
            });
          });
          this.data1.map((item,index)=>{
            if(item.customerName == this.search){
              resouse.push(item);
              this.data1 = resouse;
              this.pageAction()
            }
          });
        }
      }
    },
    mounted(){
      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      this.$http.post('/productOrder/orderList',headers).then(res=>{
        this.data1 = res.data;
        res.data.map((res,index)=>{
          if(res.status == 0){
            status = 'Inquiry';
            res.tradeType ='Subscribe';
          }else if(res.status ==1){
            status = 'Pending Confirm';
            res.tradeType ='Subscribe'
          }else if(res.status ==2){
            status = 'Pending Config';
            res.tradeType ='Subscribe'
          }else if(res.status == 3){
            status = 'Successful';
            res.tradeType ='Subscribe'
          }else if(res.status == -1){
            status = 'Canceled';
            res.tradeType ='Subscribe'
          } else if(res.status == -2){
            status = 'Pending Config';
            res.tradeType ='Unsubscribe'
          }else if(res.status == -3){
            res.tradeType ='Subscribe'
          }else if(res.status == 6){
            status = 'Successful'
            res.tradeType ='Subscribe'
          }

          this.data1[index].status = status;
        });
        this.pageAction()
      }).catch(error=>{
        // this.data1 =  [
        //   {
        //     SubscriptionNo: '20181101100051',
        //     ProductName: 'Cloud  Connect Basic',
        //     SubscriptCycle: '7',
        //     Total: '7500',
        //     Status: 'Pending Config',
        //     CreateTime:'2017/11/01 23:59',
        //   },
        //   {
        //     SubscriptionNo: '20181101100058',
        //     ProductName: 'Cloud Connect Basic',
        //     SubscriptCycle: '7',
        //     Total: '7500',
        //     Status: 'Pending Confirm',
        //     CreateTime:'2017/11/01 23:59',
        //   },
        //   {
        //     SubscriptionNo: '20181101100058',
        //     ProductName: 'Cloud Connect Basic',
        //     SubscriptCycle: '7',
        //     Total: '7500',
        //     Status: 'Pending Config',
        //     CreateTime:'2017/11/01 23:59',
        //   },
        //
        // ];
        // this.pageAction()
      })

    },
  }
</script>

