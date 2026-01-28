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
	<header class="header d-flex justify-center align-center full-width full-height p-relative">
		<div :class="{ 'show-content': isContentLoaded }" class="header__content d-flex-column justify-center align-center px-md py-md">
			<div :class="{ 'draw-line': isLineVisible }" class="top-section d-flex-column justify-space-between align-center">
				<h1>Ana Ostojic</h1>
				<p class="pb-sm">Contemporary pianist & performer</p>
				<div class="contact-me-button py-lg mt-md">
					<RouterLink class="contact-me-button__inner py-sm px-lg" to="/contact">Book Me</RouterLink>
				</div>
			</div>
			<div :class="{ 'upcoming-event-visible': isUpcomingEventVisible }" class="upcoming-event mb-xl">
				<HomeUpcomingEvent></HomeUpcomingEvent>
			</div>
		</div>
		<div class="header__image"></div>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import  HomeUpcomingEvent from '../home-upcoming-event/HomeUpcomingEvent.vue'

export default defineComponent({
	name: 'Header',
	components: {HomeUpcomingEvent},
	setup() {
		const isNavigationVisible = ref(false)
		const isContentLoaded = ref(false)
		const isLineVisible = ref(false)
		const isUpcomingEventVisible = ref(false)
		const route = useRoute()

		onMounted(() => {
			setTimeout(() => {
				isContentLoaded.value = true
			}, 250);

			setTimeout(() => {
				isLineVisible.value = true
			}, 500);

			setTimeout(() => {
				isUpcomingEventVisible.value = true
			}, 750);
		})

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
			isContentLoaded,
			isLineVisible,
			isUpcomingEventVisible,
			toggleNavigation
		}
	}
})

</script>

<style lang="scss" scoped src="./Header.scss"></style>