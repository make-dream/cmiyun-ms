<template>
    <div class="orderCustom">
        <div class="main">
          <h5 class="mb-20">Accounts > My Subcription > Subcription Info</h5>
          <div class="con">
            <Form :label-width="80" label-position="left">
              <FormItem label="Status">
                Pending config <span class="time">(Update Time：2018/11/1  10:00:58)</span>
              </FormItem>
              <FormItem label="Total" class="line">
                28000HKD/7Months <span class="time tip">35500HKD/5Months</span>
              </FormItem>
              <h6>Basic Info</h6>
              <div class="content">
                <FormItem label="Subscription NO." :label-width="120">
                  20181101100058
                </FormItem>
                <FormItem label="Create Time" :label-width="120">
                  2018/11/01  10:00:58
                </FormItem>
                <FormItem label="Effective Time" :label-width="120">
                  --
                </FormItem>
                <FormItem label="Expiry Time" class="mb-50" :label-width="120">
                  --
                </FormItem>
              </div>
            </Form>
            <h6>Configuration Info</h6>
            <div class="Feeinfo">
              <Collapse v-model="value1">
                <Panel name="1">
                  Cloud Connect SE
                  <p slot="content">
                    <template>
                      <Form :label-width="80">
                        <FormItem label="Subscription Cycle">
                          5Months
                        </FormItem>
                        <FormItem label="Bandwidth">
                          10Mbps
                        </FormItem>
                        <FormItem label="* Connection Point">
                          <Select placeholder="请选择产品不可办理的业务">
                            <Option value="0">Cloud side</Option>
                            <Option value="1">Client side</Option>
                          </Select>
                          <Input placeholder="please input account id"></Input>
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
</template>

<style lang="less">
  .orderCustom{
    background: #f8f8f8;
    .main{
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
      padding-bottom: 30px;
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
        margin-bottom: 40px !important;
      }
      .ivu-form-item{
        margin-bottom: 10px;
      }
      label{
        font-size: 18px;
        color: #8390a4;
      }
      .ivu-form-item-content{
        font-size: 20px;
        color: #636e80;
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
    }
  }
</style>

<script>
    export default{
        data () {
            return {
              value1:'1',
            }
        }
    }
</script>
