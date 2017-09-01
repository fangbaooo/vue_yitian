<template>
<div class="s_center mb40 clr">
  <div class="s_bread">
    <a href="/" title="" class="s_breadindex"><i class="icon"></i>首页</a>
    <i class="s_breadarrow">&gt;</i>
    <span>我要借款</span>
  </div>
  <div class="loan-box clr">
    <div class="loan-left">
      <h4 class="fz18">我们的优势</h4>
      <ul class="loan-advantage clr">
        <li>
          <i class="loan-icon-1"></i>
          <strong>额度高</strong>
          <p>借款额度最高50万</p>
        </li>
        <li>
          <i class="loan-icon-2"></i>
          <strong>放款快</strong>
          <p>最快当天即可放款</p>
        </li>
        <li>
          <i class="loan-icon-3"></i>
          <strong>利率低</strong>
          <p>年化最低7%</p>
        </li>
        <li>
          <i class="loan-icon-4"></i>
          <strong>流程简</strong>
          <p>在线提交轻松获批</p>
        </li>
      </ul>
      <div class="loan-hr"></div>
      <h4 class="fz18">借款流程</h4>
      <ul class="loan-step clr fz16">
        <li class="loan-step-li">
          <em>1</em>
          <p>填写资料</p>
        </li>
        <li class="loan-step-arrow"></li>
        <li class="loan-step-li">
          <em>2</em>
          <p>审核信息</p>
        </li>
        <li class="loan-step-arrow"></li>
        <li class="loan-step-li">
          <em>3</em>
          <p>平台募集</p>
        </li>
        <li class="loan-step-arrow"></li>
        <li class="loan-step-li">
          <em>4</em>
          <p>快速放款</p>
        </li>
      </ul>
    </div>
    <div class="loan-right">
      <h4>我要借款</h4>
      <form action="" class="mt15">
        <div class="clr loan-label">
          <span class="loan-label-text">姓名/企业名称</span>
          <input type="text" id="name" v-model="name">
        </div>
        <div class="loan-error" id="error_name"><span class="p_zcerror" id="error_name_text">{{ nameErrors.errorText }}</span></div>
        <div class="clr loan-label">
          <span class="loan-label-text">身份证/营业执照号</span>
          <input type="text" id="identification" v-model="identification">
        </div>
        <div class="loan-error" id="error_identification"><span class="p_zcerror" id="error_identification_text">{{ identificationErrors.errorText }}</span></div>
        <div class="clr loan-label">
          <span class="loan-label-text">联系方式</span>
          <input type="text" id="phone" v-model="phone">
        </div>
        <div class="loan-error" id="error_phone"><span class="p_zcerror" id="error_phone_text">{{ phoneErrors.errorText }}</span></div>
        <div class="clr loan-label">
          <span class="loan-label-text">借贷类型</span>
          <!-- <div class="fl select select-big fz12" style="width:195px">
            <span class="select-border js-select">
                <span class="select-text" id="loanTypeText" data-value="">请选择借贷类型</span>
                <span class="select-icon"><i class="select-icon-arrow"></i></span>
            </span>
            <div class="select-sub js-select-sub">
              <a href="javascript:;" data-value="工商贷" data-id="" title="工商贷">工商贷</a>
              <a href="javascript:;" data-value="工薪贷" data-id="" title="工薪贷">工薪贷</a>
              <a href="javascript:;" data-value="房产抵押贷" data-id="" title="房产抵押贷">房产抵押贷</a>
              <a href="javascript:;" data-value="车辆抵押贷" data-id="" title="车辆抵押贷">车辆抵押贷</a>
            </div>
          </div> -->
          <selector :options="options" @on-change="changeType"></selector>
        </div>
        <div class="loan-error" id="error_type"><span class="p_zcerror" id="error_type_text"></span></div>
        
        <div class="clr loan-label">
          <span class="loan-label-text">借款金额</span>
          <input type="text" id="money" @keyup="checkMoney('money')" v-model="money">
        </div>
        <div class="loan-error" id="error_money"><span class="p_zcerror" id="error_money_text">{{ moneyErrors.errorText }}</span></div>
        <div class="clr loan-label">
          <span class="loan-label-text">借款期限</span>
          <input type="text" id="deadline" v-model="deadline">
        </div>
        <div class="loan-error" id="error_deadline"><span class="p_zcerror" id="error_deadline_text">{{ deadlineErrors.errorText }}</span></div>
        <a href="javascript:void(0)" class="loan-btn" @click="applyLoan()">立即申请</a>
        <!-- <p>{{errorText}}</p> -->
      </form>
    </div>
  </div>
  <div class="loan-type clr">
    <div class="loan-type-left">
      <img src="../../static/images/loan/ad1.jpg"><span>工商贷</span>
    </div>
    <div class="loan-type-right">
      <p class="lh30 fz16">有固定的经营场地或地址，经营合法、有稳定的经营收入的个体工商户，<br>提供相关的审核资料，均可向益田理财申请贷款。</p>
      <table class="loan-type-table" width="100%">
        <tr class="fz16 bold">
          <th height="38" width="200">贷款条件</th><th width="230">额度期限</th><th>所需资料</th>
        </tr>
        <tr>
          <td valign="top">年龄满足22-55岁<br>中小企业主或个体工商<br>良好的过往征信记录<br>公司成立满1年，经营稳定</td>
          <td valign="top">贷款限制：金额50万以下<br>借款期限：1期，2期，3期，<br>6期，9期，12期，18期<br>还款方式：到期一次性还本付息</td>
          <td valign="top">申请人二代身份证<br>申请人银行流水<br>申请人征信用报告<br>资产证明<br>营业执照</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="loan-type clr">
    <div class="loan-type-left">
      <img src="../../static/images/loan/ad2.jpg"><span>工薪贷</span>
    </div>
    <div class="loan-type-right">
      <p class="lh30 fz16">面向工薪阶层，有稳定收入来源，无须抵押，即可为工薪族<br>提供资金周转，手续简单，放款速度快。</p>
      <table class="loan-type-table" width="100%">
        <tr class="fz16 bold">
          <th height="38" width="200">贷款条件</th><th width="230">额度期限</th><th>所需资料</th>
        </tr>
        <tr>
          <td valign="top">年龄满足22-45岁<br>工作稳定<br>良好的过往征信记录</td>
          <td valign="top">贷款限制：金额20万以下<br>借款期限：6期，9期，12期，18期<br>还款方式：到期一次性还本付息</td>
          <td valign="top">申请人二代身份证<br>申请人银行流水<br>申请人征信用报告<br>资产证明材料</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="loan-type clr">
    <div class="loan-type-left">
      <img src="../../static/images/loan/ad3.jpg"><span>房产抵押贷</span>
    </div>
    <div class="loan-type-right">
      <p class="lh30 fz16">借款人以本人名下的房产做抵押，益田理财在审核房产价值<br>及还款能力之后，办理公证抵押之后，以最快的速度完成放款。</p>
      <table class="loan-type-table" width="100%">
        <tr class="fz16 bold">
          <th height="38" width="200">贷款条件</th><th width="230">额度期限</th><th>所需资料</th>
        </tr>
        <tr>
          <td valign="top">年龄满足22-45岁<br>红本在手<br>良好的过往征信记录</td>
          <td valign="top">贷款限制：金额50万以下<br>借款期限：1期，2期，3期，6期，9期，12期，18期<br>还款方式：到期一次性还本付息</td>
          <td valign="top">申请人二代身份证<br>申请人银行流水<br>申请人征信用报告<br>资产证明<br>房产证</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="loan-type clr">
    <div class="loan-type-left">
      <img src="../../static/images/loan/ad4.jpg"><span>车辆抵押贷</span>
    </div>
    <div class="loan-type-right">
      <p class="lh30 fz16">借款人以汽车作为抵押物，不押车，不押证，材料少，轻松贷，最快1天可放款。 </p>
      <table class="loan-type-table" width="100%">
        <tr class="fz16 bold">
          <th height="38" width="200">贷款条件</th><th width="230">额度期限</th><th>所需资料</th>
        </tr>
        <tr>
          <td valign="top">年龄满足22-55岁<br>中小企业主或个体工商良好的过往征信记录<br>公司成立满1年，经营稳定</td>
          <td valign="top">贷款限制：金额50万以下<br>借款期限：1期，2期，3期，6期，9期，12期，18期<br>还款方式：到期一次性还本付息</td>
          <td valign="top">申请人二代身份证<br>申请人银行流水<br>申请人征信用报告</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import selector  from '@/components/base/selector'
