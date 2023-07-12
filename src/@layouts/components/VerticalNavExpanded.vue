<script setup>
import { getComputedNavLinkToProp } from '@layouts/utils'

const props = defineProps({
  item: {
    type: null,
    required: true,
  },
})
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
        <div slot="header">Item</div>
        <v-card>
            hola
        </v-card>

    </v-expansion-panel-content>

  </v-expansion-panel>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
