<script setup lang="ts">

import e1 from '@/assets/images/pages/estilo1.jpg';
import e2 from '@/assets/images/pages/estilo2.jpg';
import e3 from '@/assets/images/pages/estilo3.jpg';
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Creación de Imagenes" style="border: 2px #c7abff solid;">
        <VCardText> Crea tus Imagenes con estilos unicos y en el menor tiempo posible!, utiliza estas imagenes como plantilla para tu proximo afiche. </VCardText>

        <form @submit.prevent="submit">
          <v-container>
            <v-row>
              <v-col
                align="center"
                cols="12"
                md="4"
              >
                <VCard title="Entradas" color="#f4f0fc">
                  <VCardText>Aquí van las entradas para nuestra imagen.</VCardText>
                  <v-container>
                    <v-file-input
                      show-size
                      label="Imagen 1"
                      prepend-icon="mdi-image"
                      @change="selectImagen1"
                      required
                    ></v-file-input>
                    <br />
                    <v-file-input
                      show-size
                      label="Imagen 2"
                      prepend-icon="mdi-image"
                      @change="selectImagen2"
                    ></v-file-input>
                    <br />
                    <v-file-input
                      show-size
                      label="Imagen 3"
                      prepend-icon="mdi-image"
                      @change="selectImagen3"
                    ></v-file-input>
                    <br />
                    <v-text-field
                      v-model="addForm.texto1"
                      :counter="20"
                      label="Titulo"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="addForm.texto2"
                      :counter="20"
                      label="Titulo Secundario"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="addForm.texto3"
                      :counter="20"
                      label="Titulo Opcional"
                    ></v-text-field>
                  </v-container>
                </VCard>
              </v-col>

              <v-col
                align="center"
                cols="12"
                md="4"
              >
                <VCard title="Resultado" color="#f4f0fc">
                  <VCardText>Aqui se muestran las imagenes como resultado de las entradas y estilos.</VCardText>
                  <v-container>
                    <v-row>
                      <v-col
                      cols="6"
                      >
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          :class="{ 'on-hover': isHovering }"
                          v-bind="props"
                        >
                        <v-img
                          :src="imagenB1"
                          aspect-ratio="1"
                          cover
                          class="bg-grey-lighten-2"
                        >
                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons"
                                :key="index"
                                variant="text"
                                :class="{ 'show-btns': isHovering }"
                                color="#a3a3a3"
                                v-if="isHovering && imagenB1 != ''"
                                :icon="icon"
                                @click="index == 0 ? descargar(0, imagenB1, 'poster1') : mostrar(id1)"
                              ></v-btn>
                            </div>

                            <template v-if="imagenB1 == '' && !loadingImagen1">
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                              <VIcon
                                  v-bind="{ icon: 'mdi-image' }"
                                  class="nav-item-icon"
                              />
                              </v-row>
                            </template>
                        <template v-if="loadingImagen1">
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                              ></v-progress-circular>
                            </v-row>
                        </template>
                        
                        </v-img>

                        </v-card>
                      </v-hover>
                      </v-col>


                      <v-col
                        cols="6"
                      >
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          :class="{ 'on-hover': isHovering }"
                          v-bind="props"
                        >
                        <v-img
                          :src="imagenB2"
                          aspect-ratio="1"
                          cover
                          class="bg-grey-lighten-2"
                        >
                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons"
                                :key="index"
                                variant="text"
                                :class="{ 'show-btns': isHovering }"
                                color="#a3a3a3"
                                v-if="isHovering && imagenB2 != ''"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                            <template v-if="imagenB2 == '' && !loadingImagen2">
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                            <VIcon
                                v-bind="{ icon: 'mdi-image' }"
                                class="nav-item-icon"
                            />
                            </v-row>
                          </template>
                        <template v-if="loadingImagen2">
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                              ></v-progress-circular>
                            </v-row>
                        </template>
                          
                        </v-img>
                          
                        </v-card>
                      </v-hover>
                      </v-col>
                      <v-col
                        cols="6"
                      >
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          :class="{ 'on-hover': isHovering }"
                          v-bind="props"
                        >
                        <v-img
                          :src="imagenB3"
                          aspect-ratio="1"
                          cover
                          class="bg-grey-lighten-2"
                        >
                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons"
                                :key="index"
                                variant="text"
                                :class="{ 'show-btns': isHovering }"
                                color="#a3a3a3"
                                v-if="isHovering && imagenB3 != ''"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                            <template v-if="imagenB3 == '' && !loadingImagen3">
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                              <VIcon
                                  v-bind="{ icon: 'mdi-image' }"
                                  class="nav-item-icon"
                              />
                              </v-row>
                            </template>
                        <template v-if="loadingImagen3">
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                              ></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                          
                        </v-card>
                      </v-hover>
                      </v-col>
                      <v-col
                        cols="6"
                      >
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          :class="{ 'on-hover': isHovering }"
                          v-bind="props"
                        >
                        <v-img
                          :src="imagenB4"
                          aspect-ratio="1"
                          cover
                          class="bg-grey-lighten-2"
                        >
                            <div class="d-flex justify-space-between">
                              <v-btn
                                v-for="(icon, index) in icons"
                                :key="index"
                                variant="text"
                                :class="{ 'show-btns': isHovering }"
                                color="#202020"
                                v-if="isHovering && imagenB4 != ''"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                            <template v-if="imagenB4 == '' && !loadingImagen4">
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                              <VIcon
                                  v-bind="{ icon: 'mdi-image' }"
                                  class="nav-item-icon"
                              />
                              </v-row>
                            </template>
                        <template v-if="loadingImagen4">
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                              ></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                          
                        </v-card>
                      </v-hover>
                      </v-col>
                    </v-row>
                  </v-container>
                </VCard>
              </v-col>

              <v-col
                align="center"
                cols="12"
                md="4"
              >

                <VCard title="Estilos" color="#f4f0fc">
                  <VCardText> Aqui se muestran los estilos de las imagenes, selecciona alguno:</VCardText>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-card>
                          <v-list lines="one" v-model="acti">
                            <v-list-item v-for="(item,idx) in items" 
                              @click="toggleActive(idx)" 
                              :class="{active: acti===idx}" 
                              :key="item.title">
                              <v-list-item-content>
                                <v-row>
                                  <v-col :cols="3">
                                  <VImg
                                    :src="item.image"
                                    max-height="60"
                                    cover
                                  />
                                </v-col>
                                <v-col :cols="9">
                                  <v-list-item-title v-text="item.title"></v-list-item-title>
                                  <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                                </v-col>
                                </v-row>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                        <v-btn
                          class="ma-4"
                          type="submit"
                          size="large"
                          prepend-icon="mdi-cached"
                          >Generar</v-btn
                        >
                        <v-btn
                          class="ma-4"
                          size="large"
                          @click="clear"
                          >Limpiar</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </VCard>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts">
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Constants from './Constants';

