
<script setup lang="ts">
import TableBasic from '@/views/user-interface/tables/TableBasic.vue';
</script>

<template>
  <VRow>
    <!-- dark -->
    <VCol cols="12">
      <VCard title="Gestión de Generaciones">
        <VCardText> Generaciones para la gestion del modelo de imagenes. </VCardText>
        <TableBasic :data="generaciones" :titles="titulos" />
      </VCard>
    </VCol>
  </VRow>

</template>


<script lang="ts">
import axios from "axios";
import Constants from './Constants';

export default {
  data() {
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
    };
  },

  methods: {
    getGeneraciones() {
      axios
        .get(Constants.URL_BACK + "/generaciones")
        .then((res) => {
          this.generaciones = res.data.generaciones;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getGeneraciones();
  },
};
</script>