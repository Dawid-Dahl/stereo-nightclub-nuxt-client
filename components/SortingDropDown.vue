<template>
	<div class="wrapper">
		<div
			@mouseover="hover = true"
			@mouseleave="hover = false"
			class="dropdown"
		>
			<div class="dropbtn">Sort By</div>
			<div :style="hoverStyle" class="dropdown-content">
				<a @click="updateLocalSortingOrder" href="#">Created: Latest</a>
				<a @click="updateLocalSortingOrder" href="#">Created: Oldest</a>
				<a @click="updateLocalSortingOrder" href="#">Price: Lowest</a>
				<a @click="updateLocalSortingOrder" href="#">Price: Highest</a>
			</div>
		</div>
	</div>
</template>

<script>
import {sortingEnum} from "~/utils/enums"
export default {
	data() {
		return {
			hover: false
		}
	},
	props: {
		sortingOrder: {
			type: String,
			validator: sortingOrder =>
				Object.entries(sortingEnum)
					.map(([k, v]) => v)
					.includes(sortingOrder)
		}
	},
	computed: {
		hoverStyle: function () {
			return this.hover ? "display: flex;" : "display: none;"
		}
	},
	methods: {
		updateLocalSortingOrder(e) {
			this.$emit("UPDATE_SORTING_ORDER", e.srcElement.innerHTML)
		}
	}
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as *;
@use "@/assets/scss/abstracts/_variables.scss" as *;

.wrapper {
	@include flexCenter(column);
	position: absolute;
	margin: 0;
	z-index: 1;
	right: 5px;
	top: -30px;

	@media only screen and (max-width: $mobile-width-small) {
		margin: 0 1rem 3rem 1rem;
		right: 0px;
	}
}

.dropbtn {
	display: inline;
	padding: 0.2rem 1rem;
	background-color: var(--main-color-light);
	color: white;
	font-size: var(--font-size-small);
	border-radius: var(--border-radius);
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--main-color-medium);
	}
}

.dropdown-content {
	@include flexCenter(column);
	background-color: white;
	transition: all 0.3s;
	margin: 0.2rem 0;
	border-radius: 5%;
	overflow: hidden;
	z-index: 2;

	a {
		color: black;
		display: block;
		cursor: pointer;
		text-decoration: none;
		width: 100%;
		text-align: center;
		padding: 0.2rem;

		transition: background-color 0.3s;

		&:hover {
			background-color: var(--text-color-dark);
			color: white;
		}
	}
}
</style>
