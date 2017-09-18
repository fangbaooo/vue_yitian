<template>
  <div class="s_center clr mb30">
    <div class="s_bread">
      <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
      <i class="s_breadarrow">&gt;</i>
      <router-link to="/ylcHome">我要理财</router-link>
      <i class="s_breadarrow">&gt;</i> <span>项目详情</span>
    </div>
    <div class="s_biaodata clr">
		<div class="left s_biaodatal">
			<h1 class="s_biaohead">
				<strong class="s_biaoname">{{biaodi.name}}</strong>
			</h1>
			<ul class="s_biaodata-main">
				<li class="li01">
					<p>
						<strong>{{biaodi.apr}}%</strong>
					</p> 预期年化收益
				</li>
				<li class="li02">
					<p>
						<strong>{{biaodi.period}}</strong>&nbsp;
						<span v-if="biaodi.periodUnit == 0">个月</span>
						<span v-else>天</span>
					</p> 投资期限</li>
				<li class="li03">
					<p>
						<strong>{{biaodi.maxInvestAmount}}</strong>&nbsp;元
					</p> 本期额度</li>
				<li class="li04">
					<p>可投 <strong>{{biaodi.allAmount - biaodi.hasInvestedAmount}}</strong> 元</p>
					<div class="s_biaoprogress" style="padding-top: 0">
						<span class="s_progress left">
							<span class="s_progress-bar" id="loanSchedule" :style="{width:progress+'%'}"></span>
						</span>
						<span class="s_progress-value left">{{progress}}%</span>
					</div>
				</li>
			</ul>
			<ul class="s_biaootherdata clr">
				<li>发布时间：<span>{{biaodi.releaseTime}}</span>
				</li>
				<li>还款方式：<span>{{biaodi.repayment}}</span>
				</li>
				<li>募资截止期：<span>{{biaodi.investExpireTime}}</span>
				</li>
				<li>计息时间：<span>满标后计息</span>
				</li>
			</ul>
		</div>
		<!-- <div class="s_biaosplit"></div> -->
		<!-- 可投标 -->
		<div class="s_biaodatar right">
			<h2 class="s_biaodatarhead">
				<strong>我要理财</strong>起投金额{{_minInvestAmount}}元
			</h2>
			<div style="width:280px">
				<div class="s_biaoinfo mt10">
					<!-- <p>可投金额：￥180,900.00元</p> -->
					<p v-if="$store.state.isLogin">我的余额：<span class="major">{{user.balance}}</span>元 <a href="/account/home/recharge" class="c_link">充值</a></p>
					<p>最大可投：<em class="major" id="canInvestPart">{{ablePart}}</em>份 (可投份数)</p>
					<p>投资份额：<input type="text" value="1" autocomplete="off" class="s_biaocount" style="padding-right:22px; width:78px" v-model="investCount" @keyup="countPart($event)"> <span class="money_fen">份</span> <a href="javascript:void(0)" class="money_all_invest" @click="allInvest">全投了</a></p>
	          		<p>付款金额：<span class="money_yuan">¥</span><input type="text" value="0" disabled="disabled" class="s_biaototal" style="padding-left:18px; margin-left: -8px" v-model="investAmount"></p>
				</div>
			</div>
			<!-- 
			<div class="s_biaomoney">
				<input class="icon minus-icon" type="button" id="divBtn"/>
					<input type="text" class="" id="investAmount" name="investAmount" onchange="changeMoney();" placeholder="请输入100(元)整数倍" onblur="investAmountFormat(this.value)" onkeyup="ndigitInteger(this,8)" autocomplete="off"/>
				<input class="icon add-icon" type="button" id="addBtn"/>
			</div>
			<p class="s_biaomayget">
				预计收益 : <span class="major" id="sumEarning">0.00</span>元
			</p> -->

			<input type="button" value="立即投资" class="s_biaobtn btn" id="buyButton">
			<div class="s_biaoread">
				<label><input type="checkbox" id="xieyi" checked=""><span>我已阅读并同意</span><a href="/front/invest/protocolDetails?id=11&amp;investId=0&amp;isInit=false" target="_blank" title="" class="major">《益理财服务协议》</a>
				</label>
				<div class="s_dealcont">
					<i class="arrow arrow01"></i> <i class="arrow"></i>
					T+1日开始计息是根据投资者的资金占用情况，为了合理统一，借款利息和还款时间都是从借款列表满标的当天开始计算。
				</div>
			</div>
		</div>
		
		
		<!-- 已售罄 -->
		<!-- <div class="s_biaodatar right">
			<h2 class="s_biaodatarhead">
				<strong>募资已完成</strong>每份100.00元
			</h2>
			<div class="s_biaooverp">
				<p>成功募资金额：500,000.00元</p>
				<p>募资完成时间： 2017-07-07 </p>
			</div>
		</div> -->
		
	</div>
	<div class="s_biaomain">
		<ul class="s_biaomenu">
          	<li v-for="(item, index) in tabs" @click="toggle(index, item.view)" :class="{'selected': index == currentTab}">{{item.type}}</li>
        </ul>
		<div class="s_biaocont">
			<component :is="currentView"></component>
		</div>
	</div>
  </div>
</template>
<script>
import {amountFormat} from "@/assets/js/util"
import ylcProductInfo from "./ylcProductInfo"
import ylcRecord from "./ylcRecord"
export default {
	data () {
		return {
			list: {},
			currentTab: 0,
			currentView: ylcProductInfo,
			tabs: [{
				type: "产品介绍",
				view: ylcProductInfo
			}, {
				type: "投资记录",
				view: ylcRecord
			}],
			user: {
				balance: '50,600.00'
			},
			biaodi: {
				name: '益理财YS2017070011',
				apr: '8.00',
				period: '3',
				periodUnit: 0, 
				allAmount: 500000,
				hasInvestedAmount: 200000,
				minInvestAmount: 100,
				maxInvestAmount: 500000,
				everyAmmount: 100,

				releaseTime: '2017-07-07',
				repayment: '到期一次性还本付息',
				investExpireTime: '2017-07-17'
			},
			investCount: 1,
			investAmount: 0
		}
	},
	computed: {
		progress () {
			return amountFormat(this.biaodi.hasInvestedAmount * 100 / this.biaodi.allAmount)
		},
		_minInvestAmount () {
			return amountFormat(this.biaodi.minInvestAmount)
		},
		ablePart () {
			return (this.biaodi.allAmount - this.biaodi.hasInvestedAmount) / this.biaodi.minInvestAmount
		}

	},
	methods: {
		toggle(index, view) {
			this.currentTab = index;
			this.currentView = view;
		},
		countPart(e){
		    let reg = new RegExp('^(\\d\{0,'+10+'\}).*');
		    let target = e.currentTarget;
		    target.value = target.value.replace(/[^\d]/g,'').replace(reg,'$1').replace(/^0\d+/,'');
		    let val = Number(target.value);
	    	this.investAmount = val * this.biaodi.minInvestAmount;
		},
		allInvest () {
			this.investCount = this.ablePart;
			this.investAmount = this.investCount * this.biaodi.minInvestAmount;
		}
	}
}
</script>
