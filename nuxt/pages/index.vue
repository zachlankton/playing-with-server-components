<script setup>
const time = new Date().toLocaleString();
</script>
<template>
  <div>
    <h1>Home Page</h1>
    <FileComponent :test="time" file="/tmp/nuxtHome.txt" />
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
