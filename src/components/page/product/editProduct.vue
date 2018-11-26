<template>
    <div class="newPro">
      <h1>Edit Product </h1>
      <div class="main">
        <h2 class="mb-30">Product Info</h2>
        <template>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="160">
            <FormItem label="Product Name" prop="name">
              <Input v-model="formValidate.name" placeholder="最多20字"></Input>
            </FormItem>
            <FormItem label="Product Type" prop="type">
              <Select v-model="formValidate.type" placeholder="请选择产品大类">
                <Option value="0">Cloud</Option>
                <Option value="1">Net</Option>
                <Option value="2">Cloud and Net</Option>
              </Select>
            </FormItem>
            <FormItem label="Product Decription" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="最多200字"></Input>
            </FormItem>
            <FormItem label="Product Picture" class="picture">
              <ul class="clearfix upload">
                <li>
                  <div style="width: 200px;height: 110px;background: red;" class="mb-15 imgBox">
                    <img src="../../../assets/img/product-head.jpg" ref="img1" alt="" @click="handleView('img1')">
                  </div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/"
                          :on-success="handleSuccess1"
                          :format="['jpg','jpeg','png']"
                          :before-upload="handleBeforeUpload"
                          :default-file-list="defaultList1"
                  >
                    <Button ref="upload1">变更列表页图片</Button>
                  </Upload>
                  <!--<i class="ml-10">示例图片</i>-->
                  <p>尺寸320*180，格式png或jpeg，最大500K</p>
                </li>
                <li>
                  <div style="width: 200px;height: 110px;background: red;" class="mb-15 imgBox">
                    <img src="../../../assets/img/product-detail.jpg" ref="img2" alt="" @click="handleView('img2')">
                  </div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/"
                          :on-success="handleSuccess2"
                          :format="['jpg','jpeg','png']"
                          :before-upload="handleBeforeUpload"
                          :default-file-list="defaultList2"
                  >
                    <Button ref="upload2">变更产品介绍图片</Button>
                  </Upload>
                  <!--<i class="ml-10">示例图片</i>
                  <i class="ml-10">下载模板</i>-->
                  <p>宽度最大1200，格式png或jpeg，最大1M</p>
                </li>
              </ul>
            </FormItem>
          </Form>
            <div class="clearfix">
              <h2 class="mb-30 pull-left mr-10">Fee Info</h2>
              <Button type="primary  pull-left" @click="addFee">Create</Button>
            </div>
              <div class="group mb-30" v-if="flag">
                <Form ref="formValidate2" :model="formValidate2" :rules="ruleValidate2" :label-width="135">
                  <FormItem label="Fee Name" prop="name" class="feeName">
                    <Input v-model="formValidate2.name" placeholder="最多20字"></Input>
                    <Button class="pull-right cancel">Cancel</Button>
                    <Button class="pull-right mr-20 save">Save</Button>
                  </FormItem>
                  <FormItem label="Fee Type" prop="type">
                    <Select v-model="formValidate2.type" placeholder="请选择资费类型">
                      <Option value="0">标准安装费</Option>
                      <Option value="1">标准月租费</Option>
                      <Option value="2">定制费</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="Fee Decription" prop="desc">
                    <Input v-model="formValidate2.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="最多200字"></Input>
                  </FormItem>
                  <FormItem label="Price" class="price">
                    <span v-model="price">--</span><i class="ml-10">元</i>
                  </FormItem>
                  <FormItem label="Composing" class="comp">
                      <FormItem
                        v-for="(item, index) in formDynamic.items"
                        v-if="item.status"
                        :key="item.index">
                        <Row class="mb-15">
                          <Col>
                          <Select placeholder="请选择产品大类">
                            <Option value="0">云类产品</Option>
                            <Option value="1">网类产品</Option>
                            <Option value="2">云网类产品</Option>
                          </Select>
                          <Select placeholder="请选择产品">
                            <Option value="0">云互联基础版</Option>
                            <Option value="1">云互联进阶版</Option>
                            <Option value="2">云互联旗舰版</Option>
                          </Select>
                          <Select placeholder="请选择资费">
                            <Option value="0">1M月租费_1000元</Option>
                            <Option value="1">2M月租费_2000元</Option>
                            <Option value="2">5M月租费_5000元</Option>
                            <Option value="3">10M月租费_10000元</Option>
                            <Option value="4">20M月租费_20000元</Option>
                            <Option value="5">50M月租费_50000元</Option>
                            <Option value="6">标准安装费_500元</Option>
                          </Select>
                          <Input placeholder="折扣率"></Input>
                          <img src="../../../assets/img/icon-add.png" v-if="item.status==1" alt="" @click="handleAdd">
                          <img src="../../../assets/img/icon-del.png" v-if="item.status==2" alt="" @click="handleDel(index)">
                          </Col>
                        </Row>
                      </FormItem>
                  </FormItem>
                </Form>
              </div>
              <div class="Feeinfo mb-30">
                <Collapse v-model="value1">
                  <Panel name="1">
                    10Mbps Monthly Rental Fee
                    <p slot="content">
                      <template>
                        <Form :label-width="80">
                          <FormItem label="Fee Name">
                            10Mbps Monthly Rental Fee
                          </FormItem>
                          <FormItem label="Fee Type">
                            Monthly Rental Fee
                          </FormItem>
                          <FormItem label="Fee Decription">
                            Cloud Connect Cloud to Cloud for Minor Enterprise
                          </FormItem>
                          <FormItem label="Price with Tax">
                            1000HKD
                          </FormItem>
                          <FormItem label="Tax">
                            100HKD
                          </FormItem>
                          <FormItem label="Composing">
                    <p>Cloud Connect SE   10Mbps Monthly Rental Fee    100%</p>
                    </FormItem>
                    </Form>
                    </template>
                    </p>
                    </Panel>
                    </Collapse>
                    <Collapse v-model="value2">
                      <Panel name="1">
                        10Mbps Yearly Rental Fee
                        <p slot="content">
                          <template>
                            <Form :label-width="80">
                              <FormItem label="Fee Name">
                                10Mbps Yearly Rental Fee
                              </FormItem>
                              <FormItem label="Fee Type">
                                Yearly Rental Fee
                              </FormItem>
                              <FormItem label="Fee Decription">
                                Cloud Connect Cloud to Cloud for Minor Enterprise
                              </FormItem>
                              <FormItem label="Price with Tax">
                                10000HKD
                              </FormItem>
                              <FormItem label="Tax">
                                1000HKD
                              </FormItem>
                              <FormItem label="Composing">
                        <p>Cloud Connect SE   10Mbps Monthly Rental Fee    100%</p>
                        </FormItem>
                        </Form>
                        </template>
                        </p>
                       </Panel>
                     </Collapse>
              </div>

              <h2 class="mb-30 mr-10">Apply Scope</h2>
              <Form :label-width="180">
                <FormItem label="Available Time">
                  <Col span="12">
                    <DatePicker type="daterange" class="time" :value="getDate" placement="bottom-end" style="width: 200px"></DatePicker>
                  </Col>
                </FormItem>
                <FormItem label="Available People">
                  <Select v-model="peoArr" multiple placeholder="请选择客户行业（多选）">
                    <Option v-for="item in peoList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Select v-model="levelArr" multiple placeholder="请选择客户级别（多选）">
                    <Option v-for="item in peoLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Select v-model="typeArr" multiple placeholder="请选择具体客户（多选）">
                    <Option v-for="item in peoType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
                <FormItem label="Available Area">
                  <Select v-model="areaArr" multiple placeholder="请选择受理推荐位（多选）">
                    <Option v-for="item in areaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </Form>

              <h2 class="mb-30 mr-10">Apply Rules</h2>
              <Form :label-width="180">
                <FormItem label="Products Mutex">
                  <Select placeholder="请选择与之互斥的产品">
                    <Option value="0">云服务器基础版</Option>
                    <Option value="1">云服务器进阶版</Option>
                    <Option value="2">云组网基础版</Option>
                    <Option value="3">云组网进阶版</Option>
                  </Select>
                </FormItem>
                <FormItem label="Product and Trade Mutex">
                  <Select placeholder="请选择产品不可办理的业务">
                    <Option value="0">业务开通</Option>
                    <Option value="1">业务升档</Option>
                    <Option value="2">业务暂停</Option>
                    <Option value="3">业务降档</Option>
                    <Option value="4">业务退订</Option>
                  </Select>
                </FormItem>
                <FormItem label="Product Review">
                  <RadioGroup v-model="proReview">
                    <Radio label="是"></Radio>
                    <Radio label="否"></Radio>
                  </RadioGroup>
                </FormItem>
              </Form>
              <Button type="primary" style="display: block;margin: 0 auto;" @click="handleSubmit('formValidate')">Submit</Button>
        </template>
      </div>
      <Modal title="查看大图" v-model="visible" class-name="fl-image-modal">
        <img :src="imgUrl" v-if="visible" style="width: 100%">
      </Modal>
    </div>
