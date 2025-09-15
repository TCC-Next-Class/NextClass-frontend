<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RouterLink } from 'vue-router';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10" :style="{
        background: 'linear-gradient(90deg, var(--secondary-gradient), var(--primary-gradient))',
    }">
        <div class="flex w-full max-w-md flex-col gap-6">
            <RouterLink to="/" class="flex items-center gap-2 self-center font-medium">
            <div class="flex size-14 items-center justify-center">
                <AppLogoIcon class="size-14 fill-current text-black dark:text-white select-none" />
            </div>
            </RouterLink>

            <div class="flex flex-col">
                <Card class="rounded-xl">
                    <CardHeader class="px-10 pt-8 pb-0 text-center">
                        <CardTitle class="text-xl sm:text-2xl font-[1000] tracking-tight text-primary">{{ title }}</CardTitle>
                        <CardDescription>
                            {{ description }}
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="px-10 py-8">
                        <slot />
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
