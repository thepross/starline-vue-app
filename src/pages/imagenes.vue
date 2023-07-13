<script setup lang="ts"></script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Mis Imágenes">
        <VCardText> Aquí estan tus imágenes generadas. </VCardText>
        <v-container>
          <v-row>
            <v-col
              v-for="imagen in imagenes"
              :key="imagen.id"
              :cols="3"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                          :elevation="isHovering ? 12 : 2"
                          :class="{ 'on-hover': isHovering }"
                          v-bind="props">
                  <v-img
                    :src="imagen.image"
                    class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                    height="300px"
                    cover
                  >
                    <v-card-title class="text-white">ID Imagen: {{ imagen.id }}</v-card-title>
                  </v-img>

                  <v-card-actions>
                    <v-spacer>ID Generación: {{ imagen.id_generacion }}</v-spacer>

                    <v-btn
                      size="small"
                      color="surface-variant"
                      variant="text"
                      icon="mdi-information"
                      @click="mostrar(imagen.id)"
                    ></v-btn>

                    <v-btn
                      size="small"
                      color="surface-variant"
                      variant="text"
                      icon="mdi-download"
                      @click="descargar(imagen.id, imagen.image, imagen.nombre)"
                    ></v-btn>

                    <v-btn
                      size="small"
                      color="surface-variant"
                      variant="text"
                      icon="mdi-share-variant"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts">
import axios from 'axios';
import Constants from './Constants';

export default {
  data() {
    return {
      titulos: ['ID', 'ID Generacion', 'Ruta', 'Nombre', 'Tamaño'],
      imagenes: [{ id: 0, ruta: '', nombre: '', size: '', id_generacion: 0, image: '' }],
      message: '',
      showMessage: false,
    }
  },

  methods: {
    getImagenes() {
      axios
        .get(Constants.URL_BACK + '/imagen/' + localStorage.getItem('id'))
        .then(res => {
          this.imagenes = res.data.imagenes
        })
        .catch(error => {
          console.error(error)
        })
    },
    descargar(id: number, ruta: string, nombre: string) {
      var a = document.createElement('a')
      a.href = ruta
      a.download = nombre + '.png'
      a.click()
    },
    mostrar(id: number) {
      localStorage.id_imagen = id
      this.$router.push('/rating');
    },
  },
  created() {
    this.getImagenes()
  },
}
</script>
