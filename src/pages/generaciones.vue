
<script setup lang="ts">
import TableBasic from '@/views/user-interface/tables/TableBasic.vue';

import 'vue-loading-overlay/dist/css/index.css';
</script>

<template>
  <VRow>
    <!-- dark -->
    <VCol cols="12">
      <VCard title="Gestión de Generaciones" ref="cardGenerador" v-show="!isLoading" style="border: 2px #c7abff solid;">
        <VCardText> Generaciones para la gestion del modelo de imagenes. </VCardText>
        <TableBasic :data="generaciones" :titles="titulos" />
      </VCard>
    </VCol>

    <!-- <div class="vl-parent">
        <loading v-model:active="loading"
                 :can-cancel="false"
                 :is-full-page="true"/>

    </div> -->
  </VRow>

</template>


<script lang="ts">
import axios from "axios";
import Constants from './Constants';


export default {
  data: function() {
    return {
      activeAddBookModal: false,
      addGeneracionForm: {
        title: "",
        author: "",
        read: [],
        id: "",
        idUser: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        texto1: "",
        texto2: "",
        texto3: "",
      },
      titulos: ["ID", "ID Usuario", "Imagen1", "Imagen2", "Imagen3", "texto1", "texto2", "texto3"],
      generaciones: [],
      message: "",
      showMessage: false,
      isLoading: true,
      fullPage: false,
    }
  },

  methods: {
    async getGeneraciones() {
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
      await axios.get(Constants.URL_BACK + "/generaciones/", config)
        .then(res => {
          this.generaciones = res.data.generaciones;
        })
        .catch(error => {
          console.error(error);
        });
        loader.hide();
        this.isLoading = false;
    },
  },
  created() {
    this.getGeneraciones();
  },
};
</script>