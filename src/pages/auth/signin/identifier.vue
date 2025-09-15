<script setup lang="ts">
import { reactive } from 'vue'
import { Mail } from 'lucide-vue-next'
import InputError from '@/components/InputError.vue'
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'
import userService from '@/services/users'
import { useTempSession } from '@/composables/useTempSession'

const router = useRouter()
const tempSession = useTempSession()

const form = reactive({
  data: {
    email: '',
  },
  errors: {
    email: '',
  },
  processing: false,
})

async function submitForm() {
  form.processing = true

  try {
    const user = await userService.search(form.data.email)

    if (!user) {
      form.errors.email = 'Nenhum usuário encontrado com este email.'
      return
    }

    tempSession.set('loginUser', user)
    router.push({
      path: '/auth/signin/challenge',
    })
  } catch (error) {
    form.errors.email = 'Erro ao buscar usuário.'
  } finally {
    form.processing = false
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-6">
    <div class="grid gap-6">
      <div class="relative">
        <Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="email"
          type="email"
          v-model="form.data.email"
          required
          autofocus
          :tabindex="1"
          autocomplete="email"
          placeholder=" "
          class="peer bg-input/30 pl-10"
          :class="[
            form.errors.email
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
        <InputError class="absolute" :message="form.errors.email" />
      </div>
    </div>
    <Button
      type="submit"
      class="mt-2 flex w-full items-center justify-center cursor-pointer"
      :disabled="form.processing"
    >
      <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
      <span>Próximo</span>
    </Button>
  </form>
</template>
