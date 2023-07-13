<script setup lang="ts"></script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Mis Imágenes">
        <VCardText> Aquí se muestran los recursos utilizados para generar imágenes. </VCardText>
        <v-container>
          <v-row>
            <v-col
              v-for="imagen in imagenes"
              :key="imagen.id"
              :cols="4"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-card-title>Generación: {{ imagen.id }}</v-card-title>
                  <v-card-item>
                    <div class="text-caption pb-4">Imagenes utilizadas en la generación:</div>

                    <div>
                        <v-row>
                            <v-col :cols="4">
                            <v-card>
                            <v-img
                                :src="imagen.image[0]"
                                class="align-end"
                                gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)"
                                height="200px"
                                cover
                            >
                            </v-img>
                        </v-card>
                        </v-col>
                        <v-col :cols="4">
                            <v-card>
                            <v-img
                                :src="imagen.image[1]"
                                class="align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                                height="200px"
                                cover
                            >
                            </v-img>
                        </v-card>
                        </v-col>
                        <v-col :cols="4">
                            <v-card>
                            <v-img
                                :src="imagen.image[2]"
                                class="align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                                height="200px"
                                cover
                            >
                            </v-img>
                        </v-card>
                        </v-col>
                        </v-row>
                        
                    </div>
                  </v-card-item>
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
        .get(Constants.URL_BACK + '/imagen/recursos/' + localStorage.getItem('id'))
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
      this.$router.push('/imagen/show/' + id)
    },
  },
  created() {
    this.getImagenes()
  },
}
</script>
