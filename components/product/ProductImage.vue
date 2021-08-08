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
			required: true,
			validator: ingredients =>
				ingredients.every(ingredient => typeof ingredient === "string")
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
.wrapper {
	position: relative;
}

img {
	width: 100%;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--box-shadow-light);
	cursor: pointer;
	transition: transform 0.2s;
}

img:hover {
	transform: scale(1.01) rotate(1deg);
}
</style>
