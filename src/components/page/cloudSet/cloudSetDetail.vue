<template>
  <div class="main">
    <div id="orderDetails">
      <h5>Configure Info</h5>
      <div class="content">
        <div class="contactUS">
          <ul style="padding-top: 20px;">
            <li style="padding-bottom: 20px;width: 100%">
              <span class="first">Status</span>
              <div class="inline">
                <i class="pull-left">
                  <i class="circle active"></i>
                  <i class="line active"></i>
                  <i class="circle active"></i>
                  <i class="line w100" :class="status==3?'active':''"></i>
                </i>

                <i class="iBox pull-left">
                  <i class="top">
                    <i class="circle active circle1"></i>
                    <i class="success">
                      <span v-if="ifClient==1">AWS Side Successful </span>
                      <span v-if="ifClient==2">Equinix ECX Side Successful </span>
                      <p>{{updateTime}}</p>
                    </i>
                  </i>
                  <i class="bottom">
                    <i class="circle active circle2"></i>
                    <i class="success">
                      CMI Side Successful
                      <p>{{updateTime}}</p>
                    </i>
                  </i>

                </i>
              </div>
              <div class="statusInfo inline">
                <i>
                  <span v-if="status==2 || status==3" class="second">Pending Config</span>
                  <span v-if="status==1" class="second">　　Delivered</span>
                  <br>
                  <span class="suffix">{{createTime}}</span>
                </i>
                <i>
                  <span v-if="status==3" class="second" style="margin-left: 75px">Config Successful </span>
                  <br>
                  <span v-if="status==3" class="suffix" style="margin-left: 110px">{{updateTime}}</span>
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
        <h4>Configuration Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first mb-30">Subscription NO.</span>
              <span class="second">{{subscriptionNo}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Customer Name</span>
              <span class="second">{{updateBy}}</span>
            </li>
            <li class="mb-30">
              <span class="first">Contacts</span>
              <span class="second">Kevin/13800001234</span>
            </li>
            <li class="mb-30">
              <span class="first">Subscription Status</span>
              <span class="second">Pending Config</span>
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
          <Button type="warning" class="pull-right" disabled style="height:40px;">Automatically Config</Button></h4>
        <h5 class="f16">A-End </h5>
        <h6 class="f14"  v-if="ifClient==1">CSP Account ID：
          <span>CSP-kjfoe13k1</span>
        </h6>
        <h6 class="f14"  v-if="ifClient==2"> Address:
          <span>Dacheng Building,Beijing</span>
        </h6>
        <Table :columns="FeeInfo" ref="myTable" :data="FeeInfoData1" v-if="ifClient==1" style="margin-bottom: 50px"></Table>
        <Table :columns="FeeIn" ref="myTable" :data="FeeInfoData2" v-if="ifClient==2" style="margin-bottom: 50px"></Table>
        <h5 class="f16">Z-End</h5>
        <h6 class="f14">CSP Account ID：<span v-if="ifClient==1">CSP-aabod6k1</span>
          <span v-if="ifClient==2">CSP-ccbod6k1</span></h6>
        <Table :columns="OrderInfo" :data="OrderInfoData1" v-if="ifClient==1" class="mb-30"></Table>
        <Table :columns="OrderInfo" :data="OrderInfoData" v-if="ifClient==2" class="mb-30"></Table>
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
  #orderDetails{
    width: 1200px;
    margin: 0px auto;
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
  .first{
    font-size: 18px;
    width: 90px;
    color: #8390a4;
    font-weight: 400;
    text-align: right;
  }
  .inline{
    margin-left: 50px;
    height: 35px;
  }
  .statusInfo{
    margin-left: 90px;
  span{
    margin-left: 0;
  }
  .suffix{
    font-size: 12px;
  }
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
   width:230px;
  .circle{
    width: 20px;
    height: 20px;
  }
  .top{
    position: absolute;
    top: -30px;
    left: 10px;
  }
  .bottom{
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .success{
    font-size: 14px;
    p{
      font-size: 12px;
      color: #cbd3e0;

    }
  }
  }
  }
  .second{
    margin-left: 30px;
    font-size: 18px;
    font-weight: 400;
  }
  .suffix{
    font-size: 12px;
    color: #cbd3e0;
    display: inline-block;
    margin-left: 5px;
  }
  }
  }
  .info{
  li{
    position: relative;
    width: 600px;
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
                      value: params.row.Price[0]
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
                        value: item,
                        name:1
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

                return h('input', {

                  domProps: {
                    value: params.row.port
                  },
                  on: {
                    input: function (event) {
                      params.row.port = event.target.value
                    }
                  }
                });
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

                return h('input', {

                  domProps: {
                    value: params.row.SubscriptionCycle
                  },
                  on: {
                    input: function (event) {
                      params.row.SubscriptionCycle = event.target.value
                    }
                  }
                });
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
            port:'GE/2/2/8',
            SubscriptionCycle: '64540',
            Quantity: '314',
            Subtotal: '192.168.253.94/30',
            password:'N/A',
            $isEdit: false
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-HK-w2c/88888'],
            port:'GE/1/2/6',
            SubscriptionCycle: '65181',
            Quantity: '314',
            Subtotal: '192.168.253.102/30',
            password:'******',
            $isEdit: false
          },{
            FeeName: 'CSP Secondary',
            Price: ['csp-HK-o91/77777'],
            port:'GE/2/2/9',
            SubscriptionCycle: '64540',
            Quantity: '314',
            Subtotal: '192.168.254.94/30',
            password:'N/A',
            $isEdit: false
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['edge-HK-921/88888'],
            port:'GE/1/2/7',
            SubscriptionCycle: '65181',
            Quantity: '314',
            Subtotal: '192.168.254.102/30',
            password:'******',
            $isEdit: false
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
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-HK-w2c/88888'],
            port:['GE/1/2/6'],
            SubscriptionCycle: ['65181'],
            Quantity: '314',
            Subtotal: '192.168.253.78/30',
            password:'******',
          },{
            FeeName: 'CE Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle:['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle: ['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
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

                return h('input', {

                  domProps: {
                    value: params.row.Price
                  },
                  on: {
                    input: function (event) {
                      params.row.Price = event.target.value
                    }
                  }
                });
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

                return h('input', {

                  domProps: {
                    value: params.row.port
                  },
                  on: {
                    input: function (event) {
                      params.row.port = event.target.value
                    }
                  }
                });
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

                return h('input', {

                  domProps: {
                    value: params.row.SubscriptionCycle
                  },
                  on: {
                    input: function (event) {
                      params.row.SubscriptionCycle = event.target.value
                    }
                  }
                });
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
            Price: ['csp-BJ-19e/77779'],
            port:['GE/1/3/1'],
            SubscriptionCycle: ['64540'],
            Quantity: '314',
            Subtotal: '192.168.253.73/30',
            password:'N/A',
          },
          {
            FeeName: 'CMI Primary',
            Price: ['edge-BJ-13c/88889'],
            port:['GE/1/2/5'],
            SubscriptionCycle: ['65181'],
            Quantity: '314',
            Subtotal: '192.168.253.74/30',
            password:'******',
          },{
            FeeName: 'CSP Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle: ['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
          },
          {
            FeeName: 'CMI Secondary',
            Price: ['N/A'],
            port:['N/A'],
            SubscriptionCycle: ['N/A'],
            Quantity: 'N/A',
            Subtotal: 'N/A',
            password:'N/A',
          },
        ],
        OrderInfoData1: [
          {
            FeeName: 'CSP Primary',
            Price: 'csp-BJ-19e/77779',
            port:'GE/2/3/1',
            SubscriptionCycle: '64542',
            Quantity: '314',
            Subtotal: '192.168.253.94/30',
            password:'N/A',
          },
          {
            FeeName: 'CMI Primary',
            Price: 'edge-BJ-13c/88889',
            port:'GE/1/2/5',
            SubscriptionCycle: '65182',
            Quantity: '314',
            Subtotal: '192.168.253.102/30',
            password:'******',
          },{
            FeeName: 'CSP Secondary',
            Price: 'csp-BJ-31p/77779',
            port:'GE/1/1/9',
            SubscriptionCycle: '64542',
            Quantity: '314',
            Subtotal: '192.168.254.94/30',
            password:'N/A',
          },
          {
            FeeName: 'CMI Secondary',
            Price: 'edge-BJ-301/88889',
            port:'GE/2/2/5',
            SubscriptionCycle: '65182',
            Quantity: '314',
            Subtotal: '192.168.254.102/30',
            password:'******',
          },
        ],
        createTime: "2018-11-08 14:11",
        operation: "open",
        productName: "Cloud Connect SE",
        service: "Cloud Connect Sevice",
        status: 3,
        subscriptionNo: 20181108141108150,
        updateTime: "2018-11-08 14:57",
        workNo: "wono20181108141108151",
        type:1,
        ifClient:'',
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
        })
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
          that.$router.push('../../page/sdnSet/configuration')
        },4000)

      }
    }
  }
</script>

