<template>
    <div class="UserFromPage">
        <div class="title">User Log</div>
        <div class="box">
          <div class="contant clearfix">
            <div class="pull-left">
              <div class=" mb-20">
                <span class="name">Operation Time </span>
                <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 234px"></DatePicker>
                <span class="name w75">Source</span>
                <Select value="All" style="width: 235px;">
                  <Option value="All">All</Option>
                </Select>
                <span class="name w75">Result</span>
                <Select value="All" style="width: 235px;">
                  <Option value="All">All</Option>
                </Select>
              </div>

              <div class="mb-20">
                <span class="name">Username</span>
                <Input placeholder="search user operation record" style="width: 867px"></Input>
              </div>
            </div>
            <div class="pull-right mr-20">
              <Button type="primary" style="margin-top: 30px">Search</Button>
            </div>
          </div>
          <p style="margin-left: 20px">1230 information found for admin</p>
          <div class="table">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
          <Page :total="10" size="small" class="pull-right" style="margin-right: 20px;"/>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            columns1:[
                {
                    title:'Operation Time',
                    key:'Time',
                    align:'center',
                    width:260
                },{
                    title:'Source',
                    key:'Source',
                    align:'center',
                    width:200
                },{
                    title:'Username',
                    key:'Username',
                    align:'center',
                },{
                    title:'Type',
                    key:'Type',
                    align:'center',
                },{
                    title:'Result',
                    key:'Result',
                    align:'center',
                },{
                    title:'Download Log',
                    key:'Download',
                    align:'center',
                }
            ],
            data1:[
                {
                    Time:'2018-11-20 21:00:09',
                    Source:'User Operation',
                    Username:'Products Manager',
                    Type:'Review Orders',
                    Result:'Successful',
                    Download:'Download'
                },{
                    Time:'2018-11-20 19:54:09',
                    Source:'User Operation',
                    Username:'Products Manager',
                    Type:'Review Prodoucts',
                    Result:'Successful',
                    Download:'Download'
                },{
                    Time:'2018-11-19 22:14:20',
                    Source:'User Operation',
                    Username:'Products Manager',
                    Type:'Create Products',
                    Result:'Successful',
                    Download:'Download'
                },{
                    Time:'2018-11-19 18:56:24',
                    Source:'User Operation',
                    Username:'System Manager',
                    Type:'Config',
                    Result:'Successful',
                    Download:'Download'
                }
            ]
        }
    },
    methods: {
        Search(){

        },
        show(){

        }
    },
    components: {

    }
}
</script>

<style lang="less">
.UserFromPage{
    width: 1200px;
    margin: 0 auto;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;

    }
    .name{
      font-size: 14px;
      color: #666666;
      display: inline-block;
      width: 100px;
      text-align: right;
      &.w75{
        width: 75px;
       }
    }
    .contant{
        width: 100%;
        padding: 20px 40px 20px 40px;
        .top{
            margin-bottom: 20px;
            overflow: hidden;
        }
    }
    .box{
      border: 1px solid #e2e9f6;
      padding-bottom: 50px;
    }
    .table{
      padding: 20px;
    }
}
</style>
