<script setup lang="ts">
import InputError from '@/components/InputError.vue'
import TextLink from '@/components/TextLink.vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthBase from '@/layouts/AuthLayout.vue'
import { LoaderCircle, Lock, Mail } from 'lucide-vue-next'
import { ref, reactive, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const form = reactive({
  email: '',
  password: '',
  password_confirmation: '',
  remember: false,
})

const errors = reactive({
  email: '',
  password: '',
  password_confirmation: '',
})

const processing = ref(false)

async function submitForm() {}

onMounted(() => {
  document.title = 'Entrar - NextClass'
})
</script>

<template>
  <AuthBase
    title="Bem vindo de volta!"
    description="Para continuar conectado conosco, faça login com suas informações pessoais."
  >
    <form @submit.prevent="submitForm" class="flex flex-col gap-6">
      <div class="grid gap-6">
        <div class="relative">
          <Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            v-model="form.email"
            required
            autofocus
            :tabindex="1"
            autocomplete="email"
            placeholder=" "
            class="peer bg-input/30 pl-10"
            :class="[
              errors.email
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
            ]"
          />
          <label
            for="email"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Email</span>
          </label>
          <InputError class="absolute" :message="errors.email" />
        </div>

        <div class="relative">
          <Lock class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            v-model="form.password"
            required
            :tabindex="2"
            autocomplete="current-password"
            placeholder=" "
            class="peer bg-input/30 pl-10"
            :class="[
              errors.password
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
            ]"
          />
          <label
            for="password"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Senha</span>
          </label>
          <InputError class="absolute" :message="errors.password" />
        </div>

        <div class="flex items-center justify-between text-sm">
          <Label for="remember" class="flex items-center space-x-3 hover:cursor-pointer">
            <Checkbox
              id="remember"
              v-model="form.remember"
              :tabindex="3"
              class="hover:cursor-pointer"
            />
            <span>Lembre de mim</span>
          </Label>
          <TextLink
            href="/password/request"
            class="underline underline-offset-4 hover:text-primary"
            :tabindex="5"
          >
            Esqueceu a senha?
          </TextLink>
        </div>

        <Button
          type="submit"
          class="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 hover:bg-primary/80"
          :tabindex="4"
          :disabled="processing"
        >
          <LoaderCircle v-if="processing" class="h-4 w-4 animate-spin" />
          <span>Entrar</span>
        </Button>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Não tem uma conta?
        <TextLink
          href="/account/create"
          class="underline underline-offset-4 hover:text-primary"
          :tabindex="6"
        >
          Criar conta
        </TextLink>
      </div>
    </form>

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
