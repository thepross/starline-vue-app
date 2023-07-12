<script lang="ts">
export default {
  props: ['data', 'titles'],
}
</script>
<script setup lang="ts"></script>

<template>
  <VTable>
    <thead>
      <tr>
        <!-- renderizando los titulos de la Lista -->
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="text-center text-uppercase"
        >
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        :key="item.id"
      >
        <!-- renderizando los atributos del Objeto -->
        <td v-for="value in item" class="text-center"> 
          {{ value }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
