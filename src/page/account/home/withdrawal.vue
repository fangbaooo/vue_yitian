<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">提现</span>
        <a href="/account/home/dealRecord" class="fr"><span class="p-vm">提现记录</span></a>
      </h4>
      <form action="/front/account/submitWithdrawal" method="post" accept-charset="utf-8" enctype="application/x-www-form-urlencoded" id="mountSubmit"><input type="hidden" name="authenticityToken" value="357e018f7254ddd5e4526618e41e98ac4c1f62c7">
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
                <img src="/public/images/banks/bank_05.png" alt="" class="p-vm">
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
                <input type="text" class="p_zcinput" placeholder="提现金额(元)" id="amount" name="amount" autocomplete="off" onkeyup="checkMoney(this);"></td>
            </tr>
            <tr height="" class="" id="t_amount" style="display:none;">
              <th>&nbsp;</th>
              <td><span class="p_errorts" id="s_amount"></span></td>
            </tr>
            <tr height="68">
              <th>交易密码</th>
              <td><input style="display:none" type="password"><!--添加隐藏的input 解决chrome自动填充数据的问题 -->
                <input type="password" class="p_zcinput" placeholder="交易密码" id="payPassword" name="payPassword" onkeyup="this.value=this.value.replace(/[^A-Za-z0-9]/g,'')" autocomplete="off" maxlength="8"></td>
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
        <div class="p-tl"><input onclick="withDrawSubmits();" class="p_zcbtn btn" id="tixianBtn" value="立即提现" type="button" style="text-align:center"></div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      pageNo: 10,
      dealRecord: {}
    }
  },
  mounted () {
  },
  methods: {
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      this.dealRecord = dataList
      this.pageNo = dataList.pageNo
    }
  }
}
</script>
