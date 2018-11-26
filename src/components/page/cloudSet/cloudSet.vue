<template>
  <div class="page">
    <div id="cloudSet">
      <h5>Configure Info</h5>
      <div class="content">
        <div class="contactUS">
          <span class="first">Status</span>
          <ul>
            <li style="padding-bottom: 20px" v-if="status != -1">
              <div class="inline">
                <i class="circle active"></i>
                <i class="line" :class="status==3?'active':''"></i>
                <i class="circle" :class="status==3?'active':''"></i>
                <i v-if="status==3" class="half-line"></i>
                <i v-if="status==3" class="vertical-line"></i>
                <ul v-if="status==3" class="circle-ul">
                  <li class="text-top">
                    <i class="small-circle"></i>
                    <div class="small-circle-des">
                      <span class="second" v-if="ifClient==1">AWS Side Successful </span>
                      <span class="second" v-if="ifClient==2">Equinix ECX Side Successful </span>
                      <br>
                      <span class="suffix">{{updateTime}}</span>
                    </div>
                  </li>
                  <li class="text-top">
                    <i class="small-circle"></i>
                    <div class="small-circle-des">
                      <span class="second">CMI Side Successful </span>
                      <br>
                      <span class="suffix">{{updateTime}}</span>
                    </div>
                  </li>
                </ul>
                <!--<i class="line w100" :class="status==3?'active':''"></i>
                <i class="iBox">
                  <i class="circle active"></i>
                  <i class="circle active"></i>
                </i>-->
              </div>
            </li>
            <li>
              <div class="statusInfo inline">
                <i>
                  <span v-if="status==2 || status==3" class="second">Pending Config</span>
                  <span v-if="status==1" class="second">　Delivered</span>
                  <span v-if="status==-1" class="thirtd" style="position: absolute; left: 60px;top: -26px;font-size: 18px">　Canceled</span>
                  <br>
                  <span class="suffix">{{createTime}}</span>
                </i>
                <i>
                  <span v-if="status==3" class="second" style="margin-left: 75px">Config Successful </span>
                  <br>
                  <span v-if="status==3" class="suffix" style="margin-left: 90px">{{updateTime}}</span>
                </i>
              </div>
            </li>
          </ul>
        </div>
        <h4>Basic Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first mb-30">Config NO.</span>
              <span class="second">{{workNo}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Create Time</span>
              <span class="second">{{createTime}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Service</span>
              <span class="second">{{service}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Action</span>
              <span class="second">{{operation}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Bandwidth</span>
              <span class="second">10Mbps</span>
            </li>
            <li class="mb-30">
              <span class="first">Availability</span>
              <span class="second">99.99%</span>
            </li>
          </ul>
        </div>
        <h4>Subscription Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first mb-30">Subscription NO.</span>
              <span class="second">{{subscriptionNo}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Customer Name</span>
              <span class="second">cmiuser</span>
            </li>
            <li class="mb-30">
              <span class="first">Contacts</span>
              <span class="second">Kevin/13800001234</span>
            </li>
            <li class="mb-30">
              <span class="first">Subscription Status</span>
              <span class="second">{{status==3?'Config Successful':'Pending Config'}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Subscription Cycle</span>
              <span class="second">7 Months</span>
            </li>
          </ul>
        </div>
        <h4>Net configuration
          <Select value="Cloud Connect Cloud to Cloud" style="width:200px" disabled v-if="ifClient==1">
            <Option value="Cloud Connect Cloud to Cloud" >Cloud Connect Cloud to Cloud</Option>
          </Select>
          <Select value="Cloud Connect On-Premise to Cloud" style="width:200px" disabled v-if="ifClient==2">
            <Option value="Cloud Connect On-Premise to Cloud" >Cloud Connect On-Premise to Cloud</Option>
          </Select>
          <Button type="warning" class="pull-right" style="height:40px;" @click="addPort" :disabled="disabled || status==3 || status == -1 || operation=='Close'">Automatically Config</Button></h4>
        <h5 class="f16">A-End </h5>
        <h6 class="f14"  v-if="ifClient==1">CSP Account ID：
          <span>CSP-kjfoe13k1</span>
        </h6>
        <h6 v-if="ifClient==2" class="f14">CSP Account ID：
          <span>CSP-ccbod6k1</span>
        </h6>
        <Table :columns="FeeInfo" ref="myTable" :data="FeeInfoData" v-if="ifClient==1" style="margin-bottom: 50px"></Table>
        <Table :columns="FeeIn" ref="myTable" :data="FeeInfo2" v-if="ifClient==2" style="margin-bottom: 50px"></Table>
        <h5 class="f16">Z-End</h5>
        <h6 v-if="ifClient==1" class="f14">CSP Account ID：
          <span>CSP-aabod6k1</span>
        </h6>
        <h6 class="f14" v-if="ifClient==2">Address:
          <span>Dacheng Building,Beijing</span>
        </h6>
        <Table :columns="OrderInfo" :data="OrderInfoData" v-if="ifClient==1" class="mb-30"></Table>
        <Table :columns="OrderInfo" ref="myTable" :data="OrderInfoData3" v-if="ifClient==2" style="margin-bottom: 50px"></Table>
        <Button v-if="status!==3" type="primary" style="display: block;margin: 0 auto;" @click="submit" :disabled="disabled || SubmitDisable">Submit</Button>
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
  #cloudSet{
    width: 1200px;
    margin: 0px auto;
  h5{
    font-size: 14px;
    color: #919daf;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 56px;
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
  .first{
    font-size: 18px;
    width: 90px;
    color: #8390a4;
    font-weight: 400;
    text-align: right;
  }
  li{
    position: relative;
    // width: 600px;
  span{
    display: inline-block;
  }
  .inline{
    margin-left: 50px;
  }
  .half-line{
    width: 70px;
    height: 2px;
    background: #00cc66;
    margin: 0 0 0 20px;
    vertical-align: middle;
  }
  .vertical-line{
    width: 2px;
    height: 70px;
    background: #00cc66;
    vertical-align: middle;
  }
  .circle-ul{
    height: 70px;
    display: inline-block;
    vertical-align: top;
    li{
      height: 100%;
      position: relative;
      top: -15%;
    }
  }
  .small-circle{
      width: 15px;
      height: 15px;
      background: #00cc66;
      border-radius: 50%;
      vertical-align: middle;
  }
  .small-circle-des{
    display: inline-block;
    vertical-align: top;
    margin-left: 15px;
    .second{
      margin-left: 0;
      font-size: 14px;
      font-weight: 400;
    }

    .suffix{
      font-size: 12px;
      color: #cbd3e0;
      display: inline-block;
      margin-left: 5px;
    }
  }
  .statusInfo{
    margin-left: 0;
  span{
    margin-left: 0;
  }
  .suffix{
    font-size: 14px;
  }
  }
  i{
    display: inline-block;
  &.circle{
    width: 30px;
    height: 30px;
    background: #cccccc;
    border-radius: 50%;
    vertical-align: middle;
  &.active{
      background: #00cc66;
    }
  }
  &.line{
      width: 145px;
      height: 2px;
      background: #cccccc;
      margin: 0 20px;
      vertical-align: middle;
     i{
      vertical-align: text-top;
     }
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
  .circle{
    width: 30px;
    height: 30px;
  }
  }
  }
  .second{
    margin-left: 30px;
    font-size: 18px;
    font-weight: 400;
  }

  .suffix{
    font-size: 16px;
    color: #cbd3e0;
    display: inline-block;
    margin-left: 5px;
  }
  }
  }
  .info{
  li{
    position: relative;
    // width: 600px;
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
        FeeInfo: [
          {
            title: ' ',
            key: 'FeeName',
            align:'center',
          },
          {
            title: 'Device Name/ID',
            key: 'Price',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                console.log(params)
                return h('Select',{
                    props:{
                      value: params.row.Price[0],
                      placeholder:params.row.Price[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.Price.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )
              } else  {

                return h('div', params.row.Price);
              }
            }
          },
          {
            title: 'PORT',
            key: 'port',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h('Select',{
                    props:{
                      value: params.row.port[0],
                      placeholder:params.row.port[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.port.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )

              } else  {

                return h('div', params.row.port);
              }
            }
          },
          {
            title: 'AS#',
            key: 'SubscriptionCycle',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h('Select',{
                    props:{
                      value: params.row.SubscriptionCycle[0],
                      placeholder:params.row.SubscriptionCycle[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.SubscriptionCycle.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )


              } else  {

                return h('div', params.row.SubscriptionCycle);
              }
            }
          },
          {
            title: 'VLAN ID',
            key: 'Quantity',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.Quantity
                  },
                  on: {
                    input: function (event) {
                      params.row.Quantity = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.Quantity);
              }
            }
          },
          {
            title: 'IP Addr',
            key: 'Subtotal',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.Subtotal
                  },
                  on: {
                    input: function (event) {
                      params.row.Subtotal = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.Subtotal);
              }
            }
          },
          {
            title: 'BGP password',
            key: 'password',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.password
                  },
                  on: {
                    input: function (event) {
                      params.row.password = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.password);
              }
            }

          }
        ],
        FeeIn: [
          {
            title: ' ',
            key: 'FeeName',
            align:'center',
          },
          {
            title: 'Device Name/ID',
            key: 'Price',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                console.log(params)
                return h('Select',{
                    props:{
                      value: params.row.Price[0],
                      placeholder:params.row.Price[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.Price.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )
              } else  {

                return h('div', params.row.Price);
              }
            }
          },
          {
            title: 'PORT',
            key: 'port',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h('Select',{
                    props:{
                      value: params.row.port[0],
                      placeholder:params.row.port[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.port.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )

              } else  {

                return h('div', params.row.port);
              }
            }
          },
          {
            title: 'AS#',
            key: 'SubscriptionCycle',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h('Select',{
                    props:{
                      value: params.row.SubscriptionCycle[0],
                      placeholder:params.row.SubscriptionCycle[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.SubscriptionCycle.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )


              } else  {

                return h('div', params.row.SubscriptionCycle);
              }
            }
          },
          {
            title: 'VLAN ID',
            key: 'Quantity',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.Quantity
                  },
                  on: {
                    input: function (event) {
                      params.row.Quantity = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.Quantity);
              }
            }
          },
          {
            title: 'IP Addr',
            key: 'Subtotal',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.Subtotal
                  },
                  on: {
                    input: function (event) {
                      params.row.Subtotal = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.Subtotal);
              }
            }
          },
          {
            title: 'BGP password',
            key: 'password',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.password
                  },
                  on: {
                    input: function (event) {
                      params.row.password = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.password);
              }
            }

          }
        ],
        FeeInfoData: [
          {
            FeeName: 'CSP Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },{
            FeeName: 'CSP Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },

        ],
        FeeInfo2:[
          {
            FeeName: 'CE Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },{
            FeeName: 'CE Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },

        ],
        FeeInfoData1: [
          {
            FeeName: 'CSP Primary',
            Price: ['csp-HK-de3/77777',],
            port:['GE/2/2/8'],
            SubscriptionCycle: ['64540'],
            Quantity: '314',
            Subtotal: '192.168.253.93/30',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-HK-w2c/88888'],
            port:['GE/1/2/6'],
            SubscriptionCycle: ['65181'],
            Quantity: '314',
            Subtotal: '192.168.253.94/30',
            password:'******',
            $isEdit: true
          },{
            FeeName: 'CSP Secondary',
            Price: ['csp-HK-o91/77777'],
            port:['GE/2/2/9'],
            SubscriptionCycle:['64540'],
            Quantity: '314',
            Subtotal: '192.168.254.93/30',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['edge-HK-921/88888'],
            port:['GE/1/2/7'],
            SubscriptionCycle: ['65181'],
            Quantity: '314',
            Subtotal: '192.168.254.94/30',
            password:'******',
            $isEdit: true
          },

        ],
        FeeInfoData2: [
          {
            FeeName: 'CE Primary',
            Price: ['N/A',],
            port:['N/A'],
            SubscriptionCycle: ['63340'],
            Quantity: '314',
            Subtotal: '192.168.253.77/30',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-HK-w2c/88888'],
            port:['GE/1/2/6'],
            SubscriptionCycle: ['65181'],
            Quantity: '314',
            Subtotal: '192.168.253.78/30',
            password:'******',
            $isEdit: true
          },{
            FeeName: 'CE Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle:['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle: ['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
            $isEdit: true
          },

        ],
        OrderInfo: [
          {
            title: ' ',
            key: 'FeeName',
            align:'center',
          },
          {
            title: 'Device Name/ID',
            key: 'Price',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('Select',{
                    props:{
                      value: params.row.Price[0],
                      placeholder:params.row.Price[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.Price.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )

              } else  {

                return h('div', params.row.Price);
              }
            }
          },
          {
            title: 'PORT',
            key: 'port',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h('Select',{
                    props:{
                      value: params.row.port[0],
                      placeholder:params.row.port[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.port.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )


              } else  {

                return h('div', params.row.port);
              }
            }
          },
          {
            title: 'AS#',
            key: 'SubscriptionCycle',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h('Select',{
                    props:{
                      value: params.row.SubscriptionCycle[0],
                      placeholder:params.row.SubscriptionCycle[0]
                    },
                    on: {
                      'on-change':(event) => {
                        this.data[params];
                      }
                    },
                  },
                  params.row.SubscriptionCycle.map((item) =>{
                    return h('Option', {
                      props: {
                        value: item
                      }
                    })
                  })
                )
              } else  {

                return h('div', params.row.SubscriptionCycle);
              }
            }
          },
          {
            title: 'VLAN ID',
            key: 'Quantity',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.Quantity
                  },
                  on: {
                    input: function (event) {
                      params.row.Quantity = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.Quantity);
              }
            }
          },
          {
            title: 'IP Addr',
            key: 'Subtotal',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.Subtotal
                  },
                  on: {
                    input: function (event) {
                      params.row.Subtotal = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.Subtotal);
              }
            }
          },
          {
            title: 'BGP password',
            key: 'password',
            align:'center',
            render: (h, params) => {
              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.password
                  },
                  on: {
                    input: function (event) {
                      params.row.password = event.target.value
                    }
                  }
                });
              } else  {

                return h('div', params.row.password);
              }
            }
          }
        ],
        OrderInfoData: [
          {
            FeeName: 'CSP Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },{
            FeeName: 'CSP Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
        ],
        OrderInfoData3: [
          {
            FeeName: 'CSP Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Primary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },{
            FeeName: 'CSP Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
          {
            FeeName: 'CMI Secondary',
            Price: '',
            port:'',
            SubscriptionCycle: '',
            Quantity: '',
            Subtotal: '',
            password:''
          },
        ],
        OrderInfoData1: [
          {
            FeeName: 'CSP Primary',
            Price: ['csp-BJ-19e/77779'],
            port:['GE/2/3/1'],
            SubscriptionCycle: ['64542'],
            Quantity: '314',
            Subtotal: '192.168.253.101/30',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-BJ-13c/88889'],
            port:['GE/1/2/5'],
            SubscriptionCycle: ['65502'],
            Quantity: '314',
            Subtotal: '192.168.253.102/30',
            password:'******',
            $isEdit: true
          },{
            FeeName: 'CSP Secondary',
            Price: ['csp-BJ-31p/77779'],
            port:['GE/1/1/9'],
            SubscriptionCycle: ['64542'],
            Quantity: '314',
            Subtotal: '192.168.254.101/30',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['edge-BJ-301/88889'],
            port:['GE/2/2/5'],
            SubscriptionCycle: ['65502'],
            Quantity: '314',
            Subtotal: '192.168.254.102/30',
            password:'******',
            $isEdit: true
          },
        ],
        OrderInfoData2: [
          {
            FeeName: 'CSP Primary',
            Price: ['csp-BJ-19e/77779'],
            port:['GE/1/3/1'],
            SubscriptionCycle: ['64540'],
            Quantity: '314',
            Subtotal: '192.168.253.73/30',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-BJ-13c/88889'],
            port:['GE/1/2/5'],
            SubscriptionCycle: ['65181'],
            Quantity: '314',
            Subtotal: '192.168.253.74/30',
            password:'******',
            $isEdit: true
          },{
            FeeName: 'CSP Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle: ['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
            $isEdit: true
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle: ['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
            $isEdit: true
          },
        ],
        createTime: "2018-11-08 14:11",
        operation: "open",
        productName: "Cloud Connect SE",
        service: "Cloud Connect Sevice",
        status: 1,
        subscriptionNo: 20181108141108150,
        type: 2,
        updateTime: "2018-11-08 14:57",
        workNo: "wono20181108141108151",
        subimt:false,
        disabled:false,
        SubmitDisable:true,
        ifClient:0,
        updateBy:''
      }
    },
    mounted(){
      var type=this.$route.query.type;
      if(type){
        this.type=type;
      }
      this.getData(this.$route.query.title);
    },
    methods:{
      getData(url){
        let that=this;
        this.$http.post('/workOrder/workDetail?workNo='+url+'&type='+this.type).then(function(res){
          console.log(res.data)
          that.createTime = res.data.createTime;
          that.operation = res.data.operation;
          that.productName = res.data.productName;
          that.service = res.data.service;
          that.status = res.data.status;
          that.subscriptionNo = res.data.subscriptionNo;
          that.type = res.data.type;
          that.updateTime = res.data.updateTime;
          that.workNo = res.data.configNo;
          that.ifClient=res.data.ifClient;
          that.updateBy=res.data.updateBy;
          if(that.status == 3){
            that.addPort();
            that.setIsEdit(false);
          }
        })
      },
      addPort(){
        this.FeeInfoData=this.FeeInfoData1;
        this.OrderInfoData=this.OrderInfoData1;
        this.OrderInfoData3=this.OrderInfoData2;
        this.FeeInfo2=this.FeeInfoData2;
        this.SubmitDisable=false;
      },
      submit(){
        var that=this;
        var use=sessionStorage.getItem('use');
        that.loading=true;
        setTimeout(function(){
          that.$http.post('/productOrder/configEdit?configNo='+that.workNo+'&userName='+use).then((res)=>{
            that.success=true;
          })},2000)
        setTimeout(function(){
          that.setIsEdit(false);
          that.loading=false;
          that.subimt=true;
          that.disabled=true;
          that.status=3;

          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth() +1;
          let day = date.getDate();
          let h = date.getHours();
          let m = date.getMinutes();
          let s = date.getSeconds();
          that.updateTime = year+'/'+month+'/'+day+' '+h+':'+m+':'+s;
        },4000)

      },
      setIsEdit(bool){
        this.FeeInfoData.map(function(item){
              item.$isEdit=bool;
          })
        this.OrderInfoData.map(function(item){
          item.$isEdit=bool;
        })
        this.OrderInfoData3.map(function(item){
          item.$isEdit=bool;
        })
        this.FeeInfo2.map(function(item){
          item.$isEdit=bool;
        })
      }
    }
  }
</script>

