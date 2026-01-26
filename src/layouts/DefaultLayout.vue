<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<style lang="scss" scoped src="./DefaultLayout.scss"></style>
