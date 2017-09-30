<template>
	<div class="s_center mb40 clr">
		<!-- bread -->
    <div class="s_bread">
        <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
        <i class="s_breadarrow">&gt;</i>
        <router-link to="/aboutUs"><i class="icon"></i>关于我们</router-link>
        <i class="s_breadarrow">&gt;</i>
        <span>{{title}}</span>
    </div>
		<div class="p_wenzhmain clr">
			<h4>{{list.title}}</h4>
			<div class="p_wzhword">
				<div v-html="list.content"></div>
			</div>
			<div class="xf_cfzx_view_bottom_paga">
				<div class="xf_cfzx_view_bottom_paga_l">
					<router-link :to="list.prevConLink" v-if="list.prevConText !==''">上一篇：{{list.prevConText}}</router-link>
				</div>
				<div class="xf_cfzx_view_bottom_paga_r">
					<router-link :to="list.nextConLink" v-if="list.nextConText !==''">下一篇：{{list.nextConText}}</router-link>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
import {getUrlParam} from "@/utils/index"
var dataList = {
	id: 11,
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
			title: '',
			type: {
				news: '行业资讯',
				dynamic: '平台动态',
				notice: '官方公告',
			}
		}
	},
	mounted () {
		this.getData()
		this.getType()
		//this.list = dataList
	},
	methods: {
		getType () {
			let type = this.$route.query.type// getUrlParam("type")
			console.log(type)
			this.title = this.type[type]
		},
		getData() {
			this.$http({
				url: '/newsDetail',
				method: 'get',
			}).then(res => {
				this.list = res.data
			})
		},
	}
}
</script>
