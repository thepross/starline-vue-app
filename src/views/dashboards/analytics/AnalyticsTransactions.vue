<script setup>
import eCommerce2 from '@/assets/images/eCommerce/2.png'
import logoTiny from '@/assets/images/logos/logo-tiny.png'
import logoStarline from '@/assets/images/logos/logo-starline.png'

const statistics = [
  {
    title: 'Sales',
    stats: '245k',
    icon: 'mdi-trending-up',
    color: 'primary',
  },
  {
    title: 'Customers',
    stats: '12.5k',
    icon: 'mdi-account-outline',
    color: 'success',
  },
  {
    title: 'Product',
    stats: '1.54k',
    icon: 'mdi-cellphone-link',
    color: 'warning',
  },
  {
    title: 'Revenue',
    stats: '$88k',
    icon: 'mdi-currency-usd',
    color: 'info',
  },
]
</script>

<template>
  <VCard>
    <VCardText>
      <div align="center">
        <VImg
        width="337"
        :src="logoStarline"
      />
    </div>
        
    </VCardText>
  </VCard>
</template>
