<template>
	<div class="wrapper">
		<img :src="src" alt="product image" />
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	margin: 0;
	position: relative;
}

img {
	height: 100%;
	object-fit: cover;
	object-position: center;
}

@media only screen and (max-width: $mobile-width-large) {
	img {
		width: 100%;
	}
}
</style>
