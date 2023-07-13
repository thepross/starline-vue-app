<template>
    <v-row>
      <VCol
        md="6"
        lg="12"
        cols="12"
      >
        <VCard>
          <VRow no-gutters>
            <VCol
              cols="12"
              sm="8"
              md="12"
              lg="7"
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
                    width="500px"
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
                  <sup class="text-h5">id generación: {{ imagen.id_generacion }}</sup>
                </p>
                <VCardText class="">
                    <div class="ms-auto ps-4">
                        <div class="text-center">
                            <v-rating
                            v-model="rating"
                            hover
                            @input="setRating()"
                            ></v-rating>
                        </div>
                    </div>
                    <VRow>
                        <VCol class="text-center">
                            <VBtn>
                                Editar Imagen
                            </VBtn>
                        </VCol>
                    </VRow>
                    <VRow>
                        <VCol class="text-center">
                            <VBtn
                            @click="descargar(imagen.id, imagen.image, imagen.nombre)"
                            >
                                Descargar Imagen (JPG)
                            </VBtn>
                        </VCol>
                    </VRow>
              </VCardText>
              </div>
              
            </VCol>
          </VRow>
        </VCard>
      </VCol>
  
    </v-row>
  </template>



<script lang="ts">

import axios from 'axios';
import Constants from './Constants';

  export default {
    name: 'Show',
    components: {

    },
    data() {
      return {
        imagen: {id: 0, image: "", id_generacion: 0, nombre: "poster", rating: 0},
        error: false, 
        message: "",
        message_b: false,
        url: Constants.URL_BACK,
        rating: 0
      }
    },
    methods: {
        async setRating() {
            let formData = new FormData()
            formData.append('id_generacion', this.imagen.id_generacion)
            formData.append('id_imagen', this.imagen.id)
            formData.append('detalle', this.rating)
            
            const result = await axios
                .post(Constants.URL_BACK + '/imagen/calificacion', formData)
                .then(res => {
                    console.log(res.data)

                }).catch((e) => {
                    console.log(e)
                })
        },

        descargar(id: number, ruta: string, nombre: string) {
            var a = document.createElement('a')
            a.href = ruta
            a.download = nombre + '.png'
            a.click()
        },
    },
    created() {        
        axios.get(this.url + "/imagen/show/" + localStorage.getItem('id_imagen'))
        .then((res) => {
            this.imagen = res.data.imagenes[0]
            this.rating = this.imagen.rating
        });
    },
  }
</script>