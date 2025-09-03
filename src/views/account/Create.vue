<script setup lang="ts">
import InputError from '@/components/InputError.vue'
import TextLink from '@/components/TextLink.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthBase from '@/layouts/AuthLayoutSplit.vue'
import { IdCard, LoaderCircle, Lock, Mail, User } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { ref, reactive } from 'vue'

const cpf = ref('')

const formatCpf = (event: Event) => {
  let value = (event.target as HTMLInputElement).value.replace(/\D/g, '')
  value = value.slice(0, 11)
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  cpf.value = value
}

const form = reactive({
  name: '',
  cpf: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const errors = reactive({
  name: '',
  cpf: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const processing = ref(false);

async function submitForm() {}

onMounted(() => {
  document.title = 'Criar conta'
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
            v-model="form.name"
            placeholder=" "
            :class="[
              errors.name
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
          <InputError class="absolute" :message="errors.name" />
        </div>

        <div class="relative">
          <IdCard class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="cpf"
            type="text"
            required
            tabindex="2"
            autocomplete="off"
            v-model="cpf"
            @input="formatCpf"
            maxlength="14"
            placeholder="___.___.___-__"
            class="peer bg-input/30 pl-10 placeholder:text-muted-foreground"
          />
          <label
            for="cpf"
            class="absolute left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all top-0 text-xs text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">CPF</span>
          </label>
          <InputError class="absolute" :message="errors.cpf" />
        </div>

        <div class="relative">
          <Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            required
            tabindex="3"
            autocomplete="email"
            v-model="form.email"
            placeholder=" "
            class="peer bg-input/30 pl-10"
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
            required
            tabindex="4"
            autocomplete="new-password"
            v-model="form.password"
            placeholder=" "
            class="peer bg-input/30 pl-10"
          />
          <label
            for="password"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Senha</span>
          </label>
          <InputError class="absolute" :message="errors.password" />
        </div>

        <div class="relative">
          <Lock class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password_confirmation"
            type="password"
            required
            tabindex="5"
            autocomplete="new-password"
            v-model="form.password_confirmation"
            placeholder=" "
            class="peer bg-input/30 pl-10"
          />
          <label
            for="password_confirmation"
            class="absolute top-1/2 left-10 -translate-y-1/2 bg-background text-sm text-muted-foreground transition-all peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary hover:cursor-text"
          >
            <span class="block bg-input/30 px-1 select-none">Confirmar Senha</span>
          </label>
          <InputError class="absolute" :message="errors.password_confirmation" />
        </div>

        <Button
          type="submit"
          class="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 hover:bg-primary/80"
          tabindex="6"
          :disabled="processing"
        >
          <LoaderCircle v-if="processing" class="h-4 w-4 animate-spin" />
          <span>Cadastrar</span>
        </Button>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Já tem uma conta?
        <TextLink
          href="/account/signin"
          class="underline underline-offset-4 hover:text-primary"
          :tabindex="7"
        >
          Entrar
        </TextLink>
      </div>
    </form>
    <template #login-button>
      <RouterLink
        to="/account/signin"
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
