<script setup>
import { ref, onMounted } from 'vue'
import { HalfCircleSpinner } from 'epic-spinners'

const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = '' 
  }, 3000)
})
</script>

<template>
  <div v-if="loading" class="loading-overlay">
    <div class="spinner-container">
      <div class="mb-2">
        <img src="/img/logo-color.png" alt="Logo-pbx" class="img-fluid" width="250" />
      </div>
      <HalfCircleSpinner :animation-duration="1000" :size="70" color="#7AD100" />
    </div>
  </div>
</template>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 9999;
}

.spinner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
