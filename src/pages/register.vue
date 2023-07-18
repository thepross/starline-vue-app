<script setup lang="ts">
import logoT from '@/assets/images/logos/t.svg?raw'
import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

const form = ref({
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
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
            <div v-html="logoT" />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          STARLINE
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Crea tu cuenta para poder empezar!
        </h5>
        <p class="mb-0">
          Empieza a crear imagenes, afiches o posters.
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="register">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField
                v-model="username"
                label="Nombre de Usuario"
              />
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="email"
                label="Correo"
                type="email"
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
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox
                  id="privacy-policy"
                  v-model="form.privacyPolicies"
                  inline
                />
                <VLabel
                  for="privacy-policy"
                  style="opacity: 2;"
                >
                  <span class="me-1">Estoy de acuerdo con la </span>
                  <a
                    href="javascript:void(0)"
                    class="text-primary"
                  >politica de p/t</a>
                </VLabel>
              </div>

              <VBtn
                block
                type="submit"
              >
                Registrarse
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>¿Ya tienes una cuenta?</span>
              <RouterLink
                class="text-primary ms-2"
                to="login"
              >
                Inicia Sesión
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
    name: 'Register',
    components: {

    },
    data: function() {
      return {
        username: "",
        email: "",
        password: "",
        privacyPolicies: false,
        error: false, 
        message: "",
      }
    },
    methods: {
      async register() {
        let loader = this.$loading.show({
            container: null,
            canCancel: false,
            color: '#9155FD',
            loader: 'spinner',
            width: 44,
            height: 44,
        });
        let payload = {
          "user": this.username,
          "password": this.password,
          "email": this.email,
        };
        console.log(payload)
        await axios.post(Constants.URL_BACK + "/register", payload)
        .then((res) => {
          if (res.data.status == "ok") {
            localStorage.registered = 1
            // localStorage.id = res.data.user.id;
            // localStorage.user = res.data.user.username;
            // localStorage.token = res.data.token;
            this.$router.push('/login');
          } else {
            this.error = true;
          }
          console.log(res.data.status)
          console.log(res.data.message)
        });
        loader.hide();
      }
    }

  }
</script>