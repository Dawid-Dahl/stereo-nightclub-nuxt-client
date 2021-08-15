<template>
	<div @mouseover="hover = true" @mouseleave="hover = false" class="wrapper">
		<NuxtLink :to="dynamicUrl">
			<ProductImageInfo
				:hover="hover"
				:price="price"
				:ingredients="ingredients"
			/>
			<img :src="src" alt="product image" />
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true
		},
		id: {
			type: Number,
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
	data() {
		return {
			hover: false
		}
	},
	computed: {
		dynamicUrl: function () {
			return `product/${this.id}`
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	position: relative;
	height: 100%;
	transition: transform 0.2s;
	width: 100%;

	a {
		height: 100%;
		width: 100%;
	}
}

.wrapper:hover {
	transform: scale(1.01) rotate(1deg);
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--box-shadow-light);
	cursor: pointer;

	@media only screen and (max-width: $tablet-width-small) {
		height: 400px;
	}
}
</style>
