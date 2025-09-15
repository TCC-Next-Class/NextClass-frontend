<script setup lang="ts">
import InputError from '@/components/InputError.vue'
import TextLink from '@/components/TextLink.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthBase from '@/layouts/AuthLayoutSplit.vue'
import { IdCard, LoaderCircle, Lock, Mail, User } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { reactive } from 'vue'
import { useUsers } from '@/stores/users'
import { useRouter } from "vue-router";


const router = useRouter();
const users = useUsers()

const formatCpf = (event: Event) => {
  let value = (event.target as HTMLInputElement).value.replace(/\D/g, '')
  value = value.slice(0, 11)
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  form.data.cpf = value
}

const form = reactive({
  data: {
    name: '',
    cpf: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  errors: {
    name: '',
    cpf: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  processing: false,
})

async function submitForm() {
  form.processing = true

  try {
    await users.create(
      form.data.name,
      form.data.cpf,
      form.data.email,
      form.data.password,
      form.data.password_confirmation,
      router
    )
  } catch (error: any) {
    if (error?.response?.data?.errors) {
      const serverErrors = error.response.data.errors

      for (const errors in serverErrors) {
        form.errors[errors as keyof typeof form.errors] = serverErrors[errors][0]
      }
    } else {
      console.error('Erro inesperado:', error)
    }
  } finally {
    form.processing = false
  }
}

onMounted(() => {
  document.title = 'Criar conta - NextClass'
})
</script>

<template>
  <AuthBase
    title="Crie uma conta"
    description="Insira suas informações pessoais para criar a conta."
  >
    <form @submit.prevent="submitForm" class="flex flex-col gap-6">
      <div class="grid gap-7">
        <div class="relative">
          <User class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="name"
            type="text"
            required
            autofocus
            tabindex="1"
            autocomplete="name"
            v-model="form.data.name"
            placeholder=" "
            :class="[
              form.errors.name
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
              'peer bg-input/30 pl-10',
            ]"
          />
          <label
            for="name"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Nome completo</span>
          </label>
          <InputError class="absolute" :message="form.errors.name" />
        </div>

        <div class="relative">
          <IdCard class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="cpf"
            type="text"
            required
            tabindex="2"
            autocomplete="off"
            v-model="form.data.cpf"
            @input="formatCpf"
            maxlength="14"
            placeholder="___.___.___-__"
            :class="[
              form.errors.cpf
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
              'peer bg-input/30 pl-10',
            ]"
          />
          <label
            for="cpf"
            class="absolute left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all top-0 text-xs text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">CPF</span>
          </label>
          <InputError class="absolute" :message="form.errors.cpf" />
        </div>

        <div class="relative">
          <Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            required
            tabindex="3"
            autocomplete="email"
            v-model="form.data.email"
            placeholder=" "
            :class="[
              form.errors.email
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
              'peer bg-input/30 pl-10',
            ]"
          />
          <label
            for="email"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Email</span>
          </label>
          <InputError class="absolute" :message="form.errors.email" />
        </div>

        <div class="relative">
          <Lock class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            required
            tabindex="4"
            autocomplete="new-password"
            v-model="form.data.password"
            placeholder=" "
            :class="[
              form.errors.password
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
              'peer bg-input/30 pl-10',
            ]"
          />
          <label
            for="password"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Senha</span>
          </label>
          <InputError class="absolute" :message="form.errors.password" />
        </div>

        <div class="relative">
          <Lock class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password_confirmation"
            type="password"
            required
            tabindex="5"
            autocomplete="new-password"
            v-model="form.data.password_confirmation"
            placeholder=" "
            :class="[
              form.errors.password_confirmation
                ? 'border border-red-500 focus:border-primary'
                : 'border border-input focus:border-primary',
              'peer bg-input/30 pl-10',
            ]"
          />
          <label
            for="password_confirmation"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Confirmar Senha</span>
          </label>
          <InputError class="absolute" :message="form.errors.password_confirmation" />
        </div>

        <Button
          type="submit"
          class="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 hover:bg-primary/80"
          tabindex="6"
          :disabled="form.processing"
        >
          <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
          <span>Cadastrar</span>
        </Button>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Já tem uma conta?
        <TextLink
          href="/auth/signin"
          class="underline underline-offset-4 hover:text-primary"
          :tabindex="7"
        >
          Entrar
        </TextLink>
      </div>
    </form>
    <template #login-button>
      <RouterLink
        to="/auth/signin"
        class="w-full rounded-lg border border-white/50 bg-white px-6 py-3 text-center font-semibold hover:bg-gray-100 sm:w-auto"
      >
        <span
          class="bg-clip-text text-transparent select-none"
          style="
            background-image: linear-gradient(
              90deg,
              var(--primary-gradient),
              var(--secondary-gradient)
            );
          "
        >
          Entrar
        </span>
      </RouterLink>
    </template>
  </AuthBase>
</template>
