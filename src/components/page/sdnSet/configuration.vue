<template>
  <div id="configuration">
    <div class="content">
      <h5>Configure</h5>
      <div class="table">
        <div class="table_top">
          <span class="font"> Service </span>
          <Select v-model="model" style="width:207px" placeholder="All">
            <Option v-for="item in status" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="table_top">
          <span class="font"> Create Time </span>
          <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 234px" ></DatePicker>
        </div>
        <Button type="primary" @click="search">Search</Button>
        <Button class="success" @click="create">Create</Button>
        <div class="table_content">
          <Table :columns="columns1" :data="data1" width="1115px" style="margin-top: 20px"></Table>
          <Page size="small" :total='pages()' :page-size='pageSize' @on-change="changePage"	/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #configuration{
    width: 100%;
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
          width: 115px;
          color: #fff;
          background: #42a5f6;
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
        status: [
          {
            value: 'Cloud Connect',
            label: 'Cloud Connect'
          },
          {
            value: 'SDN Failed',
            label: 'SDN Failed'
          },
          {
            value: 'SD-WAN',
            label: 'SD-WAN'
          },
        ],
        columns1: [
          {
            title: 'Config No',
            key: 'configNo',
            align:'center'
          },
          {
            title: 'Service',
            key: 'service',
            align:'center',
            width:160
          },
          {
            title: 'Create Time',
            key: 'createTime',
            align:'center',
            width:140
          },
          {
            title: 'Status',
            key: 'status',
            align:'center',
            width:150
          },
          {
            title: 'Updated By',
            key: 'updateBy',
            align:'center'
          },
          {
            title: 'Updated Time',
            key: 'updateTime',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center',
            width:217,
            render: (h, params) => {
                if(params.row.status=='Pending Config'){
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
                          /*sdn*/
                          var name=params.row.service;
                          if(name.indexOf('SD-WAN')>-1){
                            this.$router.push('/page/order/Sdwan?type=2&title='+params.row.configNo);
                          }else if(name.indexOf('SDN')>-1){
                            this.$router.push('/page/order/sdnSet?type=2&title='+params.row.configNo);
                          }else if(name.indexOf('Cloud Connect Service')>-1){
                            /*云互联配置详情*/
                            this.$router.push('/page/order/cloudSet?type=2&title='+params.row.configNo);
                          }
                        }
                      }
                    }, 'Edit'),
                  ])
                }else if(params.row.status=='Config Successful' ){
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
                          /*sdn*/
                          var name=params.row.service;
                          if(name.indexOf('SD-WAN')>-1){
                            this.$router.push('/page/order/SdwanDetail?type=2&title='+params.row.configNo);
                          }else if(name.indexOf('SDN')>-1){
                            this.$router.push('/page/order/sdnSetDetail?type=2&title='+params.row.configNo);
                          }else if(name.indexOf('Cloud Connect Service')>-1){
                            /*云互联配置详情*/
                            this.$router.push('/page/cloudSet/cloudSetDetail?type=2&title='+params.row.configNo);
                          }

                        }
                      }
                    }, 'Detail'),
                  ])
                }else if(params.row.status == 'Canceled'){
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
                            this.$router.push({
                              path:'/page/order/cloudSet',
                              query: {
                                title:params.row.configNo
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
        model: '',
        pageSize:50,
        HistoryDataEm:[],
        historyData:[],
        linshi:3

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
      search(){

      },
      create(){
        this.$router.push('/page/sdnSet/sdnSet')
      },
      getList(){
        this.$http.post('/workOrder/configList').then(res=>{
          res.data.map(function(i){
              if(i.status==1){
                i.status='Delivered';
              }else if(i.status==2){
                i.status='Pending Config';
              }else if(i.status==3){
                i.status='Config Successful';
              }else if(i.status == -1){
                i.status='Canceled';
              }
          });
          this.data1=res.data;
        })
      },
      submit(){
        let that = this;
        let use = sessionStorage.getItem('use');
        that.loading=true;
        setTimeout(function(){
          that.$http.post('/productOrder/configEdit?configNo='+that.workNo+'&userName='+use).then((res)=>{
            that.success=true;
          })},2000);
        setTimeout(function(){
          that.$router.push('/page/sdnSet/configuration')
        },4000)
      }
    },
    mounted(){
      this.getList();

    },
  }
</script>

