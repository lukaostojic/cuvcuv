<template>
  <nav class="navigation p-relative full-width">
		<div
			@click="toggleNavigation()" 
			:class="{ 'active': isNavigationVisible }"
			class="navigation__hamburger d-flex-column justify-center"
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul
			class="navigation__list p-relative full-width full-vh px-lg py-lg"
			:class="{ 'visible': isNavigationVisible }"
		>
			<li class="mb-md"><RouterLink to="/">Home</RouterLink></li>
			<li class="mb-md"><RouterLink to="/about">About</RouterLink></li>
			<li class="mb-md"><RouterLink to="/upcoming-events">Upcoming Events</RouterLink></li>
			<li class="mb-md"><RouterLink to="/articles">Articles</RouterLink></li>
			<li class="mb-md"><RouterLink to="/releases">Releases</RouterLink></li>
			<li class="mb-md"><RouterLink to="/contact">Contacts</RouterLink></li>
		</ul>
	</nav>
	<header class="header p-relative"></header>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'Header',
	setup() {
		const isNavigationVisible = ref(false)
		const route = useRoute()

		const toggleNavigation = () => {
			isNavigationVisible.value = !isNavigationVisible.value
		}

		watch(
			() => route.fullPath,
			() => {
				isNavigationVisible.value = false
			}
		)

		return {
			isNavigationVisible,
			toggleNavigation
		}
	}
})

</script>

<style lang="scss" scoped src="./Header.scss"></style>