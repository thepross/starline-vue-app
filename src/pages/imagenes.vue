<script setup lang="ts">
// import { ref, watch } from 'vue';

// const page = ref(1)
// const data = ref(null)
// watch(page, async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${page.value}`
//   )
//   data.value = await response.json()
//   console.log(data.value)
// }, { immediate: true })

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Mis Imágenes" v-show="!isLoading" style="border: 2px #c7abff solid;">
        <VCardText> Aquí estan tus imágenes generadas. </VCardText>
        <v-container>
          <v-row>
            <v-col
              v-for="imagen in imagenes"
              :key="imagen.id"
              :cols="2"
              :lg="2"
              :md="4"
              :sm="3"
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

                  <v-card-actions class="justify-center">
                    <v-btn
                      color="primary"
                      variant="text"
                      icon="mdi-information"
                      @click="mostrar(imagen.id)"
                    >
                  </v-btn>

                    <v-btn
                      color="primary"
                      variant="text"
                      icon="mdi-download"
                      @click="descargar(imagen.id, imagen.image, imagen.nombre)"
                    ></v-btn>

                    <v-btn
                      color="primary"
                      variant="text"
                      icon="mdi-share-variant"
                    ></v-btn>
                  </v-card-actions>
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
          'ngrok-skip-browser-warning': '1',
          'Content-Type': 'multipart/form-data',
        }
      };
      await axios
        .get(Constants.URL_BACK + '/imagen/' + localStorage.getItem('id') + '/' + this.page, config)
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
      localStorage.id_imagen = id
      this.$router.push('/rating');
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
