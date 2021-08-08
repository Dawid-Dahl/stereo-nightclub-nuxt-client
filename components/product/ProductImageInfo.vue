<template>
	<div :style="opacityStyle" class="wrapper">
		<h3>{{ `${price} $` }}</h3>
		<p>{{ stringifiedIngredients }}</p>
	</div>
</template>

<script>
export default {
	props: {
		hover: {
			type: Boolean,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		ingredients: {
			type: Array,
			required: true
		}
	},
	computed: {
		stringifiedIngredients: function () {
			return this.ingredients.length
				? this.ingredients.reduce(
						(acc, cur, i, arr) =>
							i !== arr.length - 1
								? acc + cur.title + ", "
								: acc + cur.title,
						""
				  )
				: ""
		},
		opacityStyle: function () {
			return this.hover ? "opacity: 1" : "opacity: 0"
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as *;
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	@include flexCenter(column, flex-end, flex-start);

	position: absolute;
	padding: 0;
	height: 100%;
	z-index: 1;
	opacity: 1;
	transition: opacity 0.2s;
	cursor: pointer;
}

h3,
p {
	color: white;
}

h3 {
	margin: 0;
	font-size: 0.9rem;
	padding: 0 1.1rem;
}

p {
	font-size: 0.7rem;
	margin: 0;
	padding: 0 0.5rem 1.5rem 1.1rem;
}

@media only screen and (max-width: $mobile-width-small) {
	h3 {
		font-size: 1rem;
	}

	p {
		font-size: 0.9rem;
	}
}
</style>
