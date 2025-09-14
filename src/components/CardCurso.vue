<template>
  <div
    class="rounded-xl shadow-lg overflow-hidden w-80 cursor-pointer transform hover:scale-105 transition duration-300 bg-white">

    <img
      :src="imagem"
      alt="Capa do curso"
      class="w-full h-36 object-cover"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">{{ titulo }}</h3>
      <p class="text-gray-600 mb-4 text-sm line-clamp-4">{{ descricao }}</p>
      <div class="flex items-center justify-between">
        <p class="text-gray-500 text-xs">Professor: {{ professor }}</p>
        <span class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
          Curso
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titulo: String,
  descricao: String,
  professor: String,
})
</script>