export default {
  components: {
    selector
  },
  data () {
    return {
      name:'',
      identification:'',
      phone:'',
      money:'',
      deadline:'',

      options: [
        {
          label: '工商贷',
          value: 0
        },
        {
          label: '工薪贷',
          value: 1
        },
        {
          label: '房产抵押贷',
          value: 2
        },
        {
          label: '车辆抵押贷',
          value: 3
        }
      ]
    }
  },
  computed: {
    // nameErrors :{
    //   get () {
    //     console.log(344444)
    //     return this.checkFlied('name', '请输入姓名/企业名称')
    //   },
    //   set (newValue) {
    //     console.log(newValue, this.nameErrors)
    //     this.nameErrors.errorText = newValue
    //     console.log(this.nameErrors)
    //   }
     
    // },
    nameErrors () {
      return this.checkFlied('name', '请输入姓名/企业名称')
    },
    identificationErrors () {
      return this.checkFlied('identification', '请输入身份证/营业执照号')
    },
    phoneErrors () {
      return this.checkFlied('phone', '请输入联系方式')
    },
    moneyErrors () {
      return this.checkFlied('money', '请输入借款金额')
    },
    deadlineErrors () {
      return this.checkFlied('deadline', '请输入借款期限')
    }
  },
  methods: {
    checkFlied (inputId, msg) {
      let errorText, status = false
      if (this[inputId] === '') {
        status = false
        errorText = msg
      } else if (inputId === "phone") {
        if (!this.isMobileNum(this.phone)) {
          status = false
          errorText = '手机号格式有误，请重新输入！'
        } else {
          status = true
          errorText = ''
        }
      } else {
        status = true
        errorText = ''
      }
      if (!this[inputId+"Flag"]) {
        errorText = ''
        this[inputId+"Flag"] = true
      }
      return {
        errorText,
        status
      }
    },
    isMobileNum (phone) {
      return (new RegExp(/^((13[0-9])|(14[0-7])|(15[^4,\D])|(17[0-8])|(18[0-9]))(\d{8})$/).test(phone));
    },
    checkMoney (obj) {
      this[obj] = this[obj].replace(/[^\d\.]/g, '').replace(/^\.+/, '').replace(/^(\d{1,18}(\.\d{0,2})?).*/, '$1').replace(/^0\d+/, '');
    },
    applyLoan () {

      // var idArr = ["name", 'identification', "phone", "type", "money", "deadline"],
      //     idMsg = ["请输入姓名/企业名称", "请输入身份证/营业执照号", "请输入联系方式", "请输入借款金额", "请输入借款期限"]
      // for (var i = 0; i < idArr.length; i++) {
      //   var result = this.checkFlied (idArr[i], idMsg[i]);
      //   if(!result.status){
      //     console.log(this[idArr[i]+"Errors"])
      //     this[idArr[i]+"Errors"].errorText = result.errorText
      //     console.log(this[idArr[i]+"Errors"])
      //     return false;
      //   } 
      // };
      //if(!this.nameErrors.status || !this.identificationErrors.status || !this.phoneErrors.status || !this.moneyErrors.status || !this.deadlineErrors.status){
      if(!this.nameErrors.status){
        this.nameErrors = '888888888'
        //console.log(!this.nameErrors.status, !this.nameErrors.status, !this.nameErrors.status, !this.nameErrors.status, !this.nameErrors.status)
        return false;
      } else {
        alert("ok")
        // this.$http.post('api/login')
        //   .then((res) => {

        //   }, (error) => {

        //   })
      }
    },
    changeType (data) {
      console.log(data)
    }
  },
}
</script>
