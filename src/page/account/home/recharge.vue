<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">充值</span>
        <a href="/account/home/dealRecord" class="fr"><span class="p-vm">充值记录</span></a>
      </h4>
      <!-- <ul class="p_czxxkul tab-menu clr">
        <li onclick="showRzDiv();" id="rzli">认证支付</li>
        <li id="wyli">网银支付</li>
      </ul> -->
      <dl class="p_czitem mt30 clr">
        <dt>账户余额</dt>
        <dd class="lh40 fz16"><span class="major">200.00</span> 元</dd>
      </dl>
      <dl class="p_czitem mt30 clr">
        <dt>充值金额</dt>
        <dd>
          <input type="text" class="p_czyhkinp min" name="" placeholder="" autocomplete="off" v-model="rechargeMoney" @keyup="checkMoney($event)">
        </dd>
      </dl>
      <dl class="p_czitem mt30 clr">
        <dt>支付方式</dt>
        <dd class="tab-menu pay_type fz16">
          <div @click="toggle('isPayRZ', $event)" :class="{'selected': isPayRZ === true}"><span>认证支付</span><i class="icon icon_ok"></i></div>
          <div @click="toggle('', $event)" :class="{'selected': isPayRZ === false}"><span>网银支付</span><i class="icon icon_ok"></i></div>
        </dd>
      </dl>
      <!-- 认证支付区域 -->
      <div id="rzDiv" v-show="isPayRZ">
        <dl class="p_czitem mt30 clr">
          <dt>我的银行卡<input type="hidden" id="card_no" name="card_no" value="6217852000010988239"></dt>
          <dd>
            <div class="p_bankcard fl">
              <img src="../../../assets/images/banks/bank_05.png" alt="" width="142" class="p-vm">
              <span class="co333 ml20">尾号：8239</span>
            </div>
            <p class="p_czxtips ml20 fl">限额：50000元/笔、300000元/日<!-- 、单月2000000元 --></p>
          </dd>
        </dl>
        <!-- <dl class="p_czitem mt30 clr">
          <dt>短信验证</dt>
          <dd>
            <div class="p_czincon">
              <input type="text" id="smsCode" name="smsCode" maxlength="4" onkeydown="Util.enter(event, function(){recharge(1)})" />
              <a href="javascript:void(0);" id="sendSmsCode" onclick="sendCode();">发送验证码</a>
              <span class="p_zcerror" id="s_code"></span>
            </div>
          </dd>
        </dl> -->
        <dl class="p_czitem mt40 clr">
          <dt>&nbsp;</dt>
          <dd>
            <div id="recharge1_submit">
              <input type="button" class="btn p_cznowbtn" id="rechargeRZ" value="立即充值" @click="recharge(isPayRZ)">
            </div>
          </dd>
        </dl>
      </div>
      
      <div id="wyDiv"v-show="!isPayRZ">
        <dl class="p_czitem mt20 clr">
          <dt>选择银行</dt>
          <dd>
            <ul class="p_czbanklist clr">
                <li onclick="selectBank(0)" class="cur" id="bank_0"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_01.png" alt="工商银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(1)" id="bank_1"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_03.png" alt="建设银行" height="100%"><i class="icon"></i></div></li>
                
                <li onclick="selectBank(3)" id="bank_3"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_02.png" alt="招商银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(4)" id="bank_4"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_11.png" alt="交通银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(5)" id="bank_5"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_05.png" alt="中国银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(6)" id="bank_6"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_10.png" alt="光大银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(7)" id="bank_7"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_12.png" alt="民生银行" height="100%"><i class="icon"></i></div></li>
                
                <li onclick="selectBank(9)" id="bank_9"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_13.png" alt="中信银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(10)" id="bank_10"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_14.png" alt="广发银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(11)" id="bank_11"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_06.png" alt="上海浦东发展银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(12)" id="bank_12"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_15.png" alt="平安银行" height="100%"><i class="icon"></i></div></li>
                <!-- <li onclick="selectBank(13)" id="bank_13"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_20.png" alt="华夏银行" height="100%" /><i class="icon"></i></div></li> -->
                <li onclick="selectBank(14)" id="bank_14"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_24.png" alt="宁波银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(15)" id="bank_15"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_21.png" alt="BEA东亚银行" height="100%"><i class="icon"></i></div></li>
                
                <li onclick="selectBank(17)" id="bank_17"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_16.png" alt="邮政银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(18)" id="bank_18"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_23.png" alt="南京银行" height="100%"><i class="icon"></i></div></li>
                <!--li onclick="selectBank(19)" id="bank_19"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_18.png" alt="上海农商银行" height="100%" /><i class="icon"></i></div></li> -->
                <li onclick="selectBank(20)" id="bank_20"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_25.png" alt="渤海银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(21)" id="bank_21"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_09.png" alt="北京银行" height="100%"><i class="icon"></i></div></li>
                <!-- li onclick="selectBank(22)" id="bank_22"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_31.png" alt="鄂尔多斯银行" height="100%" /><i class="icon"></i></div></li> -->
                <!-- <li onclick="selectBank(23)" id="bank_23"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_31.png" alt="成都银行" height="100%" /><i class="icon"></i></div></li> -->
                <li onclick="selectBank(2)" id="bank_2"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_04.png" alt="农业银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(8)" id="bank_8"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_08.png" alt="兴业银行" height="100%"><i class="icon"></i></div></li> 
                <li onclick="selectBank(16)" id="bank_16"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_19.png" alt="上海银行" height="100%"><i class="icon"></i></div></li>
                <li onclick="selectBank(23)" id="bank_23"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_32.png" alt="杭州银行" height="100%"><i class="icon"></i></div></li>
              <li onclick="selectBank(24)" id="bank_24"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_33.png" alt="浙商银行" height="100%"><i class="icon"></i></div></li>
              <!--<li onClick="selectBank(25)" id="bank_25"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_34.png" alt="深圳发展银行" height="100%" /><i class="icon"></i></div></li>-->
              <li onclick="selectBank(26)" id="bank_26"><div class="p_czimgbox"><img src="../../../assets/images/banks/bank_35.png" alt="微商银行" height="100%"><i class="icon"></i></div></li>
            </ul>
          </dd>
        </dl>
        <!-- <dl class="p_czitem mt30 clr">
          <dt>充值金额</dt>
          <dd>
            <input type="text" class="p_czyhkinp min" id="moneyRecharge" name="moneyRecharge" placeholder="请输入充值金额" autocomplete="off" onkeyup="checkMoney(this)" onkeydown="Util.enter(event, function(){recharge(2)})" />
          </dd>
        </dl> -->
        <dl class="p_czitem mt40 clr">
          <dt>&nbsp;</dt>
          <dd>
            <div id="recharge2_submit">
              <!-- <a href="javascript:recharge(2)" class="p_cznowbtn btn" id="rechargeWY">立即充值</a> -->
              <input type="button" class="btn p_cznowbtn" id="rechargeWY" value="立即充值" @click="recharge(isPayRZ)">
            </div>
          </dd>
        </dl>
      </div>
      
</form>

      <div class="c_red my_backcard_tips mt60">
            <p>温馨提示：</p>
            <p>1) 快捷支付为益田理财采用连连银通电子支付有限公司的便捷账户充值产品，不需网银U-KEY，一键充值；</p>
            <p>2) 禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用；</p>
            <p>3) 有问题请联系客服：400-0060-206。</p>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isPayRZ: true,      // 是否为认证支付
      rechargeMoney: ''
    }
  },
  mounted () {
  },
  methods: {
    checkMoney(e) {
      let obj = e.currentTarget
      obj.value = obj.value.replace(/[^\d\.]/g, '').replace(/^\.+/, '').replace(/^(\d{1,18}(\.\d{0,2})?).*/, '$1').replace(/^0\d+/, '');
    },
    toggle(str) {
      this.isPayRZ = str === "isPayRZ" ? true : false;
    },
    recharge(bool) {
      if (this.rechargeMoney == '') {
        alert("充输入充值金额")
      } else {
        this.$http.post()
      }
    }
  }
}
</script>
