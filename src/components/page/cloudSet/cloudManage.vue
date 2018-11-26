<template>
  <div id="cloudManage">
    <div class="content">
      <h5>Configure</h5>
      <div class="table">
        <div class="table_top">
          <span class="font"> Apply Time </span>
          <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 234px"></DatePicker>
        </div>
        <button class="button1" @click="search1">Search</button>
        <button class="button2" @click="search1">Add</button>
        <div class="table_content">
          <Table :columns="columns1" :data="historyData" width="1115px" style="margin-top: 20px"></Table>
          <Page size="small" :total='pages()' :page-size='pageSize' @on-change="changePage"	/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #cloudManage{
    .content{
      width: 1200px;
      margin: 20px auto;
      h5{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .table{
        padding: 30px 40px;
        height: 660px;
        background: #fff;
        border: 1px solid #e2e9f6;
        .button1{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 75px;
          color: #fff;
          background: #42a5f6;
          border-radius: 4px;
          cursor: pointer;
          margin-right: 20px;
          border: 1px solid #42a5f6;
        }
        .button2{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 75px;
          color: #42a5f6;
          background: #fff;
          border: 1px solid #42a5f6;
          border-radius: 4px;
          cursor: pointer;
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
        columns1: [
          {
            title: 'WO ID',
            key: 'woid',
            align:'center',
            width:145
          },
          {
            title: 'Created By',
            key: 'createdBy',
            align:'center',
          },
          {
            title: 'Create Time',
            key: 'createTime',
            align:'center',
            width:140
          },
          {
            title: 'Service',
            key: 'service',
            align:'center',
            width:170
          },
          {
            title: 'Status',
            key: 'status',
            align:'center'
          },
          {
            title: 'Updated By',
            key: 'updatedBy',
            align:'center'
          },
          {
            title: 'Updated Time',
            key: 'updatedTime',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center',
            render: (h, params) => {
              return h('div',[
                h('Button', {
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
                      this.$router.push('/page/cloudSet/cloudSet')
                    }
                  }
                }, 'view'),
              ])
            }
          }
        ],
        data1:[],
        model: '',
        search:'',
        pageSize:6,
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
          let resouse = []
          this.data1 =  [
            {
              SubscriptionNo: '20181101100051',
              ProductName: 'Cloud  Connect Basic',
              SubscriptCycle: '7',
              Total: '7500',
              Status: 'Pending Config',
              CreateTime:'2017/11/01 23:59',
            },
            {
              SubscriptionNo: '20181101100058',
              ProductName: 'Cloud Connect Basic',
              SubscriptCycle: '7',
              Total: '7500',
              Status: 'Pending Confirm',
              CreateTime:'2017/11/01 23:59',
            },
            {
              SubscriptionNo: '20181101100058',
              ProductName: 'Cloud Connect Basic',
              SubscriptCycle: '7',
              Total: '7500',
              Status: 'Pending Config',
              CreateTime:'2017/11/01 23:59',
            },

          ];
          this.data1.map((item,index)=>{
            if(item.ProductName == this.search){
              resouse.push(item);
              this.data1 = resouse;
              this.pageAction()
            }
          });
        }
      }
    },
    mounted(){
      this.$http.get('ff').then(res=>{

      }).catch(error=>{
        this.data1 =  [
          {
            woid: '1120181101100058',
            createdBy: 'Customer',
            createTime: '2018/11/01/ 10:00',
            service: 'Cloud Connect Service',
            status: 'available',
            updatedBy:'Operator',
            updatedTime:'2017/11/01 10:02',
          },
          {
            woid: '1120181101100058',
            createdBy: 'Customer',
            createTime: '2018/11/01/ 10:00',
            service: 'Cloud Connect Service',
            status: 'available',
            updatedBy:'Operator',
            updatedTime:'2017/11/01 10:02',
          },
          {
            woid: '1120181101100058',
            createdBy: 'Customer',
            createTime: '2018/11/01/ 10:00',
            service: 'Cloud Connect Service',
            status: 'available',
            updatedBy:'Operator',
            updatedTime:'2017/11/01 10:02',
          },

          {
            woid: '1120181101100058',
            createdBy: 'Customer',
            createTime: '2018/11/01/ 10:00',
            service: 'Cloud Connect Service',
            status: 'available',
            updatedBy:'Operator',
            updatedTime:'2017/11/01 10:02',
          },
        ];
        this.pageAction();
      })

    },
  }
</script>

