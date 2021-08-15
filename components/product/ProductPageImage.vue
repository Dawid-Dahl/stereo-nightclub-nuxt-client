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
	margin: 0 1rem;
	position: relative;
}

img {
	height: 400px;
	max-width: 600px;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--box-shadow-light);
}

@media only screen and (max-width: $mobile-width-large) {
	img {
		width: 100%;
		min-height: 55vh;
	}
}
</style>
