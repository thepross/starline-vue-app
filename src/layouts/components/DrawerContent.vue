<script setup lang="">
import upgradeBannerDark from '@/assets/images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@/assets/images/pro/upgrade-banner-light.png'
import logo from '@/assets/logo.svg?raw'
import logoT from '@/assets/images/logos/t.svg?raw'
import { computed } from 'vue'
import { VerticalNavLink, VerticalNavSectionTitle } from '@layouts'
import { useTheme } from 'vuetify'
import logoTiny from '@/assets/images/logos/t.png'

const vuetifyTheme = useTheme()
const auth = ref(null)
const autenticacion = computed(() => {
  return localStorage.getItem('token') != null
})
const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <!-- 👉 Nav header -->
  <div class="nav-header">
    <RouterLink
      to="/"
      class="app-logo d-flex align-center gap-x-3 app-title-wrapper"
    >
      <!-- ℹ️ You can also use img tag or VImg here -->

      <div v-html="logoT" />

      <Transition name="vertical-nav-app-title">
        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">STARLINE</h1>
      </Transition>
    </RouterLink>
  </div>

  <!-- 👉 Nav items -->
  <ul>

    
    <VerticalNavSectionTitle :item="{ heading: 'Principal' }" />
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span class="nav-item-title"> Menú Principal</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <VerticalNavLink
            :item="{
              title: 'Pagina Principal',
              to: 'index',
              icon: { icon: 'mdi-home-outline' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Configuración',
              to: 'account-settings',
              icon: { icon: 'mdi-account-cog-outline' },
            }"
          />
          <!-- 👉 Pages -->
          <VerticalNavSectionTitle
            v-if="auth"
            :item="{ heading: 'Pages' }"
          />
          <VerticalNavLink
            v-if="auth"
            :item="{
              title: 'Inicio de Sesión',
              to: 'login',
              target: '_blank',
              icon: { icon: 'mdi-login' },
            }"
          />
          <VerticalNavLink
            v-if="auth"
            :item="{
              title: 'Registro',
              to: 'register',
              target: '_blank',
              icon: { icon: 'mdi-account-plus-outline' },
            }"
          />

          <!-- ℹ️ This path doesn't exist so 404 route will catch this undefined path -->
          <!-- <VerticalNavLink
            :item="{
              title: 'Error',
              to: { path: '/error' },
              target: '_blank',
              icon: { icon: 'mdi-alert-circle-outline' }
            }"
          /> -->

        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    
    <!-- 👉 User Interface -->
    <VerticalNavSectionTitle :item="{ heading: 'Gestiones' }" />

    
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span class="nav-item-title"> Gestión de Imágenes</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <VerticalNavLink
            :item="{
              title: 'Mis Imágenes',
              to: 'imagenes',
              icon: { icon: 'mdi-image' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Recursos',
              to: 'recursos',
              icon: { icon: 'mdi-folder-image' },
            }"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <span class="nav-item-title"> Gestión de Recursos</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <VerticalNavLink
            :item="{
              title: 'Generaciones',
              to: 'generaciones',
              icon: { icon: 'mdi-folder-plus' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Crear Imágenes',
              to: 'crear-imagen',
              icon: { icon: 'mdi-image' },
            }"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>


    </v-expansion-panels>

    <VerticalNavSectionTitle :item="{ heading: 'Otros' }" />
    

    <v-expansion-panels>

    
      
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span class="nav-item-title"> Otros</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <VerticalNavLink
            :item="{
              title: 'Tipografía',
              to: 'typography',
              icon: { icon: 'mdi-alpha-t-box-outline' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Iconos',
              to: 'icons',
              icon: { icon: 'mdi-eye-outline' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Tarjetas',
              to: 'card-basic',
              icon: { icon: 'mdi-credit-card-outline' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Tables',
              to: 'tables',
              icon: { icon: 'mdi-table' },
            }"
          />
          <VerticalNavLink
            :item="{
              title: 'Form Layouts',
              to: 'form-layouts',
              icon: { icon: 'mdi-form-select' },
            }"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </ul>
</template>

<style lang="scss">
// .v-navigation-drawer {
//   height: 100%;

//   .v-navigation-drawer__content {
//     display: flex;
//     flex-direction: column;

//     > ul {
//       flex-grow: 1;
//     }
//   }
// }

.upgrade-banner {
  margin-top: auto;
  // position: absolute;
  // bottom: 13px;
  // left: 50%;
  // transform: translateX(-50%);
}
</style>
