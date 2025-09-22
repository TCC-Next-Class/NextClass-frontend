<script setup lang="ts">
import AuthLayout from '@/layouts/auth/AuthSplitLayout.vue';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <AuthLayout :title="title" :description="description">
        <slot />
        <template #login-button>
            <slot name="login-button" />
        </template>
    </AuthLayout>
</template>
