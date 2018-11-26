<template>
  <div id="orderWork">
    <div class="content">
      <h5>Accounts > My Subscription</h5>
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
          <span class="font"> Subscription NO. </span>
          <Input v-model="search" style="width: 209px" />
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
  #orderWork{
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
        background: #fff;
        border: 1px solid #e2e9f6;
        .button1{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 100px;
          color: #fff;
          float: right;
          background: #42a5f6;
          border-radius: 4px;
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
            value: 'Pending Config',
            label: 'Pending Config'
          },
          {
            value: 'Config Failed',
            label: 'Config Failed'
          },
          {
            value: 'Pending Deliver',
            label: 'Pending Deliver'
          },
          {
            value: 'Delivered',
            label: 'Delivered'
          },
          {
            value: 'Config Successful',
            label: 'Config Successful'
          },
        ],
        columns1: [
          {
            title: 'Config NO.',
            key: 'configNo',
            align:'center',
            width:200
          },
          {
            title: 'Subscription NO.',
            key: 'subscriptionNo',
            align:'center'
          },
          {
            title: 'Product Name',
            key: 'productName',
            align:'center',
          },
          {
            title: 'Service',
            key: 'service',
            align:'center',
            width:165
          },
          {
            title: 'Create Time',
            key: 'createTime',
            align:'center'
          },
          {
            title: 'Status',
            key: 'status',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center',
            render: (h, params) => {
              if(params.row.status == 'Pending Deliver'){
                return h('div',[
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small',
                      disabled: 'disabled'
                    },
                    style:{
                      'margin-right':'10px',
                      'color':'#c5c8ce',
                      'font-size':'14px'
                    }
                  }, 'Detail'),
                ])
              }else if(params.row.type == 2){
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
                    }
                  }, 'Detail'),
                ])
              }else{
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
                        this.$http.get('/workOrder/workDetail?workNo='+params.row.configNo+'&type=1').then(res=>{
                          if(params.row.productName == 'SD-WAN'){
                            if(params.row.service == 'Device Sevice'){

                            }else{
                              if(params.row.status == 'Config Successful'){
                                this.$router.push({
                                  path:'/page/order/SdwanDetail',
                                  query:{
                                    title:params.row.configNo,
                                    type:1,
                                  }
                                })
                              }else{
                                this.$router.push({
                                  path:'/page/order/Sdwan',
                                  query:{
                                    title:params.row.configNo,
                                    type:1,
                                  }
                                })
                              }
                            }
                          }else{
                            this.$router.push({
                              path:'/page/order/cloudSet',
                              query:{
                                title:params.row.configNo,
                                type:1,
                              }
                            })
                          }
                        })
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
        if(this.search != ''){
          let resouse = [];
          let arr = []
          this.$http.get('/workOrder/workList').then(res=>{
            debugger
            res.data.map((item,index)=>{
              if(item.status == 1){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Delivered'
                })
              }else if(item.status == 2){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Pending Config'
                })
              }else if(item.status == 3){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Config Successful'
                })
              }else if(item.status == 4){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Pending Deliver'
                })
              }
            });
            this.data1 = arr;
            this.data1.map((Item,index)=>{
              if(Item.subscriptionNo == this.search){
                resouse.push(Item);
                this.data1 = resouse;
                this.pageAction()
              }
            });
          })
        }else if(this.search == ''){
          this.$http.get('/workOrder/workList').then(res=>{
            let arr = [];
            res.data.map((item,index)=>{
              if(item.status == 1){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Delivered'
                })
              }else if(item.status == 2){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Pending Config'
                })
              }else if(item.status == 3){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Config Successful'
                })
              }else if(item.status == 4){
                arr.push({
                  configNo:item.configNo,
                  subscriptionNo:item.subscriptionNo,
                  productName:item.productName,
                  service:item.service,
                  createTime:item.createTime,
                  type: item.type,
                  status:'Pending Deliver'
                })
              }
            });
            this.data1 = arr;
            this.pageAction()
          })
        }
      }
    },
    mounted(){
      this.$http.get('/workOrder/workList').then(res=>{
        let arr = [];
        res.data.map((item,index)=>{
          if(item.status == 1){
            arr.push({
              configNo:item.configNo,
              subscriptionNo:item.subscriptionNo,
              productName:item.productName,
              service:item.service,
              createTime:item.createTime,
              type: item.type,
              status:'Delivered'
            })
          }else if(item.status == 2){
            arr.push({
              configNo:item.configNo,
              subscriptionNo:item.subscriptionNo,
              productName:item.productName,
              service:item.service,
              createTime:item.createTime,
              type: item.type,
              status:'Pending Config'
            })
          }else if(item.status == 3){
            arr.push({
              configNo:item.configNo,
              subscriptionNo:item.subscriptionNo,
              productName:item.productName,
              service:item.service,
              createTime:item.createTime,
              type: item.type,
              status:'Config Successful'
            })
          }else if(item.status == 4){
            arr.push({
              configNo:item.configNo,
              subscriptionNo:item.subscriptionNo,
              productName:item.productName,
              service:item.service,
              createTime:item.createTime,
              type: item.type,
              status:'Pending Deliver'
            })
          }else if(item.status == -1){
            arr.push({
              configNo:item.configNo,
              subscriptionNo:item.subscriptionNo,
              productName:item.productName,
              service:item.service,
              createTime:item.createTime,
              type: item.type,
              status:'Canceled'
            })
          }
        });
        this.data1 = arr;
        this.pageAction()
      })
        .catch(error=>{
        // this.data1 =  [
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'Cloud Connect Basic',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'Cloud Connect SE',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'SD-WAN SE',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'SD-WAN SE',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'SD-WAN SE',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'SD-WAN SE',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //   {
        //     WONo: '1120181101100058',
        //     SubscriptionNo: '1120181101100058',
        //     ProductName: 'SD-WAN SE',
        //     service: 'Cloud Connect Service',
        //     CreateTime:'2018/11/01 10:00',
        //     Status:'Config Successful',
        //   },
        //
        //
        // ];
        this.pageAction()
      })

    },
  }
</script>