const $toast = useToast()

export default {
  name: 'crear-imagen',
  data: () => ({
    icons: ['mdi-download', 'mdi-star'],

    activeAddBookModal: false,
    addForm: {
      title: '',
      author: '',
      read: [],
      id: '',
      idUser: '',
      imagen1: null,
      imagen2: null,
      imagen3: null,
      texto1: '',
      texto2: '',
      texto3: '',
    },
    imagen5: null,
    titulos: ['ID', 'ID Usuario', 'Imagen1', 'Imagen2', 'Imagen3', 'texto1', 'texto2', 'texto3'],
    generaciones: [],
    message: '',
    showMessage: false,
    progressBar: false,
    progress: 0,
    currentFile: undefined,
    imageBytes: '',
    cantidad: 0,
    imagenB1: "",
    imagenB2: "",
    imagenB3: "",
    imagenB4: "",
    showLoading: false,
    loadingImagen1: false,
    loadingImagen2: false,
    loadingImagen3: false,
    loadingImagen4: false,
    id1: 0,
    id2: 0,
    id3: 0,
    id4: 0,
    rating: 1,

        model: 0,
        selected: -1,
        isLoading: true,
        bool: true,
        isActive: false,
        activeItems: [] as number[],
        acti: -1,
        items: [
          {
            icon: "print",
            iconClass: "grey lighten-1 white--text",
            title: "Cartel Informativo",
            subtitle: "Para mostrar la información necesaria.",
            image: e1,
          },
          {
            icon: "email",
            iconClass: "grey lighten-1 white--text",
            title: "Realista",
            subtitle: "Para fondos mas realistas.",
            image: e2,
          },
          {
            icon: "mdi-fax",
            iconClass: "grey lighten-1 white--text",
            title: "Moderno",
            subtitle: "Para estilos modernos en los detalles.",
            image: e3,
          },
        ]
  }),

  methods: {

    changeColor() {
      this.isLoading = !this.isLoading;
    },
    toggleActive(idx: any) {
      // let pos = this.activeItems.indexOf(idx)
      this.acti === idx ? this.acti = -1 : this.acti = idx;
      console.log(this.acti)
            // pos === -1 ? this.activeItems.push(idx) : this.activeItems.splice(pos,1)
    },

    selectImagen1(event : any) {
      this.progress = 0
      this.addForm.imagen1 = event.target.files[0]
    },
    selectImagen2(event : any) {
      this.progress = 0
      this.addForm.imagen2 = event.target.files[0]
    },
    selectImagen3(event : any) {
      this.progress = 0
      this.addForm.imagen3 = event.target.files[0]
    },
    getGeneraciones() {
      axios
        .get(Constants.URL_BACK + '/generaciones')
        .then(res => {
          this.generaciones = res.data.generaciones
        })
        .catch(error => {
          console.error(error)
        })
    },
    see() {
      var img = document.createElement('h1')
      img.textContent = 'asd'

      document.getElementById('images')?.appendChild(img)
    },

    async submit() {
      if (this.acti == -1) {
        return 
      }
      this.imagenB1 = ""
      this.imagenB2 = ""
      this.imagenB3 = ""
      this.imagenB4 = ""
      this.progressBar = true
      this.showLoading = true
      this.loadingImagen1 = true
      this.loadingImagen2 = true
      this.loadingImagen3 = true
      this.loadingImagen4 = true
      let formData = new FormData()

      let id_user = localStorage.getItem('id')
      formData.append('id_user', id_user)
      formData.append('texto1', this.addForm.texto1)
      formData.append('texto2', this.addForm.texto2)
      formData.append('texto3', this.addForm.texto3)
      formData.append('imagen1', this.addForm.imagen1)
      formData.append('imagen2', this.addForm.imagen2)
      formData.append('imagen3', this.addForm.imagen3)
      
      // console.log(formData.get('imagen1'))

      let id_generacion = 0;
      const result = await axios
          .post(Constants.URL_BACK + '/generaciones/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            console.log(response.data)
            id_generacion = response.data.id
          }).catch((e) => {
            console.log(e)
          })

          let instance2 = $toast.open({
            message: 'Generando imágenes...',
            type: 'info',
            position: 'top-right',
            duration: 20000,
          })

        let payload = new FormData()
        payload.append('id_generacion', id_generacion + "")
        payload.append('estilo', this.acti + "")
      for (let index = 1; index <= 4; index++) {
        const result2 = await axios
          .post(Constants.URL_BACK + '/generar/', payload, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            for (let i = 0; i < response.data.generaciones.length; i++) {
              this.imageBytes = response.data.generaciones[i]
              console.log(response.data.id)
              if (index === 1) {
                this.imagenB1 = 'data:image/jpeg;base64,' + this.imageBytes
                this.id1 = response.data.id
                this.loadingImagen1 = false
              } else if (index === 2) {
                this.imagenB2 = 'data:image/jpeg;base64,' + this.imageBytes
                this.id2 = response.data.id
                this.loadingImagen2 = false
              } else if (index === 3) {
                this.imagenB3 = 'data:image/jpeg;base64,' + this.imageBytes
                this.id3 = response.data.id
                this.loadingImagen3 = false
              } else {
                this.imagenB4 = 'data:image/jpeg;base64,' + this.imageBytes
                this.id4 = response.data.id
                this.loadingImagen4 = false
              }
            }
            // this.progressBar = false
          }).catch(() => {
            this.showLoading = false;
            if (index === 1) {
                this.loadingImagen1 = false
              } else if (index === 2) {
                this.loadingImagen2 = false
              } else if (index === 3) {
                this.loadingImagen3 = false
              } else {
                this.loadingImagen4 = false
              }
          })

        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('index: ' + index)
      }
      instance2.dismiss();
      
      this.showLoading = false;
      let instance = $toast.open({
        message: 'Generado correctamente.',
        type: 'success',
        duration: 4000,
        position: 'top-right'
      })
    },
    clear() {
      this.addForm.texto1 = ''
      this.addForm.texto2 = ''
      this.addForm.texto3 = ''
      this.addForm.imagen1 = null
      this.addForm.imagen2 = null
      this.addForm.imagen3 = null
    },

    mostrar(id: number) {
      localStorage.id_imagen = id
      this.$router.push('/rating');
    },
    descargar(id: number, ruta: string, nombre: string) {
      let toastDownload = $toast.open({
        message: 'Descargando imagen...',
        type: 'info',
        duration: 4000,
        position: 'top-right'
      })
      var a = document.createElement('a')
      a.href = ruta
      a.download = nombre + '.png'
      a.click()
    },

  },

  created() {
    axios.interceptors.response.use(
      response => {
        // console.log('Cantidad:' + this.cantidad);
        return response
      },
      error => {
        return Promise.reject(error)
      },
    )
    // this.getGeneraciones()
  },
}
</script>


<style>
.bg-active {
  background-color: black;
  color : white !important;
}
.active {
  background: #9155FD;
  color: #ffffff;
}
.is-green {
  background: #c9c9c9 !important;
}
.is-gray {
  background: #505050 !important;
}
</style>