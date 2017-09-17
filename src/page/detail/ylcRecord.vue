<template>
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
			<td class="source_all">
				<span class="source_app">iPhone</span>
			</td>
		</tr>
		</tbody>
	</table>
</template>
<script>
export default {
	data () {
		return {
			list: [
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26'
				},
				{
					phone: '135******30',
					amount: '50,000.00',
					time: '2017-07-07 15:31:26'
				}
			]
		}
	},
	mounted () {
		
	}
}
</script>
