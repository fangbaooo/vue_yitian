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
            <li v-for="item in listData">
              <h6 @click="toggleDes($event)"><span class="fl"><i class="icon"></i>{{item.title}}</span></h6><div v-html="item.des"></div>
             </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "Vue"
import sizzle from "sizzle"
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
            des: "登录后进入【安全中心】，点击【登录密码】，即可修改。"}
        ],
        43: [
          { title: "为什么要进行实名认证？", 
            des: "为确认用户的合法有效身份及保障用户资金安全，用户投资前必须进行实名认证。"}
        ]
      }
    }
  },
  methods: {
    getList (id, title) {
      this.listData = this.list[id]
      this.listTitle = title
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
    toggleDes (event) {
      var nextElement = event.currentTarget.nextSibling;
      var h6 = sizzle("#desUl h6");
      for (var i = 0; i < h6.length; i++) {
        
        if(h6[i] == event.currentTarget){
          if (nextElement.style.display == "block") {
            event.currentTarget.className = ""
            nextElement.style.display = "none"
          } else {
            event.currentTarget.className = "cur"
            nextElement.style.display = "block"
          }
        } else {
          h6[i].className = ""
          h6[i].nextSibling.style.display = "none"
        }
      };
      
    }
  },
  mounted () {
    var id = this.getUrlParam("typeId");
    this.getName(id);
  }
}
</script>
