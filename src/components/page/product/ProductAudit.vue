<template>
  <div id="ProductAudit">
    <h5>Edit Product</h5>
    <Tabs type="card" :animated="false">
      <TabPane label="Basic info">
        <div class="first">
          <div class="topic">
            <h4>Status : {{this.set}}</h4>
            <span> ( Update time :{{this.times}} ) </span>
          </div>
          <div class="btn" v-if="set=='Pending Audit'">
            <Button @click="chulaiba" v-if="side1">Audit</Button>
            <Button>Download</Button>
          </div>
          <div class="popupWindow" v-if="side">
              <p>
                <span>Audit</span>
                <Icon type="md-close" style="font-size: 30px;cursor: pointer;position:absolute;right: 0px;" @click="huiquba"/>
              </p>
            <div style="padding: 8px 30px;" class="popupWindowColor">
              <Checkbox v-model="single">Agree</Checkbox>
              <Checkbox v-model="single1">Disagree</Checkbox>
            </div>
            <div style="padding: 8px 30px;">
              <template>
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">Upload review document</Button>
                  <span style="font-size: 14px;">doc/docx/jpeg,at most 10M</span>
                </Upload>
              </template>
            </div>
            <div style="padding: 8px 30px;">
              <Input type="textarea" :autosize="true" size="large" style="width: 300px;height: 50px;" placeholder="remark，at most 200 characters" />
            </div>
            <div style="display: flex;justify-content: center;align-items: center;margin-top: 45px" class="popupWindowColor">
              <Button type="primary" style="margin-right: 30px" @click="tiaoba">Confirm</Button>
              <Button type="success" style="background: #fff;border: 1px solid #e2e9f6;color: black !important;" @click="goBack">Cancel</Button>
            </div>
          </div>
        </div>
        <div class="productInfo">
          <h4>Product Info</h4>
          <ul class="productInfoContent">
            <template>
              <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="Product Name" prop="name">
                  {{this.name}}
                </FormItem>
                <FormItem label="Product Type" prop="name">
                  Net
                </FormItem>
                <FormItem label="Product Decription" prop="name" v-if="name == 'Cloud Connect Basic' || name == 'Cloud Connect Basic' || name == 'Cloud Connect'">
                  Cloud Connect Cloud to Cloud for Minor Enterprise
                </FormItem>
                <FormItem label="Product Decription" prop="name" v-if="name == 'SD-WAN'">
                  Provides central management tools, network visibility and agility for customer to form WAN network at finger tips.
                </FormItem>
                <FormItem label="Product Decription" prop="name" v-if="name == 'Elastic Compute Service'">
                  An online computing service that offers elastic and secure virtual cloud servers to cater all your cloud hosting needs.
                </FormItem>
                <FormItem label="Product Decription" prop="name" v-if="name == 'Cloud Connect Cloud to Cloud'">
                  Cross region connection between Clouds in China and Oversea.Business data synchronization multiple CSP.
                </FormItem>
                <FormItem label="Product Decription" prop="name" v-if="name == 'Cloud Connect On-Premise to Cloud'">
                  Connect apps and content hosted on Cloud to Customer LOB systems hosted on premises.
                </FormItem>
                <FormItem label="Product Picture" prop="name">
                  <div class="Picture1"></div>
                  <div class="Picture2"></div>
                </FormItem>
              </Form>

            </template>
          </ul>
        </div>
        <template v-if="name !='SD-WAN'">
          <div class="Feeinfo">
            <h4>Fee info</h4>
            <Collapse v-model="value1">
              <Panel name="1">
                10Mbps Monthly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        10Mbps Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        Cloud Connect Cloud to Cloud for Minor Enterprise
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        1000HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10% 100HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    Cloud Connect SE    10Mbps Monthly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="2">
                10Mbps Yearly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        10Mbps Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        Cloud Connect Cloud to Cloud for Minor Enterprise
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        10000HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    1000HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    Cloud Connect SE    10Mbps Yearly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="3">
               100Mbps Monthly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        100Mbps Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        Cloud Connect Cloud to Cloud for Minor Enterprise
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        5000HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    500HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    Cloud Connect SE    100Mbps Monthly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="4">
                100Mbps Yearly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        100Mbps Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        Cloud Connect Cloud to Cloud for Minor Enterprise
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        50000HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    5000HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    Cloud Connect SE    100Mbps Yearly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
        </template>
        <template v-if="name =='SD-WAN'">
          <div class="Feeinfo">
            <h4>Fee info</h4>
            <Collapse v-model="value1">
              <Panel name="1">
                10Mbps Monthly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        10Mbps Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        SD-WAN Standard Fee
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        500HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    50HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    SD-WAN SE    10Mbps Monthly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="2">
                10Mbps Yearly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        10Mbps Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        SD-WAN Standard Fee
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        5000HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    500HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    SD-WAN SE    10Mbps Yearly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="3">
               100Mbps Monthly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        100Mbps Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Monthly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        SD-WAN Standard Fee
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        2500HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    250HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    SD-WAN SE    100Mbps Monthly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="4">
                100Mbps Yearly Rental Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        100Mbps Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Yearly Rental Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        SD-WAN Standard Fee
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        25000HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    2500HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    SD-WAN SE    100Mbps Yearly Rental Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="5">
                CPE-M Device Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        CPE-M Device Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Device Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        SD-WAN Standard Fee
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        200HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    20HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    SD-WAN SE    CPE-M Device Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
          <div class="Feeinfo">
            <Collapse v-model="value1">
              <Panel name="6">
                License Fee
                <p slot="content">
                  <template>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                      <FormItem label="Fee Name" prop="name">
                        License Fee
                      </FormItem>
                      <FormItem label="Fee Type" prop="name">
                        Software Fee
                      </FormItem>
                      <FormItem label="Fee Decription" prop="name">
                        SD-WAN Standard Fee
                      </FormItem>
                      <FormItem label="Price with Tax" prop="name">
                        100HKD
                      </FormItem>
                      <FormItem label="Tax" prop="name">
                        10%    10HKD
                      </FormItem>
                      <FormItem label="Composing" prop="name">
                        Net    SD-WAN SE    License Fee    100%
                      </FormItem>
                    </Form>
                  </template>
                </p>
              </Panel>
            </Collapse>
          </div>
        </template>
        <div class="Feeinfo">
          <template>
            <h4>Apply Scope</h4>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="Availble Time" prop="name">
                {{this.time}}~2019-1-1
              </FormItem>
              <FormItem label="Availble People" prop="name">
                All  Level B ,Level C
              </FormItem>
              <FormItem label="Availble Area" prop="" v-if="name == 'SD-WAN'">
                Homepage recommend,Product list recommend
              </FormItem>
              <FormItem label="Availble Area" prop="" v-if="name != 'SD-WAN'">
                {{distrable}}
              </FormItem>
              <h4>Apply Rules</h4>
              <FormItem label="Product Mutex" prop="">
                None
              </FormItem>
              <FormItem label="Product and Trade Mutex" prop="">
                None
              </FormItem>
              <FormItem label="Product Review" prop="">
                No
              </FormItem>
            </Form>
          </template>
        </div>
      </TabPane>
      <TabPane label="Operating info">
        <Table :columns="Auditcolumns" :data="Auditdata"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>

