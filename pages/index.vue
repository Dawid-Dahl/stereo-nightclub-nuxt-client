<template>
	<div class="wrapper">
		<WelcomeSubHeader />
		<ProductGrid />
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			inputText: ""
		}
	}
}
</script>

<style lang="scss" scoped>
ul {
	text-decoration: none;
}
</style>
