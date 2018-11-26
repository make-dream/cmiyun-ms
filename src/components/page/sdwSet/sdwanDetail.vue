<template>
    <div class="orderCustom">
        <div class="main">
          <h5 class="mb-20">Configure Info</h5>
          <div class="con">
            <Form :label-width="80" label-position="left">
              <FormItem label="Status" :class="status==0?'line':''">
                <div class="inline" style="width: 100%;padding-left: 40px" >
                  <i class="pull-left">
                    <i class="circle active" v-if="status != -1"></i>
                    <i class="line active" v-if="status != -1"></i>
                    <i class="circle active"  v-if="status != -1"></i>
                  </i>

                </div>
                <div class="statusInfo inline">
                  <i>
                    <span v-if="status==2 || status==3" class="second">Pending Config</span>
                    <span v-if="status==1" class="second">　　Delivered</span>
                    <span v-if="status==-1" class="thirtd">　　Canceled</span>
                    <br>
                    <span class="suffix">{{createTime}}</span>
                  </i>
                  <i>
                    <span v-if="status==3" class="second" style="margin-left: 75px">Config Successful </span>
                    <br>
                    <span v-if="status==3" class="suffix" style="margin-left: 93px">{{updateTime}}</span>
                  </i>
                </div>
              </FormItem>
              <h6>Basic Info</h6>
              <div class="content">
                <FormItem label="Config NO." :label-width="125">
                  <span>{{configNo}}</span>
                </FormItem>
                <FormItem label="Create Time" :label-width="125">
                  <span>{{createTime}}</span>
                </FormItem>
                <FormItem label="Service" :label-width="125">
                  {{service}}
                </FormItem>
                <FormItem label="Action" :label-width="125">
                  {{operation}}
                </FormItem>
                <FormItem label="Bandwidth" :label-width="125">
                  10Mbps
                </FormItem>
                <FormItem label="Availability" class="mb-50" :label-width="125">
                  99.99%
                </FormItem>
              </div>
            </Form>
            <h6>Subscription Info</h6>
            <div class="content">
              <FormItem label="Subscription NO." :label-width="125">
                <span>{{subscriptionNo}}</span>
              </FormItem>
              <FormItem label="Customer Name" :label-width="125">
                <span>cmiuser</span>
              </FormItem>
              <FormItem label="Contacts" :label-width="125">
                Kevin/13800001234
              </FormItem>
              <FormItem label="Subscription Status" :label-width="125">
                <span v-if="status==1">Delivered</span>
                <span v-if="status==2">Pending Config</span>
                <span v-if="status==3">Config Successful</span>
              </FormItem>
              <FormItem label="Subscription Cycle" :label-width="125">
                5 Months
              </FormItem>
            </div>

            <h6>Net configuration
              <Select value="SD-WAN" disabled>
                <Option value="SD-WAN">SD-WAN</Option>
              </Select>
            </h6>
            <div class="Feeinfo">
              <div v-for="(item,index) in siteList">
              <Collapse v-model="value2">
                <Panel name="1">
                  <span>site{{index+1}}-{{item.siteAddress}}</span>
                  <p slot="content">
                    <template>
                      <Form :label-width="80" :model="formValidate" :rules="ruleValidate">

                          <FormItem label="Site Address" prop="address">
                            <span>{{item.siteAddress}}</span>
                          </FormItem>
                          <FormItem label="Topology Role" prop="address">
                            <span>{{item.topologyRole}}</span>
                          </FormItem>
                          <FormItem label="SD-WAN Bandwidth" prop="address">
                            <span>{{item.bandwidth}}</span>
                          </FormItem>
                          <FormItem label="Access Type" prop="address">
                            <span v-for="(j,index) in item.accessType">{{j}},</span>
                          </FormItem>
                          <FormItem label="WLAN">
                            <div v-for="(j,idx) in item.wlans.length" class="mb-10" style="padding-left: 91px;">
                              <span>ip</span>
                              <span>{{item.wlans[idx].ip}}</span>
                              <span>　PORT</span>
                              <span class="mr-20 w104">{{item.wlans[idx].port}}</span>
                              <span>VLAN ID</span>
                              <span class="w104 mr-20">{{item.wlans[idx].vlanId}}</span>
                            </div>
                          </FormItem>
                          <FormItem label="LAN">
                            <div class="mb-10" style="padding-left: 91px" v-for="(j,idx) in item.lans.length">
                              <span>ip</span>
                              <span>{{item.lans[idx].ip}}</span>
                              <span>　PORT</span>
                              <span class="mr-20 w104">{{item.lans[idx].port}}</span>
                              <span>VLAN ID</span>
                              <span class="w104 mr-20">{{item.lans[idx].vlanId}}</span>
                            </div>
                          </FormItem>

                      </Form>
                    </template>
                  </p>
                </Panel>
              </Collapse>
            </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="less">
  .orderCustom{
    background: #f8f8f8;
    .main{
      width: 1200px !important;
      margin: 0 auto;
      padding-top: 50px !important;
      padding-bottom: 30px;
      input,.ivu-select{
        width: 236px;
        height: 40px;
      }
      .btn{
        width: 120px;
        &.btn-gray{
            background: #89a0b6;
            border: #89a0b6;
            outline: none;
         }
      }
      .w104{
        input,.ivu-select{
          width: 104px;
        }
      }
      .w506{
        input,.ivu-select{
          width: 486px;
        }
      }
      img{
        vertical-align: middle;
        cursor: pointer;
      }
      .ivu-select-single .ivu-select-selection{
        height: 40px;
        min-height: 40px;
      }
      .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
        height: 40px;
        min-height: 40px;
        line-height: 40px;
      }
      .ivu-input-wrapper{
        display: inline;
      }
    }
    h5{
      font-size: 14px;
      font-weight: normal;
      color: #a6b0c5;
    }
    h6{
      font-size: 18px;
      color: #8390a4;
      font-weight: normal;
      margin-bottom: 10px;
    }
    .con{
      background: white;
      padding: 50px 40px;
      .line{
        border-bottom: 1px solid #eceff9;
        padding-bottom: 20px;
        margin-bottom: 40px ;
      }
      .ivu-form-item{
        margin-bottom: 10px;
      }
  .inline{
    height: 35px;
  }
  .ivu-form-item-content{
  .second{
    font-weight: 400;
    font-size: 18px;
    color: #515a6e;
  }
  .thirtd{
    display: inline-block;
    position: absolute;
    top: 5px;
    font-weight: 400;
    font-size: 18px;
    color: #515a6e;
  }
  .suffix{
    color: #cbd3e0;
  }
  i{
    display: inline-block;
  &.circle{
     width: 30px;
     height: 30px;
     background: #cccccc;
     border-radius: 50%;
  &.active{
     background: #00cc66;
   }
  }
  &.line{
     width: 145px;
     height: 2px;
     background: #cccccc;
     margin: 0 20px;
     margin-bottom:15px;
     padding:0;
  &.active{
     background: #00cc66;
   }
  &.w100{
     width: 100px;
     margin-right: 0;
   }
  }
  &.iBox{
     border-left: 2px solid  #00cc66;
     position: relative;
     height:100%;
     width:210px;
  .circle{
    width: 20px;
    height: 20px;
  }
  .top{
    position: absolute;
    top: -25px;
    left: 10px;
  }
  .bottom{
    position: absolute;
    top: 15px;
    left: 10px;
  }
  .success{
    font-size: 14px;
    line-height: 20px;
  p{
    font-size: 12px;
    color: #cbd3e0;

  }
  }
  }
  }

  }
      label{
        font-size: 18px;
        color: #8390a4;
      }
      .time{
        font-size: 14px ;
        color: #c7cfde;
      }
      .tip{
        text-decoration:line-through;
        color: #8390a4;
      }
      .content{
        padding-left: 40px;
        label{
          color: #8390a4;
          font-size: 14px !important;
          text-align: right;
          margin-right: 8px;
        }
        .ivu-form-item-content{
          font-size: 14px;
          color: #636e80;
          display: inline-block;
          margin-left: 0 !important;
        }
      }
        .ivu-form-item-label{
          display: inline-block;
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
        font-size: 14px;
        background: #f2faff;
        color: #636e80;
      }
      .ivu-form-item-label{
        width: 171px !important;
        font-size: 14px;
      }
      .ivu-form-item-content{
        font-size: 14px;
      }
      .ivu-checkbox-wrapper{
        span{
          font-weight: normal;
          font-size: 14px;
          color: #636e80;
        }
      }
    }
    .ivu-collapse-content{
      padding: 0 40px;
    }
    .workInfo{
      tbody{
        display: none;
      }
    }
  }