<style lang="less">
  #ProductAudit{
    width: 1200px;
    margin: 20px auto;
    position: relative;
    .ivu-tabs-tabpane{
      border: 1px solid #e2e9f6;
      padding: 30px 40px;
    }
    .popupWindow{
      position: absolute;
      background-color: #fff;
      border: 2px solid #e2e9f6;
      border-radius: 6px;
      font-size: 16px;
      top: 180px;
      left: 500px;
      z-index: 2;
      padding-bottom: 30px;
      .popupWindowColor{
        .ivu-btn{
          color: #fff !important;
        }
      }
      textarea.ivu-input{
        height: 70px !important;
      }
      p{
        display: flex;
        align-items: center;
        margin: 0 10px;
        border-bottom: 2px solid #e2e9f6;
        position: relative;
        height: 45px;
        span{
          display: inline-block;
          float: left;
        }
      }
    }
    h5{
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .ivu-form-item-label{
      width: 171px !important;
      font-size: 14px;
    }
    .ivu-form-item-content{
      font-weight: 700;
      font-size: 14px;
    }

    .first{
      border-bottom: 1px solid #e2e9f6;
      display: flex;
      justify-content: space-between;
      .ivu-btn{
        color: #42a5f6;
        border: 1px solid #42a5f6;
      }
      .topic{
        h4{
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
          display: inline-block;
        }
        span{
          display: inline-block;
          margin-left: 10px;
          color: #cacaca;
        }
      }
    }
    .productInfo{
      h4{
        font-size: 18px;
        font-weight: 500;
        margin:30px 0 15px 0;
        display: inline-block;
      }
      .productInfoContent{
        width: 1050px;
        margin: 0 auto;
        .productName{
          font-weight: 400;
          font-size: 14px;
          margin-right: 30px;
        }
        .Picture1{
          display: inline-block;
          width: 200px;
          height: 200px;
          background: url("../../../assets/img/chanpinye_content.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .Picture2{
          display: inline-block;
          width: 200px;
          height: 200px;
          background: url("../../../assets/img/head_bg.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .productName1{
          font-weight: 700;
          font-size: 14px;
        }
      }
    }
    .Feeinfo{
      margin-bottom: 15px;
      h4{
        font-size: 18px;
        font-weight: 500;
        margin:30px 0 15px 0;
        display: inline-block;
      }
      .ivu-collapse-header{
        font-size: 16px;
        font-weight: 700;
        background: #f2faff;
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        Auditcolumns: [
          {
            title: 'Operator',
            key: 'Operator',
            align:'center'
          },
          {
            title: 'Operator Time',
            key: 'OperatorTime',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center'
          },
          {
            title: 'Status',
            key: 'Status',
            align:'center'
          },
          {
            title: 'Remark',
            key: 'Remark',
            align:'center'
          }
        ],
        Auditdata: [],
        name:'',
        formValidate: {
          name: '',
        },
        ruleValidate: {
          name: [
            { required: true,  trigger: 'blur' }
          ],
        },
        value1:'1',
        value2:'1',
        time:this.getTime(),
        set:'',
        side:false,
        side1:true,
        single:'',
        single1:'',
        times:'',
        distrable:'User dashboard recommend'
      }
    },
    methods:{
      tiaoba(){
        this.$http.get('/editStatus/editByName?productId=createProduct&status=3').then(res=>{
          if(res.data.resultCode == 200){
            this.side = false;
            this.$router.push('/page/product/Management')
          }
        })
      },
      chulaiba(){
        this.side = true
      },
      huiquba(){
        this.side = false
      },
      goBack(){
        this.side = false;
      },
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
    },
    created(){
      this.side1 = window.sessionStorage.getItem('success');
    },
    mounted(){
      this.$http.get('p').then(res=>{
      }).catch(error=>{
        this.times = window.sessionStorage.getItem('time')
        this.name = window.sessionStorage.getItem('name');
        if(this.name == 'Cloud Connect Basic'){
          this.distrable = 'User dashboard recommend'
        }else if(this.name == 'SD-WAN'){
          this.distrable = 'Homepage recommend,Product list recommend'
        }else if(this.name == 'Cloud Connect'){
          this.distrable = 'Product list recommend'
        }else if(this.name == 'Cloud Connect Cloud to Cloud'){
          this.distrable = 'Product list recommend'
        }else if(this.name == 'Cloud Connect On-Premise to Cloud'){
          this.distrable = 'None'
        }else if(this.name == 'Elastic Compute Service'){
          this.distrable = 'Subcribe page recommend'
        }
        if(window.sessionStorage.getItem('pro') == '待审核'){
          this.set = 'Pending Audit'
        }else if(window.sessionStorage.getItem('pro') == '已完成'){
          this.set = 'Online'
        }else{
          this.set = 'Offline'
        }
        this.Auditdata = [
          {
            Operator: '产品管理员A',
            OperatorTime: "2018/11/01 23:59",
            Operation: '上线申请',
            Status: '待审核',
            Remark:''
          },
          {
            Operator: '产品管理员B',
            OperatorTime: "2018/11/01 09:59",
            Operation: '上线申请',
            Status: '已驳回',
            Remark:''
          },
          {
            Operator: '产品管理员A',
            OperatorTime: "2018/11/01 23:59",
            Operation: '上线申请',
            Status: '待审核',
            Remark:''
          },
          {
            Operator: '产品管理员B',
            OperatorTime: "2018/11/01 23:59",
            Operation: '上线申请',
            Status: '待审核',
            Remark:''
          },
        ]
      })
    }
  }
</script>

