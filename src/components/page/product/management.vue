<template>
  <div id="management">
    <div class="content">
      <h5>Product Management</h5>
      <div class="table">
        <div class="table_top">
          <span class="font"> Apply Time </span>
          <DatePicker type="daterange" split-panels placeholder="Select date" @on-change="chooseDate" style="width: 234px"></DatePicker>
        </div>
        <div class="table_top">
          <span class="font"> Status </span>
          <Select v-model="model" style="width:160px" placeholder="All">
            <Option v-for="item in status" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="table_top">
          <span class="font"> Product Name </span>
          <Input v-model="search" style="width: 230px" />
        </div>
        <button class="button1" @click="search1">Search</button>
        <button class="button2" @click="create">Create</button>
        <div class="table_content">
          <Table :columns="columns1" :data="historyData" width="1115px" style="margin-top: 20px"></Table>
          <Page size="small" :total='pages()' :page-size='pageSize' @on-change="changePage"	/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #management{
    .content{
      width: 1200px;
      margin: 20px auto;
      h5{
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 10px;
      }
      .table{
        padding: 30px 40px;
        height: 660px;
        border: 1px solid #e2e9f6;
        .button1{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 70px;
          color: #fff;
          background: #42a5f6;
          border-radius: 4px;
          margin-right: 25px;
          cursor: pointer;
        }
        .button2{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 70px;
          color: #42a5f6;
          background: #fff;
          border-radius: 4px;
          border: 1px solid #42a5f6;
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
          .ivu-table-cell{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
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
            value: 'offline',
            label: 'offline'
          },
          {
            value: 'Pending Audit',
            label: 'Pending Audit'
          },
          {
            value: 'Online',
            label: 'Online'
          },
        ],
        columns1: [
          {
            title: 'Product Name',
            key: 'productName',
            align:'center',
            width: 250
          },
          {
            title: 'Product Type',
            key: 'Type',
            align:'center',
            width: 100
          },
          {
            title: 'Product Description',
            key: 'Description',
            align:'center',
            width:220
          },
          {
            title: 'Status',
            key: 'status',
            align:'center'
          },
          {
            title: 'Apply Time',
            key: 'time',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center',
            render: (h, params) => {
              if(params.row.status == 'Online'){
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
                        this.$http.get('/editStatus/editByName?status=-1&productId=' + params.row.name).then(res=>{
                          window.location.reload()
                        })
                      }
                    }
                  }, 'Remove'),
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
                        window.sessionStorage.setItem('pro','已完成');
                        window.sessionStorage.setItem('success',false);
                        window.sessionStorage.setItem('time',params.row.time);
                        window.sessionStorage.setItem('name',params.row.productName);
                        this.$router.push('/page/product/ProductAudit')
                      }
                    }
                  }, 'Detail')
                ])
              }else if(params.row.status == 'Pending Audit'){
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
                      window.sessionStorage.setItem('success',true);
                      window.sessionStorage.setItem('pro','待审核');
                      window.sessionStorage.setItem('time',params.row.time);
                      window.sessionStorage.setItem('name',params.row.productName);
                      this.$router.push('/page/product/ProductAudit')
                    }
                  }
                }, 'Detail')
              }else if(params.row.status == 'offline'){
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
                        window.sessionStorage.setItem('pro','哦！');
                        window.sessionStorage.setItem('success',false);
                        window.sessionStorage.setItem('time',params.row.time);
                        window.sessionStorage.setItem('name',params.row.productName);
                        this.$router.push('/page/product/ProductAudit')
                      }
                    }
                  }, 'Detail')
                ])
              }
            }
          }
        ],
        data1:[
          {
            productName: 'SD-WAN',
            Type: 'Net',
            Description: 'Provides central management tools, network visibility and agility for customer to form WAN network at finger tips.',
            status: '',
            time:'',
            name:'product1'
          },
          {
            productName: 'Cloud Connect',
            Type: 'Net',
            Description: 'Cloud Connect Cloud to Cloud for Minor Enterprise',
            status: '',
            time:'',
            name:'product2'
          },
          {
            productName: 'Cloud Connect Cloud to Cloud',
            Description: 'Cross region connection between Clouds in China and Oversea.Business data synchronization multiple CSP',
            Type: 'Net',
            status: '',
            time:'',
            name:'product3'
          },
          {
            productName: 'Cloud Connect On-Premise to Cloud',
            Type: 'Net',
            Description: 'Connect apps and content hosted on Cloud to Customer LOB systems hosted on premises.',
            status: '',
            time:'',
            name:'product4'
          },
          {
            productName: 'Elastic Compute Service',
            Type: 'Cloud',
            Description: 'An online computing service that offers elastic and secure virtual cloud servers to cater all your cloud hosting needs.',
            status: '',
            time:'',
            name:'product5'
          },
          {
            productName: 'Cloud Connect Basic',
            Type: 'Net',
            Description: 'Cloud Connect Cloud to Cloud for Minor Enterprise',
            status: '',
            time:'',
            name:'createProduct'
          },
        ],
        model: '',
        search:'',
        pageSize:50,
        HistoryDataEm:[],
        historyData:[],
        date:[]
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
        /*this.HistoryDataEm = this.data1;
        if(this.data1.length < this.pageSize){
          this.historyData = this.HistoryDataEm;
        }else{
          this.historyData = this.HistoryDataEm.slice(0,this.pageSize);
        }*/
      },
      search1(){
        let resouse = [];
        if(this.search != ''){
          this.$http.get('/productInfo/listInfo')
            .then(res=>{
                  let arr = [];
                  res.data.map((item, index)=>{
                    this.data1.map((r, i)=>{
                      if(r.name == item.productId){
                        r.time = item.time;
                        if(item.status == 0){
                          this.data1.splice(i,1);
                          return;
                        }else if(item.status ==3){
                          r.status = 'Online'
                        }else if(item.status ==2){
                          r.status = 'Pending Audit'
                        }else if(item.status == -1){
                          r.status = 'offline'
                        }
                        arr.push(this.data1[i]);
                      }
                    })
                  });
                  
                  this.data1 = arr;
                  this.data1.map((item,index)=>{
                      if(this.search==item.productName){
                          this.historyData=[];
                          this.historyData.push(this.data1[index]);

                      }
                  })

                  this.pageAction()
            })
        }else if(this.search === ''){
          this.$http.get('/productInfo/listInfo')
            .then(res=>{
              this.historyData=this.data1;
            })
        }
      },
      create(){
        this.$router.push('/page/product/newProduct');
      },
      chooseDate(item){
        this.historyData.map(Res=>{
          if(Res.time > item[0]  && Res.time < item[1]){
            this.date.push(Res)
          }
        });
      }
    },
    mounted(){
      window.sessionStorage.clear();
      this.$http.get('/productInfo/listInfo')
        .then(res=>{
          let status;
          let arr = [];
          res.data.map((item,index)=>{
            this.data1.map((r, i)=>{
              if(r.name == item.productId){
                r.time = item.time;
                if(item.status == 0){
                  this.data1.splice(i,1)
                  return;
                }else if(item.status ==3){
                  r.status = 'Online'
                }else if(item.status ==2){
                  r.status = 'Pending Audit'
                }else if(item.status == -1){
                  r.status = 'offline'
                }
                arr.push(this.data1[i]);
              }
            })
          });
          this.data1 = arr;
          this.historyData=this.data1;
        })
    },
  }
</script>

