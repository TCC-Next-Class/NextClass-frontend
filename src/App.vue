<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useSession } from './stores/session';
import { useAccountLoading } from '@/composables/useGlobal';

const session = useSession();
const { start, stop } = useAccountLoading();

const { loading } = session.check(() => stop());
start();
</script>

<template>
  <router-view />
</template>
