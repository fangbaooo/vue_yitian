<template>
	<div class="d_content"style="display:none">
		<div class="d_content_padd">
			<div class="d_content_p"><i class="icon icon_success"></i>恭喜您，投资成功！</div>
		</div>
		<div class="ta_c">
			<input type="button" value="继续投资" class="btn btn_red mr10" @click="goAhead" />查看
			<a href="javascript:;" @click="goToInvestRecord" class="c_red">我的投资记录</a>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		goAhead () {
			location.reload()
		},
		goToInvestRecord () {
			this.$emit('submit')
			setTimeout(() => {
				this.$router.push('/account/myInvest/investRecord')
			},300)
		}
	}
}
</script>
