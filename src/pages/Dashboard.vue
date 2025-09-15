<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';

const breadcrumbs: any = [
    { title: 'Dashboard', href: '/dashboard' },
];
 
const institutions = [
  {
    id: 1,
    name: "Instituto Federal",
    classes: [
      {
        id: 1,
        name: "Turma 2",
        subjects: [
          {
            id: 1,
            title: "Mobile - Informática para Dispositivos",
            teacher: "André Luiz Simão de Miranda",
            image: "https://source.unsplash.com/400x300/?technology,mobile",
            overlayColor: "bg-gradient-to-t from-indigo-700/80 via-indigo-500/60 to-transparent"
          },
          {
            id: 2,
            title: "Banco de Dados Avançado",
            teacher: "Maria Souza",
            image: "https://source.unsplash.com/400x300/?database,technology",
            overlayColor: "bg-gradient-to-t from-emerald-700/80 via-emerald-500/60 to-transparent"
          }
        ]
      },
      {
        id: 2,
        name: "Turma 5",
        subjects: [
          {
            id: 3,
            title: "Desenvolvimento Web",
            teacher: "Carlos Pereira",
            image: "https://source.unsplash.com/400x300/?web,development",
            overlayColor: "bg-gradient-to-t from-pink-700/80 via-pink-500/60 to-transparent"
          }
        ]
      }
    ]
  }
];
</script>
<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-8 rounded-xl p-4 overflow-x-auto">
            <div v-for="institution in institutions" :key="institution.id" class="space-y-4">
                <h2 class="text-xl font-bold">{{ institution.name }}</h2>

                <div v-for="classItem in institution.classes" :key="classItem.id" class="space-y-2">
                    <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{ classItem.name }}</h3>

                    <div class="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div
                            v-for="subject in classItem.subjects"
                            :key="subject.id"
                            class="relative aspect-video overflow-hidden rounded-xl shadow hover:shadow-lg transition-all border border-sidebar-border/70 dark:border-sidebar-border"
                        >
                            <img :src="subject.image" alt="subject.title" class="absolute inset-0 w-full h-full object-cover" />

                            <div :class="['absolute inset-0', subject.overlayColor]"></div>

                            <div class="absolute bottom-0 p-4 text-white">
                                <h4 class="font-semibold text-lg leading-tight drop-shadow">{{ subject.title }}</h4>
                                <p class="text-sm opacity-90">{{ classItem.name }}</p>
                                <p class="text-xs opacity-75">{{ subject.teacher }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
