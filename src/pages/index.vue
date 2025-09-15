<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import AppearanceTabs from '@/components/AppearanceTabs.vue'
import { MessageSquare, Video, BookOpen, Zap, Target } from "lucide-vue-next"
import { computed, onMounted } from 'vue'
import { useSession } from '@/stores/session'
const session = useSession();

const user = computed(() => session.state.user);
onMounted(() => {
  document.title = 'Bem-vindo - NextClass'
})
</script>
<template>
  <header class="px-4 sm:px-8 py-4 flex justify-between items-center max-w-6xl mx-auto">
    <RouterLink to="/">
    <img src="@/assets/media/logo.svg" alt="Logo" class="w-12 h-12 rounded-full select-none" />
    </RouterLink>
    <AppearanceTabs />
  </header>

  <main class="mx-auto max-w-6xl space-y-8 mb-24">

    <section class="flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-4 sm:px-8">
      <div class="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 class="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
          Aprenda rápido e melhore seus resultados com <span class="text-primary">NextClass</span>
        </h1>
        <p class="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto md:mx-0">
          Uma plataforma interativa e moderna, construída para impulsionar o seu aprendizado.
        </p>

        <div v-if="user" class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg"
            class="bg-primary text-primary-foreground select-none transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            as-child>
            <RouterLink to="/dashboard">Dashboard</RouterLink>
          </Button>
        </div>

        <div v-else class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg"
            class="bg-primary text-primary-foreground w-full sm:w-auto select-none transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            as-child>
            <RouterLink to="/account/create">Cadastrar</RouterLink>
          </Button>
          <Button size="lg" variant="outline"
            class="w-full sm:w-auto select-none transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            as-child>
            <RouterLink to="/auth/signin">Entrar</RouterLink>
          </Button>
        </div>
      </div>

      <div class="flex-1 max-w-sm sm:max-w-md md:max-w-none order-1 md:order-2">
        <img src="@/assets/media/images/landing/int-img-1.jpg" alt="Imagem"
          class="w-full rounded-xl shadow-lg dark:shadow-none select-none" />
      </div>
    </section>

    <section class="py-16 px-4 sm:px-8 bg-muted/50 rounded-2xl">
      <h2 class="text-center text-3xl font-bold mb-10">Por que escolher o NextClass?</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader class="flex flex-col items-center text-center space-y-3">
            <BookOpen class="w-10 h-10 text-primary" />
            <CardTitle>Estude com facilidade</CardTitle>
            <CardDescription>Aprenda de forma mais prática e intuitiva.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground text-left">
              <li>Interface moderna</li>
              <li>Experiência fluida</li>
              <li>Design responsivo</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="flex flex-col items-center text-center space-y-3">
            <Zap class="w-10 h-10 text-primary" />
            <CardTitle>Funcionalidades Inteligentes</CardTitle>
            <CardDescription>Organize melhor seus estudos.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground text-left">
              <li>Gerenciamento de horários</li>
              <li>Histórico acadêmico completo</li>
              <li>Busca rápida por disciplinas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="flex flex-col items-center text-center space-y-3">
            <Target class="w-10 h-10 text-primary" />
            <CardTitle>Foco e Resultados</CardTitle>
            <CardDescription>Maximize seu desempenho.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground text-left">
              <li>Relatórios detalhados</li>
              <li>Estudo gamificado</li>
              <li>Feedback instantâneo</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center gap-10 py-16 px-4 sm:px-8">
      <div class="flex-1 order-2 md:order-1 flex justify-center order-1 md:order-2">
        <div class="p-6 bg-muted rounded-xl shadow-md">
          <MessageSquare class="w-20 h-20 text-primary" />
        </div>
      </div>
      <div class="flex-2 order-1 md:order-2 space-y-6 text-center md:text-left order-2 md:order-1">
        <h2 class="text-3xl font-bold">Chat ao vivo nas turmas</h2>
        <p class="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
          Interaja em tempo real com colegas e professores, compartilhe dúvidas e colabore diretamente durante as aulas.
        </p>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center gap-10 py-16 px-4 sm:px-8">
      <div class="flex-2 space-y-6 text-center md:text-left order-2 md:order-1">
        <h2 class="text-3xl font-bold">Aulas ao vivo integradas</h2>
        <p class="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
          Participe de videochamadas diretamente no NextClass, sem precisar sair da plataforma.
          Compartilhe tela, interaja com áudio e vídeo, tudo em um só lugar.
        </p>
      </div>
      <div class="flex-1 flex justify-center order-1 md:order-2">
        <div class="p-6 bg-muted rounded-xl shadow-md">
          <Video class="w-20 h-20 text-primary" />
        </div>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center gap-10 py-16 px-4 sm:px-8">
      <div class="flex-1 flex justify-center order-2 md:order-1">
        <div class="p-6 bg-muted rounded-xl shadow-md">
          <BookOpen class="w-20 h-20 text-primary" />
        </div>
      </div>
      <div class="flex-2 space-y-6 text-center md:text-left order-1 md:order-2">
        <h2 class="text-3xl font-bold">Formulários interativos integrados</h2>
        <p class="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
          Crie e responda questionários sem precisar de ferramentas externas.
          Professores podem avaliar em tempo real e alunos recebem feedback imediato.
        </p>
      </div>
    </section>

    <section class="py-16 px-4 sm:px-8 bg-muted/50 rounded-2xl">
      <h2 class="text-center text-3xl font-bold mb-12">Colaboração que impulsiona resultados</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader class="flex flex-col items-center text-center space-y-3">
            <Zap class="w-10 h-10 text-primary" />
            <CardTitle>Tarefas organizadas</CardTitle>
            <CardDescription>Gerencie prazos com facilidade</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm text-center">
              Professores podem criar e acompanhar entregas, enquanto alunos recebem alertas de prazos.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-col items-center text-center space-y-3">
            <Target class="w-10 h-10 text-primary" />
            <CardTitle>Salas colaborativas</CardTitle>
            <CardDescription>Estude junto com a turma</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm text-center">
              Ambientes virtuais para trabalhos em grupo, troca de arquivos e organização de ideias.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-col items-center text-center space-y-3">
            <MessageSquare class="w-10 h-10 text-primary" />
            <CardTitle>Comunicação fluida</CardTitle>
            <CardDescription>Chats e notificações integrados</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm text-center">
              Receba avisos da turma em tempo real e mantenha todos sempre atualizados.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="py-20 px-4 sm:px-8">
      <h2 class="text-center text-3xl font-bold mb-12">O que estão dizendo sobre o NextClass</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent class="p-6">
            <p class="text-muted-foreground italic">
              "O NextClass transformou minha forma de dar aulas. Os alunos participam mais e consigo organizar tudo em
              um
              só lugar."
            </p>
            <p class="mt-4 font-semibold">— Prof. Ana Souza</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="p-6">
            <p class="text-muted-foreground italic">
              "As aulas ao vivo integradas são incríveis! Não preciso mais alternar entre várias plataformas."
            </p>
            <p class="mt-4 font-semibold">— João Pereira, aluno</p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section
      class="bg-primary dark:bg-muted/50 text-primary-foreground rounded-2xl py-12 sm:py-16 px-6 text-center space-y-6 mx-4 sm:mx-0">
      <h2 class="text-2xl sm:text-3xl font-bold">Pronto para começar?</h2>
      <p class="text-base sm:text-lg opacity-90">Acesse agora mesmo e transforme seu aprendizado.</p>
      <Button size="lg"
        class="bg-white text-primary dark:bg-primary dark:text-white hover:bg-gray-100 w-full sm:w-auto transition-all duration-300 ease-out hover:scale-105 active:scale-95"
        as-child>
        <RouterLink v-if="user" to="/dashboard" class="select-none">Dashboard</RouterLink>
        <RouterLink v-else to="/account/create" class="select-none">Criar conta</RouterLink>
      </Button>
    </section>
  </main>

  <Footer />
</template>
