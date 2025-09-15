<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { RouterLink } from 'vue-router';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <RouterLink to="/" class="absolute top-10 left-10 flex items-center gap-2 text-white z-40">
    <AppLogoIcon class="w-14 h-14 fill-current" />
    <span class="font-bold text-lg">NexClass</span>
    </RouterLink>
    <div class="grid lg:grid-cols-2 min-h-screen">
        <div class="relative flex flex-col items-center justify-center p-10 text-white hidden lg:flex" :style="{
            background: 'linear-gradient(90deg, var(--primary-gradient), var(--secondary-gradient))',
        }">

            <div class="text-center space-y-6 max-w-sm">
                <h1 class="text-3xl font-bold leading-tight">Bem vindo!</h1>
                <p class="text-white/80">para continuar conectado conosco, entre com suas informações pessoais.</p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <slot name="login-button">
                        <RouterLink to="/account/signin"
                            class="px-6 py-3 rounded-lg bg-white font-semibold hover:bg-gray-100 w-full sm:w-auto text-center border border-white/50">
                        <span class="bg-clip-text text-transparent"
                            style="background-image: linear-gradient(90deg, var(--primary-gradient), var(--secondary-gradient));">
                            Entrar
                        </span>
                        </RouterLink>
                    </slot>
                </div>

            </div>
        </div>

        <div class="flex items-center justify-center p-8 lg:p-16">
            <div class="w-full max-w-md space-y-6">
                <div class="text-center space-y-2">
                    <h1 v-if="title" class="text-3xl sm:text-4xl font-[1000] tracking-tight text-primary">{{ title }}
                    </h1>
                    <p v-if="description" class="text-muted-foreground text-sm sm:text-base">{{ description }}</p>
                </div>

                <slot />
            </div>
        </div>
    </div>
</template>
