<template>
	<div class="outer-wrapper">
		<div class="wrapper">
			<h1>{{ title }}</h1>
			<h2>{{ `${price} $` }}</h2>
			<p>{{ description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: Number
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		price: {
			type: Number
		},
		ingredients: {
			type: Array,
			validator: ingredients =>
				ingredients.every(ingredient => typeof ingredient === "string")
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as m;
@use "@/assets/scss/abstracts/_variables.scss" as *;

.outer-wrapper {
	@include m.flexCenter(column);
	width: 100%;
	height: 100%;
	padding: 0 1rem 0 1rem;

	@media only screen and (min-width: $laptop-width-large) {
		@include m.flexCenter(column, center, flex-start);
		padding: 0 7rem 0 3rem;
	}
}

.wrapper {
	@include m.flexCenter(column, center, flex-start);

	@media only screen and (max-width: $mobile-width-large) {
		@include m.flexCenter(column);
		margin: 1.5rem;
	}
}

h1,
h2,
p {
	color: white;
	margin: 0;
	padding: 0;
}

h1 {
	font-size: 3rem;

	@media only screen and (max-width: $laptop-width-small) {
		font-size: 2.5rem;
	}
}

p {
	margin: 1rem 0 0 0;
	color: var(--text-color-dark);
}
</style>
