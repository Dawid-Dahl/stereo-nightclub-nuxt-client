<template>
	<div class="wrapper">
		<div
			v-click-outside="closeDropdown"
			@mouseenter="hover = true"
			@mouseleave="hover = false"
			class="dropdown"
		>
			<div class="dropbtn">Sort By</div>
			<div :style="hoverStyle" class="dropdown-content">
				<a @click="updateLocalSortingOrder">Created: Latest</a>
				<a @click="updateLocalSortingOrder">Created: Oldest</a>
				<a @click="updateLocalSortingOrder">Price: Highest</a>
				<a @click="updateLocalSortingOrder">Price: Lowest</a>
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
		},
		closeDropdown(e) {
			this.hover = false
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
	right: -10px;
	top: -30px;

	@media only screen and (max-width: $laptop-width-small) {
		right: 5px;
	}

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
	position: absolute;
	right: -7px;
	background-color: white;
	transition: all 0.3s;
	overflow: hidden;
	border-radius: 5px;
	z-index: 2;

	a {
		color: black;
		display: block;
		cursor: pointer;
		text-decoration: none;
		width: 100%;
		text-align: center;
		padding: 0.5rem;

		transition: background-color 0.3s;

		&:hover {
			background-color: var(--text-color-dark);
			color: white;
		}
	}
}
</style>
