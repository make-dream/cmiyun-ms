<template>
    <div class="ImportResourcePage">
        <div class="title">Import Resource</div>
        <div class="contant">
            <p class="step">If you want to import new resource, please follow the next step</p>
            <p>
                <span>STEP 1</span>
                Download the template, Click here to start.
                <span class="button">Download</span>
            </p>
            <p>
                <span>STEP 2</span>
                As to regular to fill in and make sure correctly，then upload th
                <span class="button">upload</span>
            </p>
            <p>
                <span>STEP 3</span>
                Companies the resources information as you wish in the sheet the operation
            </p>
            <div class="title">All of 0 items</div>
            <Table :columns="columns1" :data="data1"></Table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            columns1: [
                {
                    title: 'Cloud',
                    key: 'Cloud',
                    align:'center',
                    width:70
                },{
                    title: 'Cloud location',
                    key: 'location',
                    align:'center',
                    width:120
                },{
                    title: 'CSP GW Device',
                    key: 'CspDevice',
                    align:'center',
                    width:144
                },{
                    title:'CSP GW PORT',
                    key:'CspPort',
                    align:'center',
                    width:123
                },{
                    title:'CSP GW PORT  TYPE',
                    key:'CspType',
                    align:'center',
                    width:123
                },{
                    title:'CSP AS',
                    key:'CspAs',
                    align:'center',
                    width:88
                },{
                    title:'CMI Device',
                    key:'CmiDevice',
                    align:'center',
                    width:104
                },{
                    title:'CMI PORT',
                    key:'CmiPort',
                    align:'center',
                    width:95
                },{
                    title:'CMI PORT  TYPE',
                    key:'CmiType',
                    align:'center',
                    width:96
                },{
                    title:'CMI AS',
                    key:'CmiAs',
                    align:'center',
                    width:88
                },{
                    title:'Detail',
                    key:'Detail',
                    align:'center',
                    width:70,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '10px',
                                    backgroundColor:"#fff",
                                    color:"#42a5f6",
                                    border:'none'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row)
                                    }
                                }
                            }, 'View')
                        ]);
                    } 
                }
            ],
            data1: [
                // {
                //     Cloud: 'AWS',
                //     location:'BJ AWS',
                //     CspDevice:'CSP BJ Gateway11',
                //     CspPort:'GE-1/0/0',
                //     CspType:'GE',
                //     CspAs:'645 40',
                //     CmiDevice:'BJ Edge11',
                //     CmiPort:'GE-1/0/0',
                //     CmiType:'GE',
                //     CmiAs:'65181',
                // },{
                //     Cloud: 'AWS',
                //     location:'BJ AWS',
                //     CspDevice:'CSP BJ Gateway11',
                //     CspPort:'GE-1/0/1',
                //     CspType:'GE',
                //     CspAs:'645 41',
                //     CmiDevice:'BJ Edge11',
                //     CmiPort:'GE-1/0/1',
                //     CmiType:'GE',
                //     CmiAs:'65181',
                // },{
                //     Cloud: 'AWS',
                //     location:'BJ AWS',
                //     CspDevice:'CSP BJ Gateway11',
                //     CspPort:'GE-1/0/2',
                //     CspType:'GE',
                //     CspAs:'645 42',
                //     CmiDevice:'BJ Edge11',
                //     CmiPort:'GE-1/0/2',
                //     CmiType:'GE',
                //     CmiAs:'65181',
                // },{
                //     Cloud: 'AWS',
                //     location:'BJ AWS',
                //     CspDevice:'CSP BJ Gateway11',
                //     CspPort:'GE-1/0/3',
                //     CspType:'GE',
                //     CspAs:'645 43',
                //     CmiDevice:'BJ Edge11',
                //     CmiPort:'GE-1/0/3',
                //     CmiType:'GE',
                //     CmiAs:'65502',
                // },{
                //     Cloud: 'AWS',
                //     location:'BJ AWS',
                //     CspDevice:'CSP BJ Gateway11',
                //     CspPort:'GE-1/0/4',
                //     CspType:'FE',
                //     CspAs:'645 44',
                //     CmiDevice:'BJ Edge11',
                //     CmiPort:'GE-1/0/4',
                //     CmiType:'FE',
                //     CmiAs:'65502',
                // },{
                //     Cloud: 'AWS',
                //     location:'BJ AWS',
                //     CspDevice:'CSP BJ Gateway11',
                //     CspPort:'GE-1/0/5',
                //     CspType:'FE',
                //     CspAs:'645 45',
                //     CmiDevice:'BJ Edge11',
                //     CmiPort:'GE-1/0/5',
                //     CmiType:'FE',
                //     CmiAs:'65502',
                // }
            ]
        }
    },
    methods: {
      show(){

      }  
    },
    components: {

    }
}
</script>

<style lang="less">
.ImportResourcePage{
    width: 1200px;
    margin: 0 auto;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;
    }
    .contant{
        width: 100%;
        padding: 30px 40px;
        border:1px solid #e2e9f6;
        .step{
            width: 100%;
            font-size: 14px;
            color:#333333;
            line-height: 14px;
            margin-bottom: 12px;
            padding: 0;
        }
        p{
            width: 100%;
            line-height: 42px;
            padding-left: 30px;
            font-size: 12px;
            color:#333;
            span{
                color:#666;
                margin-right: 35px;
            }
            .button{
                color:#42a5f6;
                margin-left: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
