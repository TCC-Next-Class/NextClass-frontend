<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useSession } from './stores/session';
import { onMounted } from 'vue';

const session = useSession();
onMounted(() => {
  session.check();
});

</script>

<template>
  <router-view />
</template>

<style scoped>
</style>