</template>

<style lang="less">
  .newPro{
    width: 1200px;
    margin: 0 auto;
    h1{
      font-size: 20px;
      color: #666;
      margin: 20px 0;
    }
    .main{
      border: 1px solid #e2e9f6;
      padding: 30px 40px;
      .ivu-form .ivu-form-item-label{
          font-size: 14px;
          color: #666;
          padding-right: 20px;
        }
      input,.ivu-select{
        width: 236px;
        height: 36px;
      }
      textarea{
        width: 800px;
      }
      .picture{
        .ivu-form-item-content{
          display: inline-block;
          margin: 0 !important;
        }
      }
      .upload{
        li{
          font-size: 14px;
          margin-bottom: 50px;
          float: left;
          width: 300px;
        .ivu-upload{
          display: inline-block;
        }
          button{
            border: 1px solid #42a5f6;
            color: #42a5f6;
            height: 36px;

          }
          p{
            color: #999;
          }
          i{
            color: #42a5f6;
          }
        }
      }
      .ivu-btn-primary{
        background: #42a5f6;
        border: #42a5f6;
      }
      .imgBox{
        width: 200px;
        height: 110px;
        background: red;
        img{
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
      .group{
        background: #f9f9f9;
        padding: 25px;
        .price{
          input{
            width: 100px;
          }
          .ivu-form-item-content{
            display: inline-block;
            margin: 0 !important;
            .ivu-input-wrapper{
              width: 100px;
            }
          }
        }
        .feeName{
          .ivu-input-wrapper{
            display: inline-block;
            width: 236px;
          }
        }
        .comp{
          .ivu-select{
            margin-right: 6px;
          }
          input{
            width: 63px;
            height: 36px;
            margin-right: 10px;
          }
          .ivu-input-wrapper{
            display: inline-block;
            width: 63px;
          }
          img{
            vertical-align: middle;
            cursor: pointer;
          }
        }
        .cancel{
          background: #8ea2b5;
          border: #8ea2b5;
          color: white;
        }
        .save{
          background: #0bc4ae;
          border: #0bc4ae;
          color: white;
        }
      }
      .ivu-select-single .ivu-select-selection{
        height: 36px;
        min-height: 36px;
      }
      .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
        height: 36px;
        min-height: 36px;
        line-height: 36px;
      }
      .time{
        .ivu-input-icon{
          right: -36px;
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
      .ivu-form-item-label{
        width: 171px !important;
        font-size: 14px;
      }
      .ivu-form-item-content{
        font-weight: 700;
        font-size: 14px;
      }
    }
  }
</style>

<script>
  import Header from '../../common/header.vue'
  import Footer from '../../common/footer.vue'
  export default {
    components:{
      Header,
      Footer
    },
    mounted(){
      let nowDate=new Date();
      let year=nowDate.getFullYear();
      let month=nowDate.getMonth()+1;
      let day=nowDate.getDate();
      let endTime=`${year}-${month}-${day}`;
      this.getDate=[year+'-'+month+'-'+day,year+'-'+month+'-'+day];
      console.log(this.getDate)
    },
    data () {
      return {
        flag:false,
        formValidate: {
          name: 'Cloud Connect Basic',
          desc: 'CMI Cloud Connect Service is unique in the market for enterprises.',
          type:'1'
        },
        value1:'1',
        value2:'0',
        imgUrl:'',
        visible:false,
        defaultList1:[],
        defaultList2:[],
        formValidate2: {
          name: '',
          desc: '',
          type:''
        },
        formValidate3:{

        },
        ruleValidate3:[],
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          type: [
            { required: true, message: 'Please select the type', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ],
          defaultList1: [
            { required: true, message: 'The picture cannot be empty', trigger: 'blur' }
          ],
          defaultList2: [
            { required: true, message: 'The picture cannot be empty', trigger: 'blur' }
          ]
        },
        ruleValidate2: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          type: [
            { required: true, message: 'Please select the type', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
        },
        index:1,
        formDynamic: {
          items: [
            {
              index: 1,
              status: 1
            }
          ]
        },
        price:'--',
        getDate:[],
        peoList: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '金融业'
          },
          {
            value: '2',
            label: '建筑业'
          },
          {
            value: '3',
            label: '教育业'
          }
        ],
        peoArr: ['0'],
        peoLevel: [
          {
            value: '0',
            label: '全选'
          },
          {
            value: '1',
            label: 'A级'
          },
          {
            value: '2',
            label: 'B级'
          },
          {
            value: '3',
            label: 'C级'
          },
          {
            value: '4',
            label: 'D级'
          }
        ],
        levelArr: ['0'],
        peoType: [
          {
            value: '0',
            label: '全选'
          },
          {
            value: '1',
            label: '腾讯'
          },
          {
            value: '2',
            label: '阿里巴巴'
          },
          {
            value: '3',
            label: '百度'
          }
        ],
        typeArr: ['0'],
        areaList:[
          {
            value: '0',
            label: '首页BANNER'
          },
          {
            value: '1',
            label: '首页推荐位'
          },
          {
            value: '2',
            label: '客户首页推荐位'
          },
          {
            value: '3',
            label: '订购确认页推荐位'
          }
        ],
        areaArr:['2'],
        proReview:'否'
      }
    },
    methods: {
      handleSubmit (name) {
        var that=this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/editStatus/editByName?productName=productName3&status=2')
              .then(function (response) {
                console.log(response);
                if(response.data.resultCode==200){
                  that.$Message.success('Success!');
                  setTimeout(function(){
                    that.$router.push({path: '/page/product/Management'});
                  },1000)
                }

              })
              .catch(function (error) {
                console.log(error);
              });

          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      addFee(){
        this.flag=!this.flag;
        this.resetFee();
      },
      handleAdd(){
        this.index++;
        this.formDynamic.items.push({
          index: this.index,
          status: 2
        });
      },
      handleDel(index){
        console.logg(index)
        this.formDynamic.items.splice(index,1);
      },
      resetFee(){
          this.index=1;
          this.formDynamic= {
            items: [
              {
                index: 1,
                status: 1
              }
            ]
          }
          this.price='--';
          this.formValidate2={
            name: '',
            desc: '',
            type:''
          };
      },
      handleBeforeUpload(file){
          console.log(file)
      },
      handleSuccess1(a,b){
        this.defaultList1[0]=b.name;
      },
      handleSuccess2(a,b){
        this.defaultList2[0]=b.name;
      },
      handleView(url){
        let src;
        if(url=='img1'){
          src=this.$refs.img1.src;
        }else{
          src=this.$refs.img2.src;
        }
        this.imgUrl = src;
        this.visible = true;
      },
    }
  }
</script>
