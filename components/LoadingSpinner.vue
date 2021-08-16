<template>
	<div class="wrapper">
		<img :src="spinner.imageLink" alt="loading spinner" />
	</div>
</template>

<script>
import {loadingSpinner} from "~/content/icons"

export default {
	data() {
		return {
			spinner: loadingSpinner ? loadingSpinner : {name: "", imageLink: ""}
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	margin: 0;
}
</style>
