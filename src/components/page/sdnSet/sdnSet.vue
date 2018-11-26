<template>
  <div class="main">
    <div id="orderDetails">
      <h5>Create New Configure</h5>
      <div class="content">
        <div class="contactUS" v-if="status==3">
          <ul>
            <li style="padding-bottom: 20px">
              <span class="first">Status</span>
              <!--<span style="margin-left: 90px">-->
                <!--<i class="circle active"></i>-->
                <!--<i class="line"></i>-->
                <!--<i class="circle"></i>-->
              <!--</span>-->
              <!--<p style="margin-left: 110px">-->
                <!--<span v-if="status==2 || status==3" class="second">Pending Config</span>-->
                <!--<span v-if="status==1" class="second">　Delivered</span>-->
                <!--<span v-if="status==3" class="second" style="margin-left: 85px">Config Successful </span>-->
              <!--</p>-->
              <!--<p style="margin-left: 110px">-->
                <!--<span class="suffix ml-30">{{createTime}}</span>-->
                <!--<span v-if="status==3" class="suffix ml-40">{{updateTime}}</span>-->
              <!--</p>-->
            </li>
          </ul>
        </div>
        <h4>Basic Info</h4>
        <div class="info">
          <ul>
            <li v-if="status===3">
              <span class="first mb-30">Config NO.</span>
              <span class="second">{{workNo}}</span>
            </li>
            <li class="mb-30" v-if="status===3">
              <span class="first">Create Time</span>
              <span class="second">{{createTime}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Service</span>
              <span class="second">
                <Select value="SDN">
                  <Option value="SDN">SDN</Option>
                  <Option value="Cloud Connect">Cloud Connect</Option>
                  <Option value="SD-WAN">SD-WAN</Option>
                </Select>
              </span>
            </li>
            <li class="mb-30">
              <span class="first">Action</span>
              <span class="second">
                <Select value="OPEN">
                  <Option value="OPEN">OPEN</Option>
                  <Option value="CLOSE">CLOSE</Option>
                </Select>
              </span>
            </li>
            <li class="mb-30">
              <span class="first">Bandwidth</span>
              <span class="second">
                <Select value="10 MB">
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
              <!--<span class="first mb-30 gray">Subscription NO.</span>-->
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
          <Select value="SDN-L3 DCI" style="width:200px">
            <Option value="Cloud Connect Cloud to Cloud" >Cloud Connect Cloud to Cloud</Option>
            <Option value="Cloud Connect On-Premise to Cloud" >Cloud Connect On-Premise to Cloud</Option>
            <Option value="SD-WAN" >SD-WAN</Option>
            <Option value="SDN-L3 DCI" >SDN-L3 DCI</Option>
            <Option value="SDN-L3VPN" >SDN-L3VPN</Option>
          </Select>
          <Button type="warning" class="pull-right" style="height:40px;" disabled="disabled">Automatically Config</Button></h4>
          <div class="con mb-20">
            <h5>Global Setting</h5>
            <div class="info">
              <ul>
                <li class="mb-20">
                  <span class="first">Topology</span>
                  <span class="second">
                     <Select value="Any to Any">
                        <Option value="Any to Any">Any to Any</Option>
                        <Option value="Hub -Spoke">Hub -Spoke</Option>
                      </Select>
                  </span>
                </li>
                <li class="mb-50">
                  <span class="first">Tunnel Type</span>
                  <span class="second">
                     <Select value="SR-TE">
                        <Option value="SR-TE">SR-TE</Option>
                        <Option value="RSVP-TE">RSVP-TE</Option>
                      </Select>
                  </span>
                </li>
                <div v-if="site1">
                  <h5>Site 1 <span class="pull-right del" @click="delSite1">Delete Site</span></h5>
                  <div class="group">
                    <label>PE|Port</label>
                    <Select value="BEIJING">
                      <Option value="BEIJING">BEIJING</Option>
                    </Select>
                    <Select value="BJYZ-PB_CMNET-HiSR1">
                      <Option value="BJYZ-PB_CMNET-HiSR1">BJXXG-PB_CMNET-HiSR1</Option>
                    </Select>
                    <Select value="Port2/2/8">
                      <Option value="Port2/2/8">Port2/2/8</Option>
                    </Select>
                  </div>
                  <div class="group">
                    <label>Topo</label>
                    <Select value="Any to Any" disabled>
                      <Option value="Any to Any">Any to Any</Option>
                      <Option value="Hub -Spoke"></Option>
                    </Select>
                  </div>
                  <div class="group">
                    <label>VRF</label>
                    <Input v-model="vrf1"></Input>
                    <label>RD</label>
                    <Input placeholder=""></Input>
                  </div>
                  <div class="group">
                    <div v-for="(item,index) in form1.rt" class="mb-20" :key="item.index">
                      <label>RT</label>
                      <Input :placeholder="item.name"></Input>
                      <Select :value="item.key">
                        <Option value="BOTH">BOTH</Option>
                      </Select>
                      <img @click="addRt" src="../.././../assets/img/icon-add.png" alt="" v-if="index==0">
                      <img @click="delRt(index)" src="../.././../assets/img/icon-del.png" alt="" v-if="index>0">
                    </div>
                  </div>
                  <div class="group">
                    <label>VLAN ID </label>
                    <Input placeholder=""></Input>
                  </div>
                  <div class="group">
                    <label>LABEL</label>
                    <Select value="PER INSTANCE">
                      <Option value="PER INSTANCE">PER INSTANCE</Option>
                      <Option value="PER ROUTER">PER ROUTER</Option>
                    </Select>
                  </div>
                  <div class="group">
                    <label>PE IP</label>
                    <Select value="IPV4">
                      <Option value="IPV4">IPV4</Option>
                      <Option value="IPV6">IPV6</Option>
                    </Select>
                    <Input placeholder=""></Input>
                    <Input placeholder=""></Input>
                  </div>
                  <div class="group">
                    <label>DC GW</label>
                    <Select value="Xinxigang DC">
                      <Option value="Yizhuang DC">Yizhuang DC</Option>
                      <Option value="Xinxigang DC">Xinxigang DC</Option>
                    </Select>
                    <Select value="dc-test-domain">
                      <Option value="dc-test-domain">dc-test-domain</Option>
                      <Option value="dc2-test-domain">dc2-test-domain</Option>
                    </Select>
                  </div>
                  <div class="group">
                    <label>DC GW IP</label>
                    <Select value="IPV4">
                      <Option value="IPV4">IPV4</Option>
                      <Option value="IPV6">IPV6</Option>
                    </Select>
                    <Input placeholder=""></Input>
                    <Input placeholder=""></Input>
                  </div>
                  <div class="group">
                    <label>Protocol</label>
                    <Select value="Static">
                      <Option value="Static">Static</Option>
                      <Option value="BGP">BGP</Option>
                    </Select>
                  </div>
                  <div class="group">
                    <div class="mb-20" v-for="(item,index) in form1.destination" :key="index">
                      <label>Destination</label>
                      <Input :placeholder="item.name"></Input>
                      <Input :placeholder="item.key"></Input>
                      <label>Next hop</label>
                      <Input :placeholder="item.hop"></Input>
                      <img src="../.././../assets/img/icon-add.png" @click="adddestination" v-if="index==0" alt="">
                      <img src="../.././../assets/img/icon-del.png" @click="deldestination(index)" v-if="index>0" alt="">
                    </div>
                  </div>
                </div>

                <div class="sitBox" v-for="(item,index) in form2" :key="index">
                  <h5>Site 2 <span class="pull-right del" @click="delSite2(index)">Delete Site</span></h5>
                  <div class="text">
                    <div class="group">
                      <label>PE|Port</label>
                      <Select :value="item.port[0]">
                        <Option value="BEIJING">BEIJING</Option>
                      </Select>
                      <Select :value="item.port[1]">
                        <Option value="BJYZ-PB_CMNET-HiSR1">BJYZ-PB_CMNET-HiSR1</Option>
                      </Select>
                      <Select :value="item.port[2]">
                        <Option value="Port2/2/10">Port2/2/10</Option>
                      </Select>
                    </div>
                    <div class="group">
                      <label>Topo</label>
                      <Select :value="item.topo" disabled>
                        <Option value="Any to Any">Any to Any</Option>
                        <Option value="Hub -Spoke"></Option>
                      </Select>
                    </div>
                    <div class="group">
                      <label>VRF</label>
                      <Input v-model="vrf2"></Input>
                      <label>RD</label>
                      <Input :placeholder="item.rd"></Input>
                    </div>
                    <div class="group">
                      <div class="mb-20" v-for="(j,index) in item.rt">
                        <label>RT</label>
                        <Input :placeholder="j.name"></Input>
                        <Select :value="j.key">
                          <Option value="BOTH">BOTH</Option>
                        </Select>
                        <img src="../.././../assets/img/icon-add.png" v-if="index==0" alt="">
                        <img src="../.././../assets/img/icon-del.png" v-if="index>0" alt="">
                      </div>

                    </div>
                    <div class="group">
                      <label>VLAN ID </label>
                      <Input :placeholder="item.vlanId"></Input>
                    </div>
                    <div class="group">
                      <label>LABEL</label>
                      <Select :value="item.label">
                        <Option value="PER INSTANCE">PER INSTANCE</Option>
                        <Option value="PER ROUTER">PER ROUTER</Option>
                      </Select>
                    </div>
                    <div class="group">
                      <label>PE IP</label>
                      <Select :value="item.pe[0]">
                        <Option value="IPV4">IPV4</Option>
                        <Option value="IPV6">IPV6</Option>
                      </Select>
                      <Input :placeholder="item.pe[1]"></Input>
                      <Input :placeholder="item.pe[2]"></Input>
                    </div>
                    <div class="group">
                      <label>DC GW</label>
                      <Select value="Yizhuang DC">
                        <Option value="Yizhuang DC">Yizhuang DC</Option>
                        <Option value="Xinxigang DC">Xinxigang DC</Option>
                      </Select>
                      <Select value="dc2-test-domain">
                        <Option value="dc-test-domain">dc-test-domain</Option>
                        <Option value="dc2-test-domain">dc2-test-domain</Option>
                      </Select>
                    </div>
                    <div class="group">
                      <label>DC GW IP</label>
                      <Select value="IPV4">
                        <Option value="IPV4">IPV4</Option>
                        <Option value="IPV6">IPV6</Option>
                      </Select>
                      <Input placeholder=""></Input>
                      <Input placeholder=""></Input>
                    </div>
                    <div class="group">
                      <label>Protocol</label>
                      <Select :value="item.protocol">
                        <Option value="Static">Static</Option>
                        <Option value="BGP">BGP</Option>
                      </Select>
                    </div>
                    <!--<div class="group">-->
                      <!--<label>PE AS</label>-->
                      <!--<Input :placeholder="item.ps"></Input>-->
                      <!--<label>CE AS</label>-->
                      <!--<Input :placeholder="item.as"></Input>-->
                    <!--</div>-->
                    <div class="group">
                      <div class="mb-20" v-for="(item,index) in form2[0].destination" :key="index">
                        <label>Destination</label>
                        <Input :placeholder="item.name"></Input>
                        <Input :placeholder="item.key"></Input>
                        <label>Next hop</label>
                        <Input :placeholder="item.hop"></Input>
                        <img src="../.././../assets/img/icon-add.png" @click="adddestination" v-if="index==0" alt="">
                        <img src="../.././../assets/img/icon-del.png" @click="deldestination(index)" v-if="index>0" alt="">
                      </div>
                    </div>
                  </div>
                </div>

                <RadioGroup value="large" type="button">
                  <Radio label="large" @click="addSite">+ Add Site</Radio>
                </RadioGroup>
              </ul>
            </div>
          </div>



        <Button type="primary" style="display: block;margin: 0 auto;" @click="submit">Submit</Button>
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
        cursor: pointer;
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
        data:[],
        loading:false,
        // loadTxt:'配置下发中，请稍后...',
        loadTxt:'In progress,Please wait later...',
        success:false,
        site1:true,
        site2:true,
        vrf1:'',
        vrf2:'',
        form1:{
          port:['BEIJING','BJYZ-PB_CMNET-HiSR1','Port2/2/10'],
          topo:'Any to Any',
          vrf:'',
          rd:'56048:10000',
          rt:[
              {
                name:'',
                key:'BOTH',
                index:1
              }
          ],
          vlanId:300,
          label:'PER INSTANCE',
          pe:['IPV4','10.0.1.1','24'],
          dc:['Yizhuang DC','dc-test-domain'],
          dcip:['IPV4','',''],
          protocol:'BGP',
          ps:'',
          as:'',
          destination:[
            {
                name:'',
                key:'',
                hop:''
            }
          ]

        },
        form2:[
          {
            port:['BEIJING','BJYZ-PB_CMNET-HiSR1','Port2/2/10'],
            topo:'Any to Any',
            vrf:'',
            rd:'',
            rt:[
              {
                name:'',
                key:'BOTH'
              }
            ],
            vlanId:'',
            label:'PER INSTANCE',
            pe:['IPV4','',''],
            ce:['IPV4','',''],
            protocol:'Static',
            ps:'',
            as:'',
            destination:[
              {
                name:'',
                key:'',
                hop:''
              }
            ]
          }
        ],

        // createTime: "2018-11-08 14:11",
        createTime: "",
        operation: "open",
        productName: "Cloud Connect SE",
        service: "Cloud Connect Sevice",
        status: 3,
        subscriptionNo: 20181108141108150,
        type: 2,
        // updateTime: "2018-11-08 14:57",
        updateTime: "",
        // workNo: "wono20181108141108151",
        workNo: ""
      }
    },
    mounted(){

      // this.getData(this.$route.query.workNo);
      console.log(this.form2)
    },
    methods:{
      // getData(url){
      //   var that=this;
      //   this.$http.post('/workOrder/workDetail?type=2&workNo='+url).then(function(res){
      //     that.createTime=res.data.createTime;
      //     that.operation=res.data.operation;
      //     that.productName=res.data.productName;
      //     that.service=res.data.service;
      //     that.status=res.data.status;
      //     that.subscriptionNo=res.data.subscriptionNo;
      //     that.type=res.data.type;
      //     that.updateTime=res.data.updateTime;
      //     that.workNo=res.data.workNo;
      //   })
      // },
      addRt(){
        var index=this.form1.rt.length+1;
        this.form1.rt.push({
          name:'56048:10100',
          key:'BOTH',
          index:index
        })
      },
      delRt(index){
        this.form1.rt.splice(index,1);
      },
      adddestination(){
        this.form1.destination.push({
          name:'20.20.20.0',
          key:'24',
          hop:'10.0.1.2'
        })
      },
      deldestination(index){
        this.form1.destination.splice(index,1);
      },
      submit(){
        this.loading=true;
        var that=this;
        setTimeout(()=>{
          var use=sessionStorage.getItem('use');
          this.$http.post('/productOrder/configManually?createUser='+use).then((res)=>{
            this.success=true;

            this.createTime=res.data.createTime;
            this.operation=res.data.operation;
            this.productName=res.data.productName;
            this.service=res.data.service;
            this.status=res.data.status;
            this.subscriptionNo=res.data.subscriptionNo;
            this.type=res.data.type;
            this.updateTime=res.data.updateTime;
            this.configNo=res.data.configNo;
          });
        },2000)
        setTimeout(()=>{
          this.loading=false;
          sessionStorage.setItem('vrf1',this.vrf1);
          sessionStorage.setItem('vrf2',this.vrf2);
        },3000)
        setTimeout(()=>{
          this.$router.replace('/page/order/sdnSetDetail?type=2&title='+this.configNo);
          window.scrollTo(0,0);
          // this.$router.push('/page/sdnSet/configuration');
        },3001)
      },
      delSite1(){
        this.site1=false;
      },
      delSite2(){
        this.site2=false;
      },
      addSite(){

      }
    }
  }
</script>

