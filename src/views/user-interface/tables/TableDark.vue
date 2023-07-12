<script lang="ts">
export default {
  props: ['data', 'titles'],
}
</script>
<script setup lang="ts"></script>

<template>
  <VTable density="compact" height="350">
    <thead>
      <tr>
        <!-- renderizando los titulos de la Lista -->
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="text-center text-uppercase text--primary"
        >
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- renderizando los objetos de la Lista -->
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

<style lang="scss">
.v-table {
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
</style>
