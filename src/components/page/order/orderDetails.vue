<template>
    <div id="orderDetails">
      <h5>Order Info</h5>
      <div class="content">
        <div class="contactUS">
          <ul>
            <li>
              <span class="first" style="margin-bottom: 50px;">Status</span>
              <span class="second">{{this.Status}}</span>
              <span class="suffix">(Update Time: {{this.data.updateTime}})</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Total/Tax</span>
              <span class="second">10000HKD/7Months,1000HKD</span>
            </li>
          </ul>
        </div>
        <h4>Basic Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first" style="margin-bottom: 30px;">Subscription No.</span>
              <span class="second">{{this.Subscription}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Create Time</span>
              <span class="second">{{this.data.createTime}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Effective Time</span>
              <span class="second">{{this.data.updateTime}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Product Name</span>
              <span class="second">{{this.data.productName}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Customer Name</span>
              <span class="second">{{this.data.customerName}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Contacts</span>
              <span class="second">{{this.data.contacts}}</span>
            </li>
          </ul>
        </div>
        <h4>Configuration Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first" style="margin-bottom: 30px;">Subscription Cycle</span>
              <span class="second">7 Months</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Bandwidth</span>
              <span class="second">{{this.data.bandwidth}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Connection Point</span>
              <div v-for="data in connectionPoint" style="display: inline-block">
                <span class="second">{{data.connectSide}}</span>
                <span class="second" style="margin-left: 10px">{{data.accountId}}</span>
              </div>
            </li>
          </ul>
        </div>
        <h4>Fee Info</h4>
        <Table :columns="FeeInfo" :data="FeeInfoData" style="margin-bottom: 50px"></Table>
        <h4>Configuration Order</h4>
        <Table :columns="OrderInfo" :data="OrderInfoData"></Table>
      </div>
    </div>
</template>

<style lang="less">
  #orderDetails{
    width: 1200px;
    margin: 20px auto;
    background: #fff;
    h5{
      font-size: 14px;
      color: #919daf;
      font-weight: 400;
      margin-bottom: 10px;
    }
    h4{
      font-size: 18px;
      color: #8390a4;
      margin:40px 0 30px 10px;
      font-weight: 400;
    }
    .content{
      background: #fff;
      padding: 30px 40px;
      .contactUS{
        border-bottom: 2px solid #eceff9;
        li{
          position: relative;
          // width: 600px;
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
          // width: 600px;
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
          div:nth-child(3){
            display: block !important;
            margin-left: 153px;
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
        return{
          FeeInfo: [
            {
              title: 'Fee Name',
              key: 'FeeName',
              align:'center',
            },
            {
              title: 'Price with Tax',
              key: 'Price',
              align:'center',
            },
            {
              title: 'Subscription Cycle',
              key: 'SubscriptionCycle',
              align:'center',
            },
            {
              title: 'Quantity',
              key: 'Quantity',
              align:'center',
            },
            {
              title: 'Tax(HKD)',
              key: 'tax',
              align:'center',
            },
            {
              title: 'Subtotal(HKD)',
              key: 'Subtotal',
              align:'center',
            }
          ],
          FeeInfoData: [
            {
              FeeName: 'Monthly Reatal Fee',
              Price: '1000HKD/Month',
              SubscriptionCycle: '7',
              Quantity: '1',
              tax: '700',
              Subtotal: '7000',
            },
          ],
          OrderInfo: [
            {
              title: 'Config NO.',
              key: 'configNo',
              align:'center',
            },
            {
              title: 'Service',
              key: 'service',
              align:'center',
            },
            {
              title: 'Operation',
              key: 'operation',
              align:'center',
            },
            {
              title: 'Update Time',
              key: 'updateTime',
              align:'center',
            },
            {
              title: 'Status',
              key: 'status',
              align:'center',
            }
          ],
          OrderInfoData: [],
          connectionPoint: [],
          Subscription:'',
          CreateTime:'',
          Status:'',
          data:{
            createTime:'',
            bandwidth:'',
            updateTime:'',
            productName:'',
            customerName:'',
            contacts:'',
          }
        }
      },
      created(){
        this.Subscription = this.$route.query.Subscription;
        this.CreateTime = this.$route.query.CreateTime;
        this.Status = this.$route.query.Status;
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        let arr = this.Subscription.toString();
        this.$http.post('/productOrder/orderDetail?subscriptionNo='+arr,headers).then(res=>{
          this.data.createTime = res.data.createTime;
          this.data.bandwidth = res.data.bandwidth;
          
          this.connectionPoint = res.data.connectionPointList
          this.data.productName = res.data.productName
          this.data.customerName = res.data.customerName
          this.data.contacts = res.data.contacts;
          if(res.data.status == 3){
            this.data.updateTime = res.data.updateTime;
          }
        })
        this.$http.post('/productOrder/getConfigByOrder?subscriptionNo='+arr+'&type=1',headers).then(res=>{
          this.OrderInfoData = res.data;
          res.data.map((res,index)=>{
            if(res.status == 0){
              status = 'Inquiry'
            }else if(res.status == 1){
              status = 'Pending Confirm'
            }else if(res.status == 2){
              status = 'Pending Config'
            }else if(res.status == 3){
              status = 'Config Successful';
            }else if(res.status == -1){
              status = 'Canceled'
            }
            this.OrderInfoData[index].status = status;
          })

        })

      }
    }
</script>

