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
				<strong class="s_biaoname">益理财YS2017070011</strong>
			</h1>
			<ul class="s_biaodata-main">
				<li class="li01">
					<p>
						<strong>7.00%</strong>
					</p> 预期年化收益
				</li>
				<li class="li02">
					<p>
						<strong>1</strong>&nbsp;个月
					</p> 投资期限</li>
				<li class="li03">
					<p>
						<strong>500,000.00</strong>&nbsp;元
					</p> 本期额度</li>
				<li class="li04">
					<p>可投 <strong>0.00</strong> 元</p>
					<div class="s_biaoprogress" style="padding-top: 0">
						<span class="s_progress left">
							<span class="s_progress-bar" id="loanSchedule" style="width:100.0%"></span>
						</span>
						<span class="s_progress-value left">100.0%</span>
					</div>
				</li>
			</ul>
			<ul class="s_biaootherdata clr">
				<li>发布时间：<span>2017-07-07</span>
				</li>
				<li>还款方式：<span>到期一次性还本付息</span>
				</li>
				<li>募资截止期：<span>2017-07-17</span>
				</li>
				<li>计息时间：<span>满标后计息</span>
				</li>
			</ul>
		</div>
		<!-- <div class="s_biaosplit"></div> -->
		<!-- 可投标 -->
		
		
		
		<!-- 已售罄 -->
		<div class="s_biaodatar right">
			<h2 class="s_biaodatarhead">
				<strong>募资已完成</strong>每份100.00元
			</h2>
			<div class="s_biaooverp">
				<p>成功募资金额：500,000.00元</p>
				<p>募资完成时间： 2017-07-07 </p>
			</div>
		</div>
		
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
import ylcProductInfo from "./ylcProductInfo"
import ylcRecord from "./ylcRecord"
var dataList = {
	id: 11,
	type: '官方公告',
	title: '关于益田理财最低提现金额调整公告',
	content: '<p class="MsoNormal">\
					<span>尊敬的用户：</span>\
				</p>\
				<p class="MsoNormal" style="text-indent:21pt;">\
					<span style="font-family:微软雅黑;font-size:10.5pt;"><span style="color:#000000;font-family:Microsoft YaHei;font-size:14px;">经公司研究决定，将于</span></span>\
					<span style="color:#000000;font-family:Microsoft YaHei;font-size:14px;">5月17日起针对平台最低提现金额进行调整，由目前的1元调整至100元，给您带来不便敬请谅解，同时感谢各位长久以来的支持！</span>\
				</p>\
				<p class="MsoNormal" style="text-indent:21pt;">\
					<span style="color:#000000;font-family:Microsoft YaHei;font-size:14px;">特此通知。</span> \
				</p>\
				<p align="right" class="MsoNormal" style="text-align:right;text-indent:21pt;">\
					<span style="color:#000000;font-family:Microsoft YaHei;font-size:14px;">益田理财运营中心</span> \
				</p>\
				<p align="right" class="MsoNormal" style="text-align:right;text-indent:21pt;">\
					<span style="color:#000000;font-family:Microsoft YaHei;font-size:14px;">2017年5月16日</span>\
				</p>',
	prevConLink: '/newsDetail/12',
	prevConText: '关于IOS系统充值恢复的通知',
	nextConLink: '/newsDetail/13',
	nextConText: '',
}
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
			}]
		}
	},
	methods: {
		toggle(index, view) {
			this.currentTab = index;
			this.currentView = view;
		}
	}
}
</script>
