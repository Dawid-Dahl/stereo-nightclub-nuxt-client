<template>
	<header>
		<NuxtLink to="/">
			<img
				src="https://storage.googleapis.com/stereo-nightclub-bucket/resurser/logo-club.png"
				alt="logo"
			/>
		</NuxtLink>
		<a
			href="https://stereo-nightclub-graphql.herokuapp.com/admin/drinks/"
			target="_blank"
			class="admin-link"
			>admin</a
		>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as *;

header {
	@include flexCenter(row, center, flex-start);

	background-color: var(--main-color-light);
	height: 55px;
	border-bottom: var(--main-color-border) solid 1px;
	z-index: 10;
	position: relative;
}

a {
	position: absolute;
	margin: 0 auto;
}

img {
	top: 3px;
	height: 75px;
}

.admin-link {
	position: absolute;
	top: 20px;
	letter-spacing: 2px;
	text-decoration: none;
	color: grey;
	right: 10px;
	cursor: pointer;
	font-weight: 100;
	transition: color 0.3s;
}

.admin-link:hover {
	color: white;
}
</style>
