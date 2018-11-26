<template>
    <div class="formListPage">
        <div class="title">My Form</div>
        <div class="contant">
            <div class="top">
                <strong>All of 3 items </strong>
                <Select v-model="model3" style="width:140px;margin-left:12px;" placeholder="All Status">
                    <Option v-for="item in device" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <!--<Button type="primary" style="width:150px;height:32px;border-radius:5px;float:right" @click="Search">Creat a new from</Button>-->
            </div>
            <Table :columns="columns1" :data="data1"></Table>
        </div>
      <Modal
        title="Form Information"
        v-model="modal"
        :mask-closable="false"
      >
        <p>ID:{{id}}</p>
        <p>Type:{{type}}</p>
        <div class="con">
          <Form>
            <FormItem label="Application Time" :label-width="120">
              {{time}}
            </FormItem>
            <FormItem label="Applicant" :label-width="120">
              {{Applicant}}
            </FormItem>
            <FormItem label="Enterprise" :label-width="120">
              {{Enterprise}}
            </FormItem>
            <FormItem label="Product Name" :label-width="120">
              {{ProductName}}
            </FormItem>
            <FormItem label="Status" :label-width="120">
              {{Status}}
            </FormItem>
            <FormItem label="Fee calculation" :label-width="120">
              {{Fee}}
            </FormItem>
          </Form>
        </div>
        <img class="status" src="../../../assets/img/icon-status.png" alt="">
        <ul class="time clearfix">
          <li>2018.11.20 19:09:21</li>
          <li style="padding-left: 40px">2018.11.20 19:12:10</li>
          <li></li>
        </ul>
        <div>
          <p>Reviewer ID:admin Lee</p>
          <p>
            Adjudication:
            <Select v-model="result" style="width:140px;margin-left:12px;" disabled="disabled">
              <Option value="Pass">Pass</Option>
            </Select>
            <Input placeholder="input detail information" disabled="disabled" style="width: auto"></Input>
          </p>
        </div>

        <div slot="footer" class="footer">
          <Button class="button1" type="primary" size="large" @click="ok">Ok</Button>
          <Button class="button2" type="primary" size="large" @click="ok">Cancel</Button>
        </div>
      </Modal>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        device:[{
            value:'All Status',
            label:'All Status'
        }],
      modal:false,
      model3:'',
      id:'',
      type:'',
      Type:'',
      time:'',
      Applicant:'',
      Status:'',
      Assignee:'',
      Enterprise:'',
      ProductName:'',
      Fee:'',
      columns1:[
            {
                title:'Time',
                key:'time',
                align:'center',
                // sortable: true
            },{
                title:'Type',
                key:'Type',
                align:'center',
                // sortable: true
            },{
                title:'Applicant',
                key:'Applicant',
                align:'center',
                // sortable: true
            },
          {
                title:'Status',
                key:'Status',
                align:'center',
                // sortable: true
            },{
                title:'Assignee',
                key:'Assignee',
                align:'center',
                // sortable: true
            },{
                title:'Operation',
                key:'Operation',
                align:'center',
                render: (h, params) => {
                    return h('div', [
                        // h('Button', {
                        //   props: {
                        //     type: 'primary',
                        //     size: 'small'
                        //   },
                        //   style: {
                        //     backgroundColor:"#fff",
                        //     color:"#42a5f6",
                        //     border:'none'
                        //   },
                        //   on: {
                        //     click: () => {
                        //       this.review()
                        //     }
                        //   }
                        // }, 'Review'),
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                backgroundColor:"#fff",
                                color:"#42a5f6",
                                border:'none'
                            },
                            on: {
                                click: () => {
                                  this.show(params.row,params.index)
                                }
                            }
                        }, 'Detail')
                    ]);
                }
            }
        ],
      data1:[
          {
            time:'2018.11.20 19:09:21',
            Type:'site down',
            Status:'Done',
            Assignee: 'system manager',
            Applicant:'cmiuser',
            Enterprise:'chinamobile',
            ProductName:'SDN',
            Feecalculation:'NONE',
            ID: 20180101989131

          },{
            time:'2018.11.20 13:21:39',
            Type:'confirm enterprise information',
            Status:'Done',
            Assignee: 'products manager',
            Applicant:'cmiuser',
            Enterprise:'Tencent',
            ProductName:'Cloud Connect Basic',
            Feecalculation:'NONE',
            ID: 20180101989132
          },{
            time:'2018.11.19 15:13:09',
            Type:'quota bandwidth ',
            Status:'Done',
            Assignee: 'products manager',
            Applicant:'cmiuser',
            Enterprise:'Tencent',
            ProductName:'Cloud Connect',
            Feecalculation:'NONE',
            ID: 20180101989133
          }
          // ,{
          //   time:'2018.01.07 11:00',
          //   Type:'Enable Products',
          //   Status:'Processing',
          //   Assignee: 'products manage',
          //   Applicant:'cmiuser',
          //   Enterprise:'CMI',
          //   ProductName:'Cloud Connect1',
          //   Feecalculation:'NONE',
          //   ID: 20180101989134
          // },{
          //   time:'2018.01.09 12:00',
          //   Type:'Enable Products',
          //   Status:'Done',
          //   Assignee: 'products manage',
          //   Applicant:'cmiuser',
          //   Enterprise:'Tencent',
          //   ProductName:'Cloud Connect2',
          //   Feecalculation:'NONE',
          //   ID: 20180101989135
          // },{
          //   time:'2018.01.10 12:30',
          //   Type:'confirm enterprise information',
          //   Status:'Done',
          //   Assignee: 'products manage',
          //   Applicant:'cmiuser',
          //   Enterprise:'CMI',
          //   ProductName:'Elastic Compute Service',
          //   Feecalculation:'NONE',
          //   ID: 20180101989136
          // }
        ],
      result:'Pass'
    }
  },
  methods: {
    detail(){
      this.$router.push('/page/form/detailForm')
    },
    review(){
      this.$router.push('/page/form/reviewForm')
    },
    show(item,index){
      if(index===0){
        console.log(item)
        this.modal=true;
        this.id=item.ID;
        this.type=item.Type;
        this.time=item.time;
        this.Applicant=item.Applicant;
        this.Enterprise=item.Enterprise;
        this.ProductName=item.ProductName;
        this.Status=item.Status;
        this.Fee=item.Feecalculation;
      }
    },
    ok(){
      this.modal=false;
    }
  },
  components: {

  }
}
</script>

<style lang="less">
.formListPage{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;
    }
    .contant{
        width: 100%;
        padding: 20px 40px;
        border:1px solid #e2e9f6;
        .top{
            margin-bottom: 20px;
            overflow: hidden;
        }
    }
}
.time{
  margin-bottom: 15px;
  li{
    float: left;
    width: 31%;
  }
}
.ivu-btn-text{
  display: none;
}
.ivu-modal-body{
  p{
    font-size: 16px;
    margin-bottom: 10px;
  }
}
.con{
  border: 1px solid #e2e9f6;
}
.ivu-form-item{
  margin-bottom: 0;
}
.ivu-modal-footer{
  border: none;
}
.status{
  display: block;
  margin: 0 auto;
}
.fromListPage{
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  .title{
    color:#666;
    line-height: 56px;
    font-size: 14px;
    font-weight: 700;
  }
  .contant{
    width: 100%;
    padding: 20px 40px;
    border:1px solid #e2e9f6;
    .top{
      margin-bottom: 20px;
    }
  }
}
  .footer{
    text-align: center;
    .button2{
      color: #42a5f6;
      background: #fff;
    }
  }
</style>
