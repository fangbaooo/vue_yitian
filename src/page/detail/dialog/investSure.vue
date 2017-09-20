<template>
	<ul class="s_biaotzlist" style="display: none">
		<li><span class="lileft">项目名称：</span>{{biaodi.name}}</li>
		<li><span class="lileft">预期年化收益：</span>{{biaodi.apr}}%</li>
		<li>
			<span class="lileft">理财期限：</span>{{biaodi.period}}
			<span v-if="biaodi.periodUnit == 0">个月</span>
			<span v-else>天</span>
		</li>
		<li><span class="lileft">投资金额：</span><span class="major">{{biaodi.investAmount}}</span>元</li>
        <li><span class="lileft">&nbsp;</span><input type="button" value="确认投资" class="btn" @click="investSure" />
		</li>
	</ul>
</template>
<script>
export default {
	props: {
		biaodi: {
			type: Object
		}
	},
	data () {
		return {
			list: null,
		}
	},
	methods: {
		investSure () {
			this.$emit('submit')
		}
	},
	mounted () {
		//this.getData();
	}
}
</script>
