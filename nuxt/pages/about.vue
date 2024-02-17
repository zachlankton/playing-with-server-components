<script setup>
const time = new Date().toLocaleString();
</script>
<template>
  <div>
    <h1>About Page</h1>
    <FileComponent :test="time" file="/tmp/nuxtAbout.txt" />
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
