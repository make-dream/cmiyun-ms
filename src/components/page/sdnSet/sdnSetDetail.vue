<template>
  <div class="main">
    <div id="orderDetails">
      <h5>Create New Configure</h5>
      <div class="content">
        <div class="contactUS">
          <ul>
            <li style="padding-bottom: 20px">
              <span class="first">Status</span>
              <span style="margin-left: 90px">
                <i class="circle active"></i>
                <!--<i class="line"></i>-->
                <!--<i class="circle"></i>-->
              </span>
              <p style="margin-left: 120px">
                <!--<span v-if="status==2 || status==3" class="second">Pending Config</span>-->
                <!--<span v-if="status==1" class="second">　Delivered</span>-->
                <span v-if="status==3" class="second" style="margin-left: 5px">Config Successful </span>
              </p>
              <p style="margin-left: 110px">
                <span class="suffix" style="margin-left: 33px;">{{createTime}}</span>
                <!--<span v-if="status==3" class="suffix ml-40">{{updateTime}}</span>-->
              </p>
            </li>
          </ul>
        </div>
        <h4>Basic Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first mb-30">Config NO.</span>
              <span class="second">{{configNo}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Create Time</span>
              <span class="second">{{createTime}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Service</span>
              <span class="second">
                <Select value="SDN" disabled="disabled">
                  <Option value="SDN">SDN</Option>
                  <Option value="Cloud Connect">Cloud Connect</Option>
                  <Option value="SD-WAN">SD-WAN</Option>
                </Select>
              </span>
            </li>
            <li class="mb-30">
              <span class="first">Action</span>
              <span class="second">
                <Select value="OPEN" disabled="disabled">
                  <Option value="OPEN">OPEN</Option>
                  <Option value="CLOSE">CLOSE</Option>
                </Select>
              </span>
            </li>
            <li class="mb-30">
              <span class="first">Bandwidth</span>
              <span class="second">
                <Select value="10 MB" disabled="disabled">
                  <Option value="10 MB">10 MB</Option>
                  <Option value="100 MB">100 MB</Option>
                </Select>
              </span>
            </li>
            <li class="mb-30">
              <span class="first">Availability</span>
              <span class="second">99.999%</span>
            </li>
          </ul>
        </div>
        <!--<h4 class="gray">Subscription Info</h4>-->
        <!--<div class="info gray">-->
          <!--<ul>-->
            <!--<li>-->
              <!--<span class="first mb-30 gray">Subscription NO</span>-->
              <!--<span class="second">NA</span>-->
            <!--</li>-->
            <!--<li class="mb-30">-->
              <!--<span class="first gray">Customer Name</span>-->
              <!--<span class="second">NA</span>-->
            <!--</li>-->
            <!--<li class="mb-30">-->
              <!--<span class="first gray">Contacts</span>-->
              <!--<span class="second">NA</span>-->
            <!--</li>-->
            <!--<li class="mb-30">-->
              <!--<span class="first gray">Subscription Status</span>-->
              <!--<span class="second">NA</span>-->
            <!--</li>-->
            <!--<li class="mb-30">-->
              <!--<span class="first gray">Subscription Cycle</span>-->
              <!--<span class="second">NA</span>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <h4>Net configuration
          <Select value="SDN-L3 DCI" style="width:200px" disabled="disabled">
            <Option value="Cloud Connect Cloud to Cloud" >Cloud Connect Cloud to Cloud</Option>
            <Option value="Cloud Connect On-Premise to Cloud" >Cloud Connect On-Premise to Cloud</Option>
            <Option value="SD-WAN" >SD-WAN</Option>
            <Option value="SDN-L3 DCI" >SDN-L3 DCI</Option>
            <Option value="SDN-L3VPN" >SDN-L3VPN</Option>
          </Select>
          <Button type="primary" class="pull-right" style="height:40px;" disabled="disabled">Automatically Config</Button></h4>
          <div class="con">
            <h5>Global Setting</h5>
            <div class="info">
              <ul>
                <li class="mb-20">
                  <span class="first">Topology</span>
                  <span class="second">Any to Any
                     <!-- <Select value="Any to Any">
                        <Option value="Any to Any">Any to Any</Option>
                        <Option value="Hub -Spoke">Hub -Spoke</Option>
                      </Select> -->
                  </span>
                </li>
                <li class="mb-50">
                  <span class="first">Tunnel Type</span>
                  <span class="second">SR-TE
                     <!-- <Select value="SR-TE">
                        <Option value="SR-TE">SR-TE</Option>
                        <Option value="RSVP-TE">RSVP-TE</Option>
                      </Select> -->
                  </span>
                </li>
                <h5>Site 1</h5>
                <div class="group">
                  <label>PE|Port</label>
                  <!-- <Select value="BEIJING">
                    <Option value="BEIJING">BEIJING</Option>
                  </Select> -->
                  <!-- <Select value="BJYZ-PB_CMNET-HiSR1">
                    <Option value="BJYZ-PB_CMNET-HiSR1">BJYZ-PB_CMNET-HiSR1</Option>
                  </Select> -->
                  <span>BEIJING</span>
                  <span style="margin-left:90px">BJXXG-PB_CMNET-HiSR1</span>
                  <span style="margin-left:90px">Port2/2/8</span>
                  <!-- <Select value="Port2/2/10">
                    <Option value="Port2/2/10">Port2/2/10</Option>
                  </Select> -->
                </div>
                <div class="group">
                  <label>Topo</label>
                  <span>Any to Any</span>
                  <!-- <Select value="Any to Any" disabled>
                    <Option value="Any to Any">Any to Any</Option>
                    <Option value="Hub -Spoke"></Option>
                  </Select> -->
                </div>
                <div class="group">
                  <label>VRF</label>
                  <span>{{vrf1}}</span>
                  <label>RD</label>
                  <span>56048:10000</span>
                  <!-- <Input placeholder="56048:10000"></Input> -->
                </div>
                <div class="group">
                  <label>RT</label>
                  <span>56048:10100</span>
                  <!-- <Input placeholder="56048:10100"></Input> -->
                  <!-- <Select value="BOTH">
                    <Option value="BOTH">BOTH</Option>
                  </Select>
                  <img src="../.././../assets/img/icon-add.png" alt=""> -->
                </div>
                <div class="group">
                  <label>VLAN ID </label>
                  <span>400</span>
                </div>
                <div class="group">
                  <label>LABEL</label>
                  <span>PER INSTANCE</span>
                  <!-- <Select value="PER INSTANCE">
                    <Option value="PER INSTANCE">PER INSTANCE</Option>
                    <Option value="PER ROUTER">PER ROUTER</Option>
                  </Select> -->
                </div>
                <div class="group">
                  <label>PE IP</label>
                  <span>IPV4</span>
                  <span style="margin-left:115px">11.0.1.1 / 24</span>
                  <!-- <Select value="IPV4">
                    <Option value="IPV4">IPV4</Option>
                    <Option value="IPV6">IPV6</Option>
                  </Select>
                  <Input placeholder="11.0.1.1"></Input>
                  <Input placeholder="24"></Input> -->
                </div>
                <div class="group">
                  <label>DC GW</label>
                  <span>Xinxigang DC</span>
                  <span style="margin-left:115px">dc-test-domain</span>
                  <!-- <Select value="IPV4">
                    <Option value="IPV4">IPV4</Option>
                    <Option value="IPV6">IPV6</Option>
                  </Select>
                  <Input placeholder="11.0.1.1"></Input>
                  <Input placeholder="24"></Input> -->
                </div>
                <div class="group">
                  <label>DC GW IP</label>
                  <span>IPV4</span>
                  <span style="margin-left:115px">11.0.1.1 / 24</span>
                  <!-- <Select value="IPV4">
                    <Option value="IPV4">IPV4</Option>
                    <Option value="IPV6">IPV6</Option>
                  </Select>
                  <Input placeholder="11.0.1.2"></Input>
                  <Input placeholder="24"></Input> -->
                </div>
                <div class="group">
                  <label>Protocol</label>
                  <span>Static</span>
                  <!-- <Select value="Static">
                    <Option value="Static">Static</Option>
                    <Option value="BGP">BGP</Option>
                  </Select> -->
                </div>
                <div class="group">
                  <label>Destination</label>
                  <span style="margin-right:80px">20.20.20.0 / 24</span>
                  <!-- <Input placeholder="20.20.20.0"></Input>
                  <Input placeholder="24"></Input> -->
                  <label>Next hop</label>
                  <span>10.0.1.2</span>
                  <!-- <Input placeholder="10.0.1.2"></Input>
                  <img src="../.././../assets/img/icon-add.png" alt=""> -->
                </div>
                <h5>Site 2</h5>
                <div class="text">
                  <div class="group">
                    <label>PE|Port</label>
                    <span>BEIJING</span>
                    <span style="margin-left:90px">BJYZ-PB_CMNET-HiSR1</span>
                    <span style="margin-left:90px">Port2/2/10</span>
                    <!-- <Select value="BEIJING">
                      <Option value="BEIJING">BEIJING</Option>
                    </Select>
                    <Select value="BJYZ-PB_CMNET-HiSR1">
                      <Option value="BJYZ-PB_CMNET-HiSR1">BJYZ-PB_CMNET-HiSR1</Option>
                    </Select>
                    <Select value="Port2/2/8">
                      <Option value="Port2/2/8">Port2/2/8</Option>
                    </Select> -->
                  </div>
                  <div class="group">
                    <label>Topo</label>
                    <span>Any to Any</span>
                    <!-- <Select value="Any to Any" disabled>
                      <Option value="Any to Any">Any to Any</Option>
                      <Option value="Hub -Spoke"></Option>
                    </Select> -->
                  </div>
                  <div class="group">
                    <label>VRF</label>
                    <span>{{vrf2}}</span>
                    <!-- <Input></Input> -->
                    <label>RD</label>
                    <span>56048:10000</span>
                    <!-- <Input placeholder="56048:10000"></Input> -->
                  </div>
                  <div class="group">
                    <label>RT</label>
                    <span>56048:10100</span>
                    <!-- <Input placeholder="56048:10100"></Input> -->
                    <!-- <Select value="BOTH">
                      <Option value="BOTH">BOTH</Option>
                    </Select> -->
                    <!-- <img src="../.././../assets/img/icon-add.png" alt=""> -->
                  </div>
                  <div class="group">
                    <label>VLAN ID </label>
                    <span>400</span>
                    <!-- <Input placeholder="300"></Input> -->
                  </div>
                  <div class="group">
                    <label>LABEL</label>
                    <span>PER INSTANCE</span>
                    <!-- <Select value="PER INSTANCE">
                      <Option value="PER INSTANCE">PER INSTANCE</Option>
                      <Option value="PER ROUTER">PER ROUTER</Option>
                    </Select> -->
                  </div>
                  <div class="group">
                    <label>PE IP</label>
                    <span>IPV4</span>
                    <span style="margin-left:115px">11.0.1.1 / 24</span>
                    <!-- <Select value="IPV4">
                      <Option value="IPV4">IPV4</Option>
                      <Option value="IPV6">IPV6</Option>
                    </Select>
                    <Input placeholder="10.0.1.1"></Input>
                    <Input placeholder="24"></Input> -->
                  </div>
                  <div class="group">
                    <label>DC GW</label>
                    <span>Yizhuang DC</span>
                    <span style="margin-left:115px">dc2-test-domain</span>
                    <!-- <Select value="IPV4">
                      <Option value="IPV4">IPV4</Option>
                      <Option value="IPV6">IPV6</Option>
                    </Select>
                    <Input placeholder="11.0.1.1"></Input>
                    <Input placeholder="24"></Input> -->
                  </div>
                  <div class="group">
                    <label>DC GW IP</label>
                    <span>IPV4</span>
                    <span style="margin-left:115px">11.0.1.1 / 24</span>
                    <!-- <Select value="IPV4">
                      <Option value="IPV4">IPV4</Option>
                      <Option value="IPV6">IPV6</Option>
                    </Select>
                    <Input placeholder="11.0.1.2"></Input>
                    <Input placeholder="24"></Input> -->
                  </div>
                  <div class="group">
                    <label>Protocol</label>
                    <span>Static</span>
                    <!-- <Select value="Static">
                      <Option value="Static">Static</Option>
                      <Option value="BGP">BGP</Option>
                    </Select> -->
                  </div>
                  <div class="group">
                    <label>Destination</label>
                    <span style="margin-right:80px">20.20.20.0 / 24</span>
                    <!-- <Input placeholder="20.20.20.0"></Input>
                    <Input placeholder="24"></Input> -->
                    <label>Next hop</label>
                    <span>10.0.1.2</span>
                    <!-- <Input placeholder="10.0.1.2"></Input>
                    <img src="../.././../assets/img/icon-add.png" alt=""> -->
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <!--<Button type="primary" style="display: block;margin: 10px auto;" @click="submit">Submit</Button>-->
      </div>
    </div>
    <Modal
      title="Title"
      v-model="loading"
      class-name="vertical-center-modal loading-model">
      <div v-if="success==false">
        <img class="load" src="../../../assets/img/icon-load.gif" alt="">
        <p>{{loadTxt}}</p>
      </div>
      <div v-if="success==true">
        <div class="ivu-modal-confirm-head-icon ivu-modal-confirm-head-icon-success"><i class="ivu-icon ivu-icon-ios-checkmark-circle"></i></div>
        <!--<p>配置成功</p>-->
        <p>Config Successful!</p>
      </div>
    </Modal>
  </div>
</template>

<style lang="less">
.main{
    background: #f8f8f8;
    padding-bottom: 30px;
  }
  .loading-model{
    .ivu-modal{
      width: 200px !important;
      text-align: center;
    .load{
      width: 28px;
      margin-bottom: 20px;
    }
    }
    .ivu-modal-header,.ivu-modal-footer{
      display: none;
    }
  }
  .gray{
    color: #cccccc !important;
  }
  #orderDetails{
    width: 1200px;
    margin: 0px auto;
    padding-top: 20px;
  h5{
    font-size: 14px;
    color: #919daf;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h4{
    font-size: 18px;
    color: #8390a4;
    margin:40px 0 30px 0px;
    font-weight: 400;
  }
  .content{
    background: #fff;
    padding: 30px 40px;
  .contactUS{
    border-bottom: 2px solid #eceff9;
  li{
    position: relative;
    width: 600px;
  span{
    display: inline-block;
  }
  i{
    display: inline-block;
    &.circle{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #cccccc;
     }
    &.active{
        background: #00cc66;
     }
    &.line{
        width: 172px;
        background: #ccc;
        height: 2px;
        margin-bottom: 15px;
     }
  }
  .first{
    font-size: 18px;
    width: 90px;
    color: #8390a4;
    font-weight: 400;
    text-align: left;
  }
  .second{
    margin-left: 30px;
    font-size: 18px;
    font-weight: 400;
  }
  .suffix{
    font-size: 14px;
    color: #999999;
    display: inline-block;
    margin-left: 5px;
  }
  }
  }
  .con{
    background: #f9f9f9;
    padding: 30px 40px;
    h5{
      font-size: 16px;
      color: #333;
      border-bottom: 1px solid #e2e8f6;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .del{
      display: inline-block;
      width: 98px;
      height: 36px;
      border-radius: 5px;
      line-height: 36px;
      background: #ff8844;
      color: white;
      font-size: 16px;
      text-align: center;
    }
    .group{
      margin-bottom:20px;
      li{
        width: 236px;
      }
      label{
        font-size: 14px;
        color: #666666;
        width: 72px;
        display: inline-block;
        text-align: right;
        margin-right: 20px;
      }
      .ivu-select-single,.ivu-input-wrapper{
        width: 236px;
        margin-right: 20px;
        height: 36px;
        .ivu-select-selection,.ivu-input{
          height: 36px;
        }
      }
      img{
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .info{
    li{
      position: relative;
      width: 600px;
      .ivu-select-selection{
        width: 236px;
      }
      li{
        width: 100%;
      }
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
    }
  }
  th{
    background: #f6f7fb;
    color: #8390a4;
    font-weight: normal;
  }
  table{
  input{
    width: 100%;
    border: 1px solid #eceff9;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    text-align: center;
  }
  }
  tr{
  td:first-child{
    background: #fbfbfd;
  }
  }
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
  }
</style>

<script>
  export default {
    data(){
      return{
        data: [],
        loading: false,
        // loadTxt: '配置下发中，请稍后...',
        loadTxt:'In progress,Please wait later...',
        success: false,

        createTime: '2018-11-08 14:11',
        operation: 'open',
        productName: 'Cloud Connect SE',
        service: 'Cloud Connect Sevice',
        status: 3,
        subscriptionNo: 20181108141108150,
        type: 2,
        updateTime: '2018-11-08 14:57',
        configNo: 'wono20181108141108151',

        vrf1: 'test1',
        vrf2: 'test1'
      }
    },
    mounted(){
      this.getData(this.$route.query.title);
    },
    methods:{
      getData(url){
        var that=this;
        this.$http.post('/workOrder/workDetail?type=2&workNo='+url).then(function(res){
          that.createTime=res.data.createTime;
          that.operation=res.data.operation;
          that.productName=res.data.productName;
          that.service=res.data.service;
          that.status=res.data.status;
          that.subscriptionNo=res.data.subscriptionNo;
          that.type=res.data.type;
          that.updateTime=res.data.updateTime;
          that.configNo=res.data.configNo;
          that.vrf1=sessionStorage.getItem('vrf1');
          that.vrf2=sessionStorage.getItem('vrf2');
        })
      },
      addPort(){

      },
      submit(){
        this.loading=true;
        var that=this;
        setTimeout(function(){
          that.success=true;
        },2000)
        setTimeout(function(){
          that.loading=false;
        },3000)
      }
    }
  }
</script>
