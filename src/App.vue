<template>
  <nav>
    <template v-for="(route, index) in routes" :key="route.path">
      <router-link :to="route.path">{{ route.name }}</router-link>
      <span v-if="index < routes.length - 1"> | </span>
    </template>
  </nav>
  <router-view />
</template>

<script setup>
import { routes } from './router' // Import the routes array

// No need for HelloWorld import if we are using router-view
</script>

<style scoped>
/* Add your styles here */
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
