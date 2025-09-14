<script setup lang="ts">

import { RouterLink } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import AppearanceTabs from '@/components/AppearanceTabs.vue'
import CardCurso from "@/components/CardCurso.vue"

const abaAtiva = ref("cursos")

const cursos = [
  {
    titulo: "Python do Zero",
    descricao: "Curso introdutório de Python",
    professor: "Lopes",
  },
  {
    titulo: "Curso de Java",
    descricao: "Programação orientada a objetos",
    professor: "Vinicius",
  },
]

const materias = [
  {
    titulo: "Filosofia - 3info2 - 2025",
    descricao: "Trabalho sobre Aristóteles",
    professor: "Greice Barbieri",
  },
  {
    titulo: "Matemática - 3info2 - 2025",
    descricao: "Capítulo 2 - Funções",
    professor: "Greice Barbieri",
  },
]
function setAbaAtiva(aba: string) {
  abaAtiva.value = aba
}
</script>

<template>
  <header class="py-4 flex justify-between items-center max-w-8xl mx-auto sm:px-30">
    <RouterLink to="/">
      <img src="@/assets/media/logo.svg" alt="Logo" class="w-12 h-12 rounded-full select-none" />
    </RouterLink>
    <AppearanceTabs />
  </header>

  <main class="mx-auto max-w-8xl space-y-8 mb-30">
    <section class="px-5 sm:px-30">

      <div class="bemVindo-container">
        <p class="bemVindo-texto">
          Bem-vindo ao NextClass! Sua sala de aula digital, reinventada.<br />
          Gerencie suas aulas e mantenha tudo organizado em um só lugar.
        </p>
        <RouterLink to="/sobre" class="btn-sobre">sobre</RouterLink>

      </div>

      <div class="flex min-h-screen">
        <aside class="w-64 bg-white border-r p-4 space-y-6">
          <nav class="space-y-4">
            <div>
              <p class="text-gray-500 font-bold mb-2">Matérias</p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <span
                    class="w-8 h-8 flex items-center justify-center bg-purple-300 rounded-full text-white font-bold">F</span>
                  <span>Filosofia - 3info2</span>
                </li>
                <li class="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <span
                    class="w-8 h-8 flex items-center justify-center bg-purple-300 rounded-full text-white font-bold">F</span>
                  <span>Física - 3info2</span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-gray-500 font-bold mb-2">Cursos</p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <span
                    class="w-8 h-8 flex items-center justify-center bg-purple-300 rounded-full text-white font-bold">P</span>
                  <span>Python do zero</span>
                </li>
                <li class="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <span
                    class="w-8 h-8 flex items-center justify-center bg-purple-300 rounded-full text-white font-bold">J</span>
                  <span>Curso de Java</span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-gray-500 font-bold mb-2">Configurações</p>
              <div class="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <img src="@/assets/media/images/landing/engrenagem.svg" alt="Engrenagem"
                  class="w-8 h-8 flex items-center justify-center" />
                <span>Configurações</span>
              </div>
            </div>
          </nav>
        </aside>

        <main class="flex-1 p-6 space-y-6">
          <div class="flex flex-col md:flex-row items-center justify-between border rounded-xl p-6 shadow-md bg-white">
            <div>
              <p class="text-3xl font-bold">Comece uma sequência diária</p>
              <p class="text-gray-400 text-xl mt-3">Visite seus cursos para ganhar!</p>
            </div>
            <div class="flex items-center gap-12 mt-4 md:mt-0">
              <div class="flex flex-col items-center">
                <img src="@/assets/media/images/landing/fire.svg" alt="Logo" class="w-12 h-12" />
                <span class="text-2xl font-bold text-orange-600">15 dias</span>
                <span class="text-gray-500 text-sm">Sequência atual</span>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="w-18 h-18 rounded-full border-4 border-green-500 flex items-center justify-center text-lg font-bold text-green-600">
                  15/30
                </div>
                <span class="text-gray-500 text-sm mt-2.5">Sequência mensal</span>
              </div>
            </div>
          </div>
          <section>
            <div class="p-6">
              <div class="flex gap-8 border-b border-gray-200 pb-2">
                <div class="flex flex-col items-center cursor-pointer" @click="setAbaAtiva('cursos')">
                  <span class="text-gray-700 font-medium">Cursos</span>

                  <span v-if="abaAtiva === 'cursos'"
                    class="mt-2 w-15 h-1 bg-blue-500 rounded-full transition-all"></span>
                </div>

                <div class="flex flex-col items-center cursor-pointer" @click="setAbaAtiva('materias')">
                  <span class="text-gray-700 font-large">Matérias</span>

                  <span v-if="abaAtiva === 'materias'"
                    class="mt-2 w-15 h-1 bg-blue-500 rounded-full transition-all"></span>
                </div>
              </div>
              <div v-if="abaAtiva === 'cursos'" class="flex flex-wrap gap-6">
                <CardCurso v-for="(curso, index) in cursos" :key="index" :titulo="curso.titulo"
                  :descricao="curso.descricao" :professor="curso.professor" />
              </div>

              <div v-if="abaAtiva === 'materias'" class="flex flex-wrap gap-6">
                <CardCurso v-for="(materia, index) in materias" :key="index" :titulo="materia.titulo"
                  :descricao="materia.descricao" :professor="materia.professor" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>


  </main>
  <Footer />
</template>

<style scoped>
.bemVindo-container {
  margin: 2rem auto;
  padding: 5rem 2.5rem;
  border-radius: 0.5rem;
  text-align: center;
  color: white;
  font-weight: 600;
  background: linear-gradient(90deg, #24736D 0%, #56BA89 100%);
}

.bemVindo-texto {
  margin-bottom: 2rem;
  font-size: 1.85rem;
}

.btn-sobre {
  border: 2px solid white;
  border-radius: 0.375rem;
  padding: 0.5rem 3rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-sobre:hover {
  background-color: white;
  color: #1e5245;
}
</style>
