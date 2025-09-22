<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

defineOptions({
    inheritAttrs: false,
});

interface Props {
    className?: HTMLAttributes['class'];
}

defineProps<Props>();
</script>

<template>
    <img :class="[className, 'rounded-full', 'select-none']" v-bind="$attrs" src="@assets/media/logo.svg" alt="Logo">
</template>
