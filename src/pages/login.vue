<script setup lang="ts">
import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
import logo from '@/assets/logo.svg?raw'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

const form = ref({
  email: '',
  password: '',
  remember: false,
})
const vuetifyTheme = useTheme()
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})
const isPasswordVisible = ref(false)


</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="logo" />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Materio
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Bienvenido! 👋🏻
        </h5>
        <p class="mb-0">
          Por favor inicia sesion para acceder.
        </p>
      </VCardText>

      <VCardText>
        <VForm v-on:submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="user"
                label="Nombre de Usuario"
                type="text"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="password"
                label="Contraseña"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Recuerdame"
                />

                <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Olvidaste la contraseña?
                </a>
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
              >
                Enviar
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>nuevo?</span>
              <RouterLink
                class="text-primary ms-2"
                :to="{ name: 'register' }"
              >
                Crea una cuenta
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">ó</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>

<script lang="ts">

import axios from 'axios'
import Constants from './Constants'

  export default {
    name: 'Login',
    components: {

    },
    data: function() {
      return {
        user: "",
        password: "",
        error: false, 
        message: "",
        url: Constants.URL_BACK,
      }
    },
    methods: {
      login() {
        let payload = {
          "user": this.user,
          "password": this.password,
        };
        axios.post(this.url + "/login", payload)
        .then((res) => {
          if (res.data.status == "ok") {
            localStorage.id = res.data.user.id;
            localStorage.user = res.data.user.username;
            localStorage.token = res.data.token;
            this.$router.push('/');
          } else {
            this.error = true;
            this.message = res.data.mensaje;
          }
          console.log(res.data.status)
        });
      }
    }

  }
</script>