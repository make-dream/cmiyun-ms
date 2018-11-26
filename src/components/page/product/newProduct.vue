<template>
    <div class="newPro">
      <h1>New Product </h1>
      <div class="main">
        <h2 class="mb-30">Product Info</h2>
        <template>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="160">
            <FormItem label="Product Name" prop="name">
              <Input v-model="formValidate.name" placeholder="At most 20 characters"></Input>
            </FormItem>
            <FormItem label="Product Type" prop="type">
              <Select v-model="formValidate.type" placeholder="Please select product type">
                <Option value="0">Cloud</Option>
                <Option value="1">Net</Option>
                <Option value="2">Cloud and Net</Option>
              </Select>
            </FormItem>
            <FormItem label="Product Decription" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="At most 200 characters"></Input>
            </FormItem>
            <FormItem label="Product Picture" class="picture">
              <ul class="clearfix upload">
                <li>
                  <div style="width: 200px;height: 110px;" class="mb-15" v-if="img1==1">
                    <img src="../../../assets/img/product-head.jpg" alt="" style="width: 100%;height: 100%;">
                  </div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/"
                          :on-success="handleSuccess1"
                          :format="['jpg','jpeg','png']"
                          :before-upload="handleBeforeUpload1"
                  >
                    <Button ref="upload1">Upload List Picture</Button>
                  </Upload>
                  <!--<i class="ml-10">示例图片</i>-->
                  <p>png or jpeg,at most 1M</p>
                </li>
                <li>
                  <div style="width: 200px;height: 110px;" class="mb-15" v-if="img2==1">
                    <img src="../../../assets/img/product-detail.jpg" alt="" style="width: 100%;height: 100%;">
                  </div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/"
                          :on-success="handleSuccess2"
                          :format="['jpg','jpeg','png']"
                          :before-upload="handleBeforeUpload2"
                  >
                    <Button ref="upload2">Upload Detail Picture</Button>
                  </Upload>
                  <!--<i class="ml-10">示例图片</i>
                  <i class="ml-10">下载模板</i>-->
                  <p>png or jpeg,at most 1M</p>
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
                    <Input v-model="formValidate2.name" placeholder="At most 20 characters"></Input>
                    <Button class="pull-right cancel" @click="cancelfee">Cancel</Button>
                    <Button class="pull-right mr-20 save" @click="saveFeeInfo">Save</Button>
                  </FormItem>
                  <FormItem label="Fee Type" prop="type">
                    <Select v-model="formValidate2.type" placeholder="Please select fee type">
                      <Option value="0">Monthly Rental Fee</Option>
                      <Option value="1">Yearly Rental Fee</Option>
                      <Option value="2">Device Fee</Option>
                      <Option value="3">Software Fee</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="Fee Decription" prop="desc">
                    <Input v-model="formValidate2.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="At most 200 characters"></Input>
                  </FormItem>
                  <FormItem label="Price with Tax" class="price">
                    <span v-model="price">{{price}}</span><i class="ml-10">HKD</i>
                  </FormItem>
                  <FormItem label="Tax" class="price">
                    <span v-model="tax">{{tax}}</span><i class="ml-10">HKD</i>
                  </FormItem>
                  <FormItem label="Composing" class="comp">
                      <FormItem
                        v-for="(item, index) in formDynamic.items"
                        v-if="item.status"
                        :key="item.index">
                        <Row class="mb-15">
                          <Col>
                          <Select placeholder="Please select type">
                            <Option value="0">Cloud</Option>
                            <Option value="1">Net</Option>
                            <Option value="2">Net and Cloud</Option>
                          </Select>
                          <Select placeholder="Please select product">
                            <Option value="0">Cloud Connect SE</Option>
                            <Option value="1">SD-WAN SE</Option>
                            <Option value="2">SDN SE</Option>
                            <Option value="2">ECS SE</Option>
                          </Select>
                          <Select placeholder="Please select Fee" v-model="feePrice">
                            <Option value="1000">10Mbps Monthly Rental Fee_1000HKD</Option>
                            <Option value="5000">100Mbps Monthly Rental Fee_5000HKD</Option>
                            <Option value="10000">10Mbps Yearly Rental Fee_10000HKD</Option>
                            <Option value="50000">100Mbps Yearly Rental Fee_50000HKD</Option>
                            <Option value="500">10Mbps Monthly Rental Fee_500HKD</Option>
                            <Option value="2500">100Mbps Monthly Rental Fee_2500HKD</Option>
                            <Option value="5000">10Mbps Yearly Rental Fee_5000HKD</Option>
                            <Option value="25000">100Mbps Yearly Rental Fee_25000HKD</Option>
                            <Option value="200">CPE-M Device Fee_200HKD</Option>
                            <Option value="100">License Fee_100HKD</Option>
                          </Select>
                          <Input v-model="discount" placeholder="Discount"></Input>
                          <img src="../../../assets/img/icon-add.png" v-if="item.status==1" alt="" @click="handleAdd">
                          <img src="../../../assets/img/icon-del.png" v-if="item.status==2" alt="" @click="handleDel(index)">
                          </Col>
                        </Row>
                      </FormItem>
                  </FormItem>
                </Form>
              </div>
              <div class="Feeinfo mb-30">
                <Collapse v-model="value1" v-if="Feeinfo1==1">
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
                            10%    100HKD
                          </FormItem>
                          <FormItem label="Composing">
                            <p>Net    Cloud Connect SE    10Mbps Monthly Rental Fee    100%</p>
                          </FormItem>
                        </Form>
                      </template>
                    </p>
                  </Panel>
                </Collapse>
                <Collapse v-model="value2" v-if="Feeinfo2==1">
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
                            10%    1000HKD
                          </FormItem>
                          <FormItem label="Composing">
                            <p>Net    Cloud Connect SE    10Mbps Yearly Rental Fee    100%</p>
                          </FormItem>
                        </Form>
                      </template>
                     </p>
                    </Panel>
                  </Collapse>

                  <Collapse v-model="value3" v-if="Feeinfo3==1">
                    <Panel name="1">
                      100Mbps Monthly Rental Fee
                      <p slot="content">
                        <template>
                          <Form :label-width="80">
                            <FormItem label="Fee Name">
                              100Mbps Monthly Rental Fee
                            </FormItem>
                            <FormItem label="Fee Type">
                              Monthly Rental Fee
                            </FormItem>
                            <FormItem label="Fee Decription">
                              Cloud Connect Cloud to Cloud for Minor Enterprise
                            </FormItem>
                            <FormItem label="Price with Tax">
                              5000HKD
                            </FormItem>
                            <FormItem label="Tax">
                              10%    500HKD
                            </FormItem>
                            <FormItem label="Composing">
                      <p>Net    Cloud Connect SE    100Mbps Monthly Rental Fee    100%</p>
                      </FormItem>
                      </Form>
                      </template>
                      </p>
                    </Panel>
                  </Collapse>


                  <Collapse v-model="value4" v-if="Feeinfo4==1">
                    <Panel name="1">
                      100Mbps Yearly Rental Fee
                      <p slot="content">
                        <template>
                          <Form :label-width="80">
                            <FormItem label="Fee Name">
                              100Mbps Yearly Rental Fee
                            </FormItem>
                            <FormItem label="Fee Type">
                              Yearly Rental Fee
                            </FormItem>
                            <FormItem label="Fee Decription">
                              Cloud Connect Cloud to Cloud for Minor Enterprise
                            </FormItem>
                            <FormItem label="Price with Tax">
                              50000HKD
                            </FormItem>
                            <FormItem label="Tax">
                              10%    5000HKD
                            </FormItem>
                            <FormItem label="Composing">
                      <p>Net    Cloud Connect SE    100Mbps Yearly Rental Fee    100%</p>
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
                    <DatePicker type="daterange" class="time" placement="bottom-end" placeholder="Please choose the time" style="width: 200px"></DatePicker>
                  </Col>
                </FormItem>
                <FormItem label="Available People">
                  <Select v-model="peoArr" multiple placeholder="Customer Industry(Multiselect)">
                    <Option v-for="item in peoList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Select v-model="levelArr" multiple placeholder="Customer Level(Multiselect）">
                    <Option v-for="item in peoLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Select v-model="typeArr" multiple placeholder=" Specific Customer(Multiselect)">
                    <Option v-for="item in peoType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
                <FormItem label="Available Area">
                  <Select v-model="areaArr" multiple placeholder="Featured First(Multiselect)">
                    <Option v-for="item in areaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </Form>

              <h2 class="mb-30 mr-10">Apply Rules</h2>
              <Form :label-width="180">
                <FormItem label="Products Mutex">
                  <Select placeholder="Products Mutex(Multiselect)">
                    <Option value="0">Cloud Connect</Option>
                    <Option value="1">Cloud Connect Cloud to Cloud</Option>
                    <Option value="2">Cloud Connect On-Premise to Cloud</Option>
                    <Option value="3">SD-WAN</Option>
                  </Select>
                </FormItem>
                <FormItem label="Product and Trade Mutex">
                  <Select placeholder="Trade Mutex(Mulitselect)">
                    <Option value="0">Subscrbe</Option>
                    <Option value="1">Unsubscrbe</Option>
                    <Option value="2">Change</Option>
                  </Select>
                </FormItem>
                <FormItem label="Product Review">
                  <RadioGroup v-model="proReview">
                    <Radio label="Yes"></Radio>
                    <Radio label="No"></Radio>
                  </RadioGroup>
                </FormItem>
              </Form>
              <Button type="primary" style="display: block;margin: 0 auto;" @click="handleSubmit('formValidate')">Submit</Button>
        </template>
      </div>
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
      .ivu-upload-list{
        display: none;
      }
      .ivu-btn-primary{
        background: #42a5f6;
        border: #42a5f6;
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
    watch:{
      discount(newVal,oldVal){
          if(newVal.indexOf('%')>-1){
              var price=newVal.split('%')[0];
              if(this.feePrice>0){
                this.price=(this.newVal*parseInt(price))/100;
                this.tax=(this.newVal*parseInt(price))/1000;
              }
          }
      },
      feePrice(newVal,oldVal){
          this.newVal=parseInt(newVal);
          var price=1;
          if(this.discount.indexOf('%')>-1){
            price=this.discount.split('%')[0];
          }
          if(this.discount){
            this.price=(this.newVal*parseInt(price))/100;
            this.tax=(this.newVal*parseInt(price))/1000;
          }

      }
    },
    data () {
      return {
        flag:false,
        formValidate: {
          name: '',
          desc: '',
          type:''
        },
        value1:'1',
        value2:'1',
        value3:'1',
        value4:'1',
        defaultList1:[],
        defaultList2:[],
        formValidate2: {
          name: '',
          desc: '',
          type:''
        },
        img1:0,
        img2:0,
        formValidate3:{

        },
        discount:'',    //折扣率
        ruleValidate3:[],
        ruleValidate: {
          name: [
            { required: true, message: '', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '', trigger: 'blur' },
            { type: 'string', min: 20, message: '', trigger: 'blur' }
          ],
          defaultList1: [
            { required: true, message: '', trigger: 'blur' }
          ],
          defaultList2: [
            { required: true, message: '', trigger: 'blur' }
          ]
        },
        ruleValidate2: {
          name: [
            { required: true, message: '', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '', trigger: 'blur' },
            { type: 'string', min: 20, message: '', trigger: 'blur' }
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
        tax:'--',
        feePrice:0,
        Feeinfo1:0,
        Feeinfo2:0,
        Feeinfo3:0,
        Feeinfo4:0,
        saveTime:0,
        peoList: [
          {
            value: '0',
            label: 'All'
          },
          {
            value: '1',
            label: 'Financial Industry'
          },
          {
            value: '2',
            label: 'Construction'
          },
          {
            value: '3',
            label: 'Education'
          }
        ],
        peoArr: [],
        peoLevel: [
          {
            value: '0',
            label: 'All'
          },
          {
            value: '1',
            label: 'Level A'
          },
          {
            value: '2',
            label: 'Level B'
          },
          {
            value: '3',
            label: 'Level C'
          },
          {
            value: '4',
            label: 'Level D'
          }
        ],
        levelArr: [],
        peoType: [
          {
            value: '0',
            label: 'All'
          },
          {
            value: '1',
            label: 'Tencent'
          },
          {
            value: '2',
            label: 'Alibaba'
          },
          {
            value: '3',
            label: 'Baidu'
          }
        ],
        typeArr: [],
        areaList:[
          {
            value: '0',
            label: 'Homepage recommend'
          },
          {
            value: '1',
            label: 'Product list recommend'
          },
          {
            value: '2',
            label: 'User dashboard recommend'
          },
          {
            value: '3',
            label: 'Subcribe page recommend'
          }
        ],
        areaArr:[],
        proReview:'No'
      }
    },
    methods: {
      handleSubmit (name) {
        var that=this;
          this.$http.post('/editStatus/editByName?productId=createProduct&status=2')
            .then(function (response) {
              if(response.data.resultCode==200){
                that.$Message.success('Success!');
                setTimeout(function(){
                  that.$router.push({path: '/page/product/Management'});
                },1000)
              }else{
                that.$Message.error('Fail!');
              }

            })
            .catch(function (error) {
              console.log(error);
            });


      },
      saveFeeInfo(){
        this.saveTime++;
        if(this.saveTime==1){
            this.Feeinfo1=1
        }else if(this.saveTime==2){
          this.Feeinfo2=1;
        }else if(this.saveTime==3){
          this.Feeinfo3=1;
        }else if(this.saveTime==4){
          this.Feeinfo4=1;
        }
        this.addFee();
      },
      cancelfee(){
        this.addFee();
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
          this.feePrice=0;
          this.discount='';
          this.price='--';
          this.formValidate2={
            name: '',
            desc: '',
            type:''
          };
      },
      handleBeforeUpload1(file){
        this.img1=1;
      },
      handleBeforeUpload2(file){
        this.img2=1;
      },
      handleSuccess1(a,b){
        this.img1=1;
      },
      handleSuccess2(a,b){
        this.img2=1;
      }
    }
  }
</script>
