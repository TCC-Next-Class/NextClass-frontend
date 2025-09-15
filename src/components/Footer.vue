<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, Twitter, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="w-full border-t bg-background text-foreground">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div class="flex flex-col items-center md:items-start space-y-3">
          <RouterLink to="/" class="flex items-center gap-3">
            <img
              src="@/assets/media/logo.svg"
              alt="Logo"
              class="w-14 h-14 rounded-full select-none"
            />
            <span class="text-xl font-bold">NextClass</span>
          </RouterLink>
          <p class="text-muted-foreground max-w-xs text-center md:text-left">
            Uma plataforma de ensino online com recursos modernos para melhorar seu aprendizado.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 class="text-sm font-semibold mb-3">Institucional</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/sobre"
                  class="hover:underline hover:text-primary transition-colors"
                  >Sobre</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/contato"
                  class="hover:underline hover:text-primary transition-colors"
                  >Contato</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/politica-de-privacidade"
                  class="hover:underline hover:text-primary transition-colors"
                  >Privacidade</RouterLink
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-3">Recursos</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/cursos"
                  class="hover:underline hover:text-primary transition-colors"
                  >Cursos</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/planos"
                  class="hover:underline hover:text-primary transition-colors"
                  >Planos</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/faq" class="hover:underline hover:text-primary transition-colors"
                  >FAQ</RouterLink
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-3">Ajuda</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/suporte"
                  class="hover:underline hover:text-primary transition-colors"
                  >Suporte</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/seguranca"
                  class="hover:underline hover:text-primary transition-colors"
                  >Segurança</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/termos"
                  class="hover:underline hover:text-primary transition-colors"
                  >Termos de uso</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-end space-y-3">
          <p class="text-sm text-muted-foreground">Siga-nos</p>
          <div class="flex gap-4">
            <Button variant="outline" size="icon" as-child>
              <a href="https://github.com/TCC-Next-Class" target="_blank" rel="noopener">
                <Github class="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" as-child>
              <a href="https://twitter.com" target="_blank" rel="noopener">
                <Twitter class="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" as-child>
              <a href="https://linkedin.com" target="_blank" rel="noopener">
                <Linkedin class="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator class="my-8" />

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3"
      >
        <p class="text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} NextClass — Todos os direitos reservados.
        </p>
        <p class="text-xs text-muted-foreground">
          Desenvolvido com ❤️ usando Laravel (12) + Vue.Js (3) + Shadcn
        </p>
      </div>
    </div>
  </footer>
</template>
