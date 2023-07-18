<script setup lang="ts"></script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Mis Imágenes" v-show="!isLoading" style="border: 2px #c7abff solid;">
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

          <br>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="totalPages"
              rounded="circle"
            ></v-pagination>
          </div>

        </v-container>
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts">
import axios from 'axios';
import Constants from './Constants';

export default {
  data: function() {
    return {
      titulos: ['ID', 'ID Generacion', 'Ruta', 'Nombre', 'Tamaño'],
      imagenes: [{ id: 0, ruta: '', nombre: '', size: '', id_generacion: 0, image: '' }],
      message: '',
      showMessage: false,
      isLoading: true,
      page: 1,
      totalPages: 0,
    }
  },

  methods: {
    async getImagenes() {
      let loader = this.$loading.show({
            container: this.$refs.cardGenerador,
            canCancel: false,
            color: '#9155FD',
            loader: 'spinner',
            width: 44,
            height: 44,
      });
      const config = {
        headers:{
          'ngrok-skip-browser-warning': '1'
        }
      };
      await axios
        .get(Constants.URL_BACK + '/imagen/recursos/' + localStorage.getItem('id') + '/' + this.page, config)
        .then(res => {
          this.imagenes = res.data.imagenes
          this.totalPages = res.data.pages
        })
        .catch(error => {
          console.error(error)
        })
        loader.hide();
        this.isLoading = false;
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
    //this.getImagenes()
  },
  watch: {
    page: {
      handler(val) {
        this.page = val;
        this.getImagenes();
      },
      immediate: true,
    }
  }
}
</script>
