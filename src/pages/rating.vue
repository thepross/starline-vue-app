<template>
  <v-row>
    <VCol
      md="6"
      lg="12"
      cols="12"
    >
      <VCard
        v-show="!isLoading"
        ref="cardContainer"
        style="border: 2px #c7abff solid;"
      >
        <VRow>
          <VCol
            cols="6"
            order="2"
            order-lg="1"
          >
            <VCardItem>
              <VCardTitle>Imagen</VCardTitle>
            </VCardItem>

            <VCardText>
              <v-img
                :src="imagen.image"
                class="align-end"
                width="600px"
                cover
              >
                <v-card-title class="text-white">ID Imagen: {{ imagen.id }}</v-card-title>
              </v-img>
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            sm="4"
            md="12"
            lg="5"
            order="1"
            order-lg="2"
          >
            <div class="align-center py-14 h-100 justify-center text-center">
              <p class="mb-1">
                <sup class="text-h5">ID Generación: {{ imagen.id_generacion }}</sup>
              </p>
              <VCardText class="">
                <div class="ms-auto ps-4">
                  <span>Calificación:</span>
                  <div class="text-center">
                    <v-rating
                      v-model="rating"
                      hover
                      @input="setRating()"
                    ></v-rating>
                  </div>
                  <br>
                </div>
                <VRow>
                  <VCol class="text-center">
                    <VBtn size="large" prepend-icon="mdi-image-edit-outline"> Editar Imagen </VBtn>
                  </VCol>
                </VRow>
                <VRow>
                  <VCol class="text-center">
                    <VBtn size="large" prepend-icon="mdi-download" @click="descargar(imagen.id, imagen.image, imagen.nombre)"> Descargar Imagen (JPG) </VBtn>
                  </VCol>
                </VRow>
              </VCardText>

              <br />
              <v-card>
                <v-card-item>
                  <div class="text-caption pb-4">Generaciones del modelo.</div>
                  <div>
                    <v-row>
                      <v-col :cols="4">
                        <v-card>
                          <v-img
                            :src="generated[0]"
                            class="align-end"
                            height="200px"
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                      <v-col :cols="4">
                        <v-card>
                          <v-img
                            :src="generated[1]"
                            class="align-end"
                            height="200px"
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                      <v-col :cols="4">
                        <v-card>
                          <v-img
                            :src="generated[2]"
                            class="align-end"
                            height="200px"
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col :cols="4">
                        <v-card>
                          <v-img
                            :src="generated[3]"
                            class="align-end"
                            height="200px"
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                      <v-col :cols="4">
                        <v-card>
                          <v-img
                            :src="generated[4]"
                            class="align-end"
                            height="200px"
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                      <v-col :cols="4">
                        <v-card>
                          <v-img
                            :src="generated[5]"
                            class="align-end"
                            height="200px"
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </v-card-item>
              </v-card>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </v-row>
</template>

<script lang="ts">
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import Constants from './Constants'

const $toast = useToast()

export default {
  name: 'Show',
  components: {},
  data: function () {
    return {
      imagen: { id: 0, image: '', id_generacion: 0, nombre: 'poster', rating: 0 },
      error: false,
      message: '',
      message_b: false,
      url: Constants.URL_BACK,
      rating: 0,
      isLoading: true,
      generated: [],
    }
  },
  methods: {
    async setRating() {
      let loader = this.$loading.show({
        container: null,
        canCancel: false,
        color: '#9155FD',
        loader: 'spinner',
        width: 44,
        height: 44,
      })
      let formData = new FormData()
      formData.append('id_generacion', this.imagen.id_generacion + '')
      formData.append('id_imagen', this.imagen.id + '')
      formData.append('detalle', this.rating + '')

      const result = await axios
        .post(Constants.URL_BACK + '/imagen/calificacion', formData)
        .then(res => {
          console.log(res.data)
        })
        .catch(e => {
          console.log(e)
        })
      loader.hide()

      let instance = $toast.open({
        message: 'Calificado correctamente.',
        type: 'success',
        duration: 4000,
        position: 'top-right',
      })
    },

    descargar(id: number, ruta: string, nombre: string) {
      var a = document.createElement('a')
      a.href = ruta
      a.download = nombre + '.png'
      a.click()
      let instance = $toast.open({
        message: 'Descargando imagen...',
        type: 'info',
        duration: 4000,
        position: 'top-right',
      })
    },

    async getImagen() {
      // let instance = this.$toast.open('You did it!');
      let loader = this.$loading.show({
        container: null,
        canCancel: true,
        color: '#9155FD',
        loader: 'spinner',
        width: 44,
        height: 44,
      })
      const config = {
        headers: {
          'ngrok-skip-browser-warning': '1',
        },
      }
      await axios.get(this.url + '/imagen/show/' + localStorage.getItem('id_imagen'), config).then(res => {
        this.imagen = res.data.imagenes[0]
        this.rating = +this.imagen.rating
        this.generated = res.data.generated
      })
      loader.hide()
      this.isLoading = false
    },
  },
  created() {
    this.getImagen()
  },
}
</script>
