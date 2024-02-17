<script setup>
import * as fs from "fs";

const props = defineProps({
  test: String,
  file: String,
});

const txt = fs.readFileSync(props.file, "utf-8");
console.log("File read", txt);
</script>

<template>
  <p>{{ txt }}</p>
</template>
