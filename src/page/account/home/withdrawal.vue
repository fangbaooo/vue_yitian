<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">提现</span>
        <router-link to="/account/home/dealRecord" class="fr"><span class="p-vm">提现记录</span></router-link>
      </h4>
      <table class="p_tixtable">
        <tbody>
        <tr height="68">
          <th>可提金额</th>
          <td><span class="cozhuse">200.00</span><span class="co333">元</span></td>
        </tr>
        <tr height="68">
          <th>您的银行卡</th>
          <td>
            <div class="p-0119dd" style="width:275px;">
              <img src="../../../assets/images/banks/bank_05.png" alt="" class="p-vm">
              <span class="co333 ml20">尾号：8239</span>
            </div>
          </td>
        </tr>
        <tr height="68" style="display:none;">
          <th>省份</th>
          <td>
            <select id="province_code" name="province_code" style="width:300px;padding:5px;border:solid 1px #dbdbdb">
              <option value="440000">440000</option>
            </select><span class="fz14 c_gray">（请选择省份和城市）</span>
          </td>
        </tr>
        <tr height="" class="" id="t_province_code" style="display:none;">
          <th>&nbsp;</th>
          <td><span class="p_errorts" id="s_province_code"></span></td>
        </tr>
        <tr height="68" style="display:none;">
          <th>城市</th>
          <td>
            <select id="city_code" name="city_code" style="width:300px;padding:5px;border:solid 1px #dbdbdb">
              <option value="440300">440300</option>
            </select>
          </td>
        </tr>
        <tr height="" class="" id="t_city_code" style="display:none;">
          <th>&nbsp;</th>
          <td><span class="p_errorts" id="s_city_code"></span></td>
        </tr>
        <tr height="68" style="display:none;">
          <th>支行查询</th>
          <td><input type="text" class="p_zcinput isearchSug" placeholder="支持模糊查询" id="bbname" autocomplete="off" disabled=""><span class="fz14 c_gray">（输入支行查询关键词）</span>
            <!-- <a href="javascript:void(0);" onclick="queryBranch();" style="font-size:14px;color:#0072E3;margin-left:10px">查询</a> --></td>
          </tr>
          <tr height="" class="" id="t_bbname" style="display:none;">
            <th>&nbsp;</th>
            <td><span class="p_errorts" id="s_bbname"></span></td>
          </tr>
          <tr height="68" style="display:none;">
            <th>开户支行</th>
            <td>
              <select id="branchBankName" name="branchBankName" style="width:300px;padding:5px;border:solid 1px #dbdbdb">
                <option value="中国银行股份有限公司深圳科技园支行">中国银行股份有限公司深圳科技园支行</option>
              </select> 
              <!--<input type="text" class="p_zcinput" id="branchBankName" name="branchBankName" autocomplete="off" readonly disabled />-->
            </td>
          </tr>
          <tr height="" class="" id="t_branchBankName" style="display:none;">
            <th>&nbsp;</th>
            <td><span class="p_errorts" id="s_branchBankName"></span></td>
          </tr>

          <tr height="68">
            <th>提现金额</th>
            <td>
              <input type="text" class="p_zcinput" placeholder="提现金额(元)" name="amount" autocomplete="off" v-model="withdrawalMoney" @keyup="checkMoney($event)"v-focus></td>
          </tr>
          <tr height="" class="" id="t_amount" style="display:none;">
            <th>&nbsp;</th>
            <td><span class="p_errorts" id="s_amount"></span></td>
          </tr>
          <tr height="68">
            <th>交易密码</th>
            <td><input style="display:none" type="password"><!--添加隐藏的input 解决chrome自动填充数据的问题 -->
              <input type="password" class="p_zcinput" placeholder="交易密码" name="payPassword" autocomplete="off" maxlength="8" v-model="payPassword" @keyup="checkPayPW($event)" @keyup.enter="withDrawSubmit"></td>
          </tr>
          <tr height="" class="" id="t_payPassword" style="display:none;">
            <th>&nbsp;</th>
            <td><span class="p_errorts" id="s_payPassword"></span></td>
          </tr>
          <tr height="68">
            <th>手续费</th>
            <td>
              <span class="cozhuse" id="serviceFee">0.00</span><span class="co333">元/笔</span>
            </td>
          </tr>
          <tr height="68">
            <th>实际到账</th>
            <td><span class="cozhuse" id="realAmount">0.00</span><span class="co333">元</span></td>
          </tr>
          <tr height="68">
            <th>到账时间</th>
            <td><span class="co333">预计1个工作日到账</span><span class="co999">（实际到账时间以银行处理完成时间为准）</span></td>
          </tr>
        </tbody>
      </table>
      <div class="p-tl"><input @click="withDrawSubmit" class="p_zcbtn btn" value="立即提现" type="button" style="text-align:center"></div>
    </div>
    <toast v-if="isOK" :type="type" :text="toastText"></toast>
  </div>
</template>
<script>
import toast from '@/components/base/toast.vue'
export default {
  components: {
    toast
  },
  data () {
    return {
      withdrawalMoney: '',
      payPassword: '',
      // toast
      isOK: false,
      type: '',
      toastText: ''
    }
  },
  methods: {
    checkMoney(e) {
      let obj = e.currentTarget;
      obj.value = obj.value.replace(/[^\d\.]/g, '').replace(/^\.+/, '').replace(/^(\d{1,18}(\.\d{0,2})?).*/, '$1').replace(/^0\d+/, '');
    },
    checkPayPW(e) {
      let obj = e.currentTarget;
      obj.value=obj.value.replace(/[^A-Za-z0-9]/g,'')
    },
    withDrawSubmit() {
      if (this.withdrawalMoney == '') {
        alert("充输入提现金额");
      } else if(this.payPassword == ''){
        alert("充输入交易密码");
      } else {
        this.showToast('warning', '您的提现申请已提交', function () {
          location.reload()
        })
      }
    },
    showToast(type, text, fn) {
      this.type = type
      this.toastText = text
      this.isOK = true
      setTimeout(()=>{
        this.isOK = false
        fn && fn()
      }, 4000)
    }
  }
}
</script>
