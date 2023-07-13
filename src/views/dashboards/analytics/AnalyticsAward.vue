<script setup lang="ts">
import triangleDark from '@/assets/images/misc/triangle-dark.png'
import triangleLight from '@/assets/images/misc/triangle-light.png'
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const welcome = computed(() => {
  return "Bienvenido, " + localStorage.getItem('user') + "! 🎉"
})
const cant = computed(() => {
  return "23 afiches"
})
const triangleBg = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? triangleLight : triangleDark
})
</script>

<template>
  <VCard
    :title=welcome
    subtitle="Comienza a realizar afiches."
    class="position-relative"
  >
    <VCardText>
      <h5 class="text-2xl font-weight-medium text-primary">
        {{ cant }}
      </h5>
      <p>78%</p>
      <VBtn size="small" @click="crear()">
        Crear Imágenes
      </VBtn>
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleBg"
      class="triangle-bg flip-in-rtl"
    />

  </VCard>
</template>

<style lang="scss">
.triangle-bg {
  position: absolute;
  inline-size: 10.375rem;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.trophy {
  position: absolute;
  inline-size: 4.9375rem;
  inset-block-end: 2rem;
  inset-inline-end: 2rem;
}
</style>


<script lang="ts">

export default {
  data: function() {
    return {

    }
  },

  methods: {
    crear() {
      this.$router.push('/crear-imagen');
    }
  }
}

</script>

