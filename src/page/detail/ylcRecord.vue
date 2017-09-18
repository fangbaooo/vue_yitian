<template>
	<div class="s_biaorecord">
		<table width="100%">
			<tbody>
			<tr height="40">
				<th width="10%">序号</th>
				<th width="27%">投资人（9位）</th>
				<th width="20%">投资金额（500,000.00元）</th>
				<th width="27%">投资时间</th>
				<th width="16%">投资来源</th>
			</tr>
			<tr height="50" v-for="(item, index) in list">
				<td align="center">{{index+1}}</td>
				<td>{{item.phone}}</td>
				<td>{{item.amount}}元</td>
				<td>{{item.time}}</td>
				<td class="source_all" v-if="item.type=='app' || item.type=='weixin'">
					<span @mouseover="showErcode($event, 'app')" @mouseout="hideErcode($event, 'app')" v-if="item.type=='app'">iPhone</span>
					<span @mouseover="showErcode($event, 'weixin')" @mouseout="hideErcode($event, 'weixin')" v-if="item.type=='weixin'">微网站</span>
				</td>
				<td v-else>网站</td>
			</tr>
			</tbody>
		</table>
		<div :style="styleObject" v-if="s_app"><img src="../../assets/images/erweima/source_app.png" alt=""></div>
		<div :style="styleObject" v-if="s_weixin"><img src="../../assets/images/erweima/source_mobile.png" alt=""></div>
	</div>
</template>
<script>
import {getPosition} from "@/assets/js/util"
export default {
	data () {
		return {
			list: [
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'app'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'weixin'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'weixin'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'app'
				}
				,
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'web'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'app'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26',
					type: 'web'
				}
			],
			s_app: false,
			s_weixin: false,
			styleObject: {
				position: 'absolute',
				margin: '-90px 0 0 -176px',
				left: '0',
				top: '0',
			}
		}
	},
	methods: {
		showErcode (e, type) {
			var target = e.currentTarget;
			var left = getPosition(target).left;
			var top = getPosition(target).top;
			this["s_"+ type] = true,
			this.styleObject.left = left + 'px';
			this.styleObject.top = top + 'px';
		},
		hideErcode (e, type) {
			this["s_"+ type] = false
		}
	},
	mounted () {
		
	}
}
</script>
