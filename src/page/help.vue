<template>
  <div class="s_center clr">
    <div class="s_bread">
      <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
      <i class="s_breadarrow">&gt;</i> <span>帮助中心</span>
    </div>
    <div class="p_abusmain clr">
      <div class="p_ableft">
        <h2><i class="icon"></i>帮助中心</h2>
        <ul class="p_abnav">
          <router-link v-for="item in sidebar" @click.native="getName(item.id)" tag="li" active-class="cur" exact :to="{ path: '/help', query: { typeId: item.id }}" :key="item.id"><a href="javascript:;">{{item.name}}</a></router-link>
        </ul>
      </div>
      <div class="p_abright">
        <h3>{{listTitle}}</h3>
        <div class="p_abwordbox">
          <ul class="p_hplist" id="desUl">
            <li v-for="(item, index) in listData">
              <h6 @click="toggleDes($event, index)" :class="{'cur': showCon === index}"><span class="fl"><i class="icon"></i>{{item.title}}</span></h6>
              <div v-html="item.des" :class="{'block': showCon === index}"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData: [],
      listTitle: "",
      sidebar: [
        {
          name: '登录注册',
          id: '41'
        },
        {
          name: '账户安全',
          id: '42'
        },
        {
          name: '实名认证',
          id: '43'
        },
        {
          name: '银行卡管理',
          id: '44'
        },
        {
          name: '充值',
          id: '45'
        },
        {
          name: '提现',
          id: '46'
        },
        {
          name: '常见问题',
          id: '47'
        },
        {
          name: '代金券',
          id: '49'
        },
      ],
      list: {
        41: [
          { title: "注册时，输入了手机号码，没有收到验证码怎么办？", 
            des: "1)   请确认手机是否安装短信拦截或过滤软件，尝试在软件拦截或过滤信息中查找恢复；<br>2)   请确认手机是否能够正常接收短信（不存在信号不佳、欠费、停机等问题）；<br>3)   短信收发过程中可能存在延迟，请耐心等待，验证码在120秒内有效；<br>4)   您还可以通过客服QQ或拨打客服热线400-0060-206寻求帮助。<br>"},
          { title: "注册成功之后手机号码可以更换吗？", 
            des: "完成实名认证后，您可以修改注册的手机号码，登录后进入【安全中心】根据提示进行修改即可。"},
          { title: "登录时密码提示错误怎么办？", 
            des: "您可以点击【忘记密码】跳转至找回密码页面，通过已绑定的手机号，根据提示操作找回登录密码。"},
          { title: "为什么会登录失败？", 
            des: "以下原因可能导致您登录失败：<br>1) &nbsp; 用户名输入错误；<br>2) &nbsp; 密码输入错误，如忘记密码，您可以点击【忘记密码】根据提示操作；<br>3) &nbsp; 验证码输入错误，如验证码不清晰，可点击重新获取；<br>4) &nbsp; 网络问题，如提示网页有错误，建议您稍后尝试；<br>5）您还可以<span style='line-height:1.5;'>通过联系客服QQ或拨打客服热线400-0060-206寻求帮助。</span>"}
        ],
        42: [
          { title: "益田理财账户的密码有哪些？", 
            des: "1）登录密码：用于登录账户；<br>2）交易密码：用于提现。"},
          { title: "如何修改登录密码？", 
            des: "登录后进入【安全中心】，点击【登录密码】，即可修改。"},
          { title: "如何修改交易密码？", 
            des: "登录后，进入【安全中心】，点击【交易密码】即可修改。"},
          { title: "忘记交易密码怎么办？", 
            des: "登录后，进入【安全中心】，点击【交易密码】，点击【找回交易密码】并按提示进行操作。"}
        ],
        43: [
          { title: "为什么要进行实名认证？", 
            des: "为确认用户的合法有效身份及保障用户资金安全，用户投资前必须进行实名认证。"},
          { title: "如何进行实名认证？", 
            des: "登录并进入【安全中心】，点击【实名认证】，再输入提交相关信息即可。"},
          { title: "认证成功后是否可以更改证件号码？", 
            des: "实名认证成功后不能更改。"},
          { title: "实名认证失败了怎么办？", 
            des: "请您按照以下步骤进行操作：<br>1) &nbsp; 手持身份证正面拍照，请确保照片中身份证上内容清晰可辨、并确保面部全部露出、不被身份证遮挡；<br>2) &nbsp; 上传拍好的照片，提交人工审核（文件标题命名格式：“益田理财实名认证+姓名”）；<br>3) &nbsp; 运营人员收到申请后将进行人工审核，审核完毕后将通知您审核结果。"},
        ],
        44: [
          { title: "忘记银行卡预留手机号码，无法认证怎么办？", 
            des: "您可致电联系银行客服或持银行卡至银行网点查询。"},
          { title: "是否所有的银行卡都可以认证？", 
            des: "目前支持认证的银行卡：<br>1) &nbsp; 中国工商银行、中国建设银行、中国农业银行、招商银行、交通银行、中国银行、光大银行、平安银行、华夏银行、兴业银行、中信银行、中国邮政、民生银行、广发银行、杭州银行、北京银行、浙商银行、上海银行等，详见绑定银行卡页面。<br>2) &nbsp; 认证的银行卡必须是益田理财网站通过了身份认证的用户本人名下的借记卡；<br>3) &nbsp; 借记卡需为活期账户，且账户状态为正常。"},
          { title: "绑定银行卡后，是否可以更换银行卡？", 
            des: "为保障用户资金安全，您仅能绑定一张银行卡用于充值及提现，如需更换绑定银行卡您可以通过以下两种方式：<br>1) &nbsp; 您的账户总金额为0时，可自行登录进入【我的账户】，点击【银行卡】，在右侧进行删除再添加；<br>2) &nbsp; 拨打客服热线400-0060-206，联系客服并通过人工审核方式更换。"}
        ],
        45: [
          { title: "如何给账户充值？", 
            des: "登录进入【我的账户】，点击【充值】，进入充值页面，选择【认证支付】或【网银支付】进行充值。（移动端不支持网银支付）"},
          { title: "充值金额、到账时间和手续费收取规则分别是怎样的？", 
            des: "1)   单笔充值金额不低于1.00元，单笔、单日、单月充值金额上限以充值页面提示信息为准；<br>2) &nbsp; 充值后实时到帐；<br>3) &nbsp; 上线推广期间平台将为所有用户垫付充值、提现手续费（此费用为第三方支付公司收取，非平台收取），优惠截止时间将于益田理财平台官网（www.yitianlicai.com）、官方微信（“益田理财”）另行公告"}
        ],
        46: [
          { title: "申请提现后，多久可以到账？提现金额有上限吗？", 
            des: "预计1个工作日到账（实际到账时间以银行处理完成时间为准）。提现金额无上限，您账上的可用资金均可提取。"},
          { title: "充值后没有投资可以提现吗？", 
            des: "可以。"},
          { title: "提现会有手续费吗？", 
            des: "上线推广期间平台将为所有用户垫付充值、提现手续费（此费用为第三方支付公司收取，非平台收取），优惠截止时间将于益田理财平台官网（www.yitianlicai.com）、官方微信（“益田理财”）另行公告。"}
        ],
        47: [
          { title: "在益田理财进行投资，需满足什么条件？", 
            des: "凡年满18周岁,具有完全民事行为能力的中国公民，均可以在益田理财平台进行注册和投资。"},
          { title: "产品到期后，什么时候能收到资金？", 
            des: "按照产品收益分配方式：到期还本付息/按月付息到期还本，资金将在到期后T+1个工作日内到账，到账后您将收到短信提示。"},
          { title: "投资时间是否有限制？", 
            des: "除益田理财平台服务器维护暂停服务外（将提前通知用户），投资时间没有限制。"}
        ],
        49: [
          { title: "什么是代金券？", 
            des: "代金券是益田理财赠与用户的电子优惠券，在其有效期内，可用于抵扣投资金额，不支持提现。"},
          { title: "代金券使用范围？", 
            des: "每款产品的优惠不同，针对不同产品的投资，可抵扣相应的投资金额。"},
          { title: "如何使用代金券？", 
            des: "代金券可以合并或拆分使用。由于每个产品代金券使用规则不同，为了方便您操作，您只需输入购买产品的份数，系统将自动为您计算出本次投资代金券可抵扣的金额，点击“立即投资”并确认，代金券即使用成功。"}
        ],
      },
      showCon: -1 // 显示对应id的内容
    }
  },
  methods: {
    getList (id, title) {
      this.showCon = -1;
      this.listData = this.list[id];
      this.listTitle = title;
    },
    getUrlParam (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var url = window.location.search.substr(1).match(reg);
      if (url != null) {
        return decodeURI(url[2]);
      }
      return null;
    },
    getName (id) {
      var sidebar = this.sidebar
      for (var i = 0; i < sidebar.length; i++) {
        if (sidebar[i].id === id) {
          this.getList(id, sidebar[i].name)
        }
      };
    },
    toggleDes (event, index) {
      this.showCon = index;
    }
  },
  mounted () {
    var id = this.getUrlParam("typeId");
    this.getName(id);
  }
}
</script>
<style>
.block{ display: block !important}
</style>