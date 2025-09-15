<script setup lang="ts">
import TextLink from '@/components/TextLink.vue'
import AuthBase from '@/layouts/AuthLayout.vue'
import { onMounted, Transition } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  document.title = 'Entrar - NextClass'

  if (route.path === '/auth/signin' || route.path === '/auth/signin/') {
    router.replace('/auth/signin/identifier')
  }
})

</script>

<template>
  <AuthBase
    title="Bem vindo de volta!"
    description="Para continuar conectado conosco, faça login com suas informações pessoais."
  >
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    
    <div class="text-center text-sm text-muted-foreground mt-8">
      Não tem uma conta?
      <TextLink
        href="/account/create"
        class="underline underline-offset-4 hover:text-primary"
        :tabindex="6"
      >
        Criar conta
      </TextLink>
    </div>

    <template #login-button>
      <RouterLink
        to="/account/create"
        class="w-full rounded-lg border border-white/50 bg-white px-6 py-3 text-center font-semibold hover:bg-gray-100 sm:w-auto"
      >
        <span
          class="bg-clip-text text-transparent"
          style="
            background-image: linear-gradient(
              90deg,
              var(--primary-gradient),
              var(--secondary-gradient)
            );
          "
        >
          Criar conta
        </span>
      </RouterLink>
    </template>
  </AuthBase>
</template>
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
