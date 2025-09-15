<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import InputError from '@/components/InputError.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Lock, ChevronDown as ArrowDown } from 'lucide-vue-next'
import TextLink from '@/components/TextLink.vue'
import { LoaderCircle } from 'lucide-vue-next'
import { useTempSession } from '@/composables/useTempSession'
import { useSession } from '@/stores/session'

const session = useSession()
const tempSession = useTempSession()
const user = tempSession.get('loginUser')
const router = useRouter()

function goBack() {
  router.push({
    path: '/auth/signin/identifier',
  })
}

const form = reactive({
  data: {
    password: '',
    remember: false,
  },
  errors: {
    password: '',
  },
  processing: false,
})


async function submitForm() {
  form.processing = true

  try {
    await session.create(user.email, form.data.password)

    tempSession.remove('loginUser')
    router.push({ path: '/' })
  } catch (error: any) {
    if (error?.response?.data?.errors?.password) {
      form.errors.password = error.response.data.errors.password
    } else {
      form.errors.password = 'Erro ao autenticar.'
    }
  } finally {
    form.processing = false
  }
}

if (!user) {
  goBack()
}
</script>
<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-6">
    <div class="grid gap-6">
      <div
        @click="goBack"
        class="hover:cursor-pointer flex items-center text-foreground dark:bg-input/30 border-input flex w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm hover:bg-input/50"
      >
        <img
          v-if="user?.avatar"
          :src="user?.avatar"
          alt="avatar"
          class="h-8 w-8 rounded-full border"
        />
        <div class="text-sm ml-1">{{ user?.email }}</div>
        <ArrowDown class="ml-auto h-4 w-4 text-muted-foreground" />
      </div>
      <div class="relative">
        <Lock class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="password"
          type="password"
          v-model="form.data.password"
          required
          :tabindex="2"
          autocomplete="current-password"
          placeholder=" "
          class="peer bg-input/30 pl-10"
          :class="[
            form.errors.password
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
        <InputError class="absolute" :message="form.errors.password" />
      </div>

      <div class="flex items-center justify-between text-sm">
        <Label for="remember" class="flex items-center space-x-3 hover:cursor-pointer">
          <Checkbox
            id="remember"
            v-model="form.data.remember"
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
    </div>
    <input type="hidden" name="email" :value="user?.email" />
    <Button
      type="submit"
      class="mt-2 flex w-full items-center justify-center cursor-pointer"
      :disabled="form.processing"
    >
      <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
      <span>Entrar</span>
    </Button>
  </form>
</template>
