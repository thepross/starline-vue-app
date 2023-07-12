<script setup lang="ts"></script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Creacion de imagenes">
        <VCardText> crea tus imagenes! </VCardText>

        <form @submit.prevent="submit">
          <v-container>
            <v-row>
              <v-col
                align="center"
                cols="12"
                md="4"
              >
                <VCard title="Entradas">
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
                      required
                    ></v-text-field>
                  </v-container>
                </VCard>
              </v-col>

              <v-col
                align="center"
                cols="12"
                md="4"
              >
                <VCard title="Resultado">
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
                                v-if="isHovering && !loadImagen1"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                        <template v-if="showLoading">
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
                          <template v-if="loadImagen1">
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
                                v-if="isHovering && !loadImagen2"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                        <template v-if="showLoading">
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
                          <template v-if="loadImagen2">
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
                                v-if="isHovering && !loadImagen3"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                        <template v-if="showLoading">
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
                          <template v-if="loadImagen3">
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
                                v-if="isHovering && !loadImagen4"
                                :icon="icon"
                              ></v-btn>
                            </div>
                            
                        <template v-if="showLoading">
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
                          <template v-if="loadImagen4">
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
                <VCard title="Estilos">
                  <VCardText> Aqui van los estilos de las imagenes </VCardText>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-radio-group>
                          <v-radio
                            label="Cartel Informativo"
                            value="1"
                          ></v-radio>
                          <v-radio
                            label="Realista"
                            value="2"
                          ></v-radio>
                          <v-radio
                            label="Moderno"
                            value="3"
                          ></v-radio>
                        </v-radio-group>

                        <v-btn
                          class="ma-4"
                          type="submit"
                          >Enviar</v-btn
                        >
                        <v-btn
                          class="ma-4"
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
import Constants from './Constants';

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
    loadImagen1: true,
    loadImagen2: true,
    loadImagen3: true,
    loadImagen4: true,
    rating: 1,
  }),

  methods: {
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
      this.imagenB1 = ""
      this.imagenB2 = ""
      this.imagenB3 = ""
      this.imagenB4 = ""
      this.progressBar = true
      this.showLoading = true
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

        let payload = new FormData()
        payload.append('id_generacion', id_generacion + "")
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
              if (index === 1) {
                this.imagenB1 = 'data:image/jpeg;base64,' + this.imageBytes
                this.loadImagen1 = false
              } else if (index === 2) {
                this.imagenB2 = 'data:image/jpeg;base64,' + this.imageBytes
                this.loadImagen2 = false
              } else if (index === 3) {
                this.imagenB3 = 'data:image/jpeg;base64,' + this.imageBytes
                this.loadImagen3 = false
              } else {
                this.imagenB4 = 'data:image/jpeg;base64,' + this.imageBytes
                this.loadImagen4 = false
              }

            }
            // this.progressBar = false
          }).catch(() => {
            this.showLoading = false;
          })

        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('index: ' + index)
      }
      this.showLoading = false;
    },
    clear() {
      this.addForm.texto1 = ''
      this.addForm.texto2 = ''
      this.addForm.texto3 = ''
      this.addForm.imagen1 = null
      this.addForm.imagen2 = null
      this.addForm.imagen3 = null
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