</style>

<script>
    export default{
        data () {
            return {
              value1:'1',
              value2:'1',
              formValidate: {
                interest: [],
                connection:'',
                address:'',
                wlan:'',
                address2:'',
                wlan2:''
              },
              ruleValidate:{
                connection: [
                  { required: true, message: '', trigger: 'change' }
                ],
                address:[
                  { required: true, message: '', trigger: 'blur' }
                ],
                wlan: [
                  { required: true, message: '', trigger: 'change' }
                ],
                address2:[
                  { required: true, message: '', trigger: 'blur' }
                ],
                wlan2: [
                  { required: true, message: '', trigger: 'change' }
                ],
              },
              columns1:[
                {
                  title: 'Product Name',
                  key: 'productName',
                  align:'center',
                },
                {
                  title: 'Fee Name',
                  key: 'feeName',
                  width:200,
                  align:'center'
                },
                {
                  title: 'Price with Tax',
                  key: 'price',
                  align:'center'
                },
                {
                  title: 'Subscription Cycle (Month)',
                  key: 'cycle',
                  width: 200,
                  align:'center'
                },
                {
                  title: 'Quantity',
                  key: 'quantity',
                  align:'center'
                },
                {
                  title: 'Tax(HKD)',
                  key: 'tax',
                  align:'center'
                },
                {
                  title: 'Subtotal (HKD)',
                  key: 'subtotal',
                  align:'center'
                },
              ],
              data1:[
                {
                  productName: 'Cloud Connect SE',
                  feeName: '10Mbps Monthly Rental Fee',
                  price: '1000HKD/Month',
                  cycle:5,
                  quantity:1,
                  tax:500,
                  subtotal:5000
                },
                {
                  productName: 'Cloud Connect SE',
                  feeName: '100Mbps Monthly Rental Fee',
                  price: '5000HKD/Month',
                  cycle:5,
                  quantity:1,
                  tax:2500,
                  subtotal:25000
                },
                {
                  productName: 'SD-WAN SE',
                  feeName: '10Mbps Monthly Rental Fee',
                  price: '500HKD/Month',
                  cycle:5,
                  quantity:2,
                  tax:250,
                  subtotal:2500
                },
                {
                  productName: 'SD-WAN SE',
                  feeName: 'CPE-M Device Fee',
                  price: '200HKD/Month',
                  cycle:5,
                  quantity:2,
                  tax:200,
                  subtotal:2000
                },
                {
                  productName: 'SD-WAN SE',
                  feeName: 'License Fee',
                  price: '100HKD/Month',
                  cycle:5,
                  quantity:2,
                  tax:100,
                  subtotal:1000
                }
              ],
              columns2:[
                {
                  title: 'Config No.',
                  key: 'productName',
                  align:'center',
                },
                {
                  title: 'Service',
                  key: 'feeName',
                  width:200,
                  align:'center'
                },
                {
                  title: 'Operation',
                  key: 'price',
                  align:'center'
                },
                {
                  title: 'Update Time',
                  key: 'cycle',
                  width: 200,
                  align:'center'
                },
                {
                  title: 'Status',
                  key: 'quantity',
                  align:'center'
                }
              ],
              wlan: {
                items: [
                  {
                    value: '',
                    index: 1,
                    status: 1
                  }
                ]
              },
              lan: {
                items: [
                  {
                    value: '',
                    index: 1,
                    status: 1
                  }
                ]
              },
              net: {
                items: [
                  {
                    value: '',
                    index: 1,
                    status: 1
                  }
                ]
              },
              configNo: "1120181114143248188",
              createBy: "cmiuser",
              createTime: "2018/11/14 14:32:48",
              operation: "open",
              productName: "SD-WAN",
              service: "SD-WAN Sevice",
              status: 2,
              subscriptionNo: "20181114143248188",
              type: 1,
              updateBy: "cmiuser",
              updateTime: "2018/11/14 14:32:48",
              siteList:[],

            }
        },
        mounted(){
          this.getData(this.$route.query.title);
        },
        methods:{
          submit(){
            let that = this;
            let use = sessionStorage.getItem('use');
            that.loading = true;
            setTimeout(function(){
              that.$http.post('/productOrder/configEdit?configNo='+that.workNo+'&userName='+use).then((res)=>{
                that.success = true;
              })},2000)
            setTimeout(function(){
              that.$router.push('/page/sdnSet/configuration')
            },4000)
          },
          getData(url){
            let that = this;
            this.$http.post('/workOrder/workDetail?workNo='+url+'&type=2').then(function(res){
              that.configNo=res.data.configNo;
              that.createBy=res.data.createBy;
              that.createTime=res.data.createTime;
              that.operation=res.data.operation;
              that.productName=res.data.productName;
              that.service=res.data.service;
              that.status=res.data.status;
              that.subscriptionNo=res.data.subscriptionNo;
              that.type=res.data.type;
              that.updateBy=res.data.updateBy;
              that.updateTime=res.data.updateTime;
              that.siteList=res.data.siteList;
            })
          },
          addWlan(i){
            this.siteList[i].wlans.push({
              ip:'',
              port:'',
              vlanId:''
            })
          },
          addLan(i){
            this.siteList[i].lans.push({
              ip:'',
              port:'',
              vlanId:''
            })
          },
          addNet(i){
            if(this.siteList[i].subNet.length==0){
              this.siteList[i].subNet.push('   ','   ');
            }else{
              this.siteList[i].subNet.push('   ');
            }
          },
          delWlan(item,index){
            this.siteList[item].wlans.splice(index,1);
          },
          delLan(item,index){
            this.siteList[item].lans.splice(index,1);
          },
          delNet(item,index){
            this.siteList[item].subNet.splice(index,1);
          },
        }
    }
</script>
