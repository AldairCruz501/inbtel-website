<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

//Colores por ruta
const routeStyles: Record<string, {
  colorBeforeScroll: string
  colorAfterScroll: string
  btnClass: string
  logoBeforeScroll?: string
  logoAfterScroll?: string
  scrollBackgroundClass: string // <--- nueva propiedad
}> = {
  '/gamer': {
    colorBeforeScroll: 'text-gamer',
    colorAfterScroll: 'text-white',
    btnClass: 'btn-outline-gamer',
    logoBeforeScroll: '/img/logo-blanco.png',
    logoAfterScroll: '/img/logo-blanco.png',
    scrollBackgroundClass: 'bg-gamer'
  },
  '/negocios': {
    colorBeforeScroll: 'text-negocios',
    colorAfterScroll: 'text-white',
    btnClass: 'btn-outline-negocios',
    logoBeforeScroll: '/img/logo-color.png',
    logoAfterScroll: '/img/logo-blanco.png',
    scrollBackgroundClass: 'bg-negocios'
  },
  '/pymes': {
    colorBeforeScroll: 'text-pymes',
    colorAfterScroll: 'text-white',
    btnClass: 'btn-outline-pymes',
    logoBeforeScroll: '/img/logo-color.png',
    logoAfterScroll: '/img/logo-blanco.png',
    scrollBackgroundClass: 'bg-pymes'
  },
  // otras rutas...
}

// Rutas con estilo oscuro

const scrollBackgroundClass = computed(() => {
  const style = routeStyles[route.path]
  return isScrolled.value && style ? style.scrollBackgroundClass : ''
})


const showDarkStyle = computed(() => {
  // Solo se muestra fondo oscuro si está en ruta dark Y hay scroll
  return scrollBackgroundClass.value && isScrolled.value
})

// Clases para el navbar
const navClass = computed(() => ({
  scrolled: isScrolled.value && !scrollBackgroundClass.value,
  dark: showDarkStyle.value
}))

// Clases dinámicas para enlaces de navegación
const linkClass = computed(() => {
  const style = routeStyles[route.path]
  return style ? (isScrolled.value ? style.colorAfterScroll : style.colorBeforeScroll) : 'text-inbtel'
})


// Clases para el botón "Mi Cuenta"
const btnClass = computed(() => {
  const style = routeStyles[route.path]
  return style ? style.btnClass : 'btn-nav'
})

// Logo dinámico
const logoSrc = computed(() => {
  const style = routeStyles[route.path]
  if (style) {
    return isScrolled.value ? style.logoAfterScroll : style.logoBeforeScroll
  }
  return '/img/logo-color.png' // logo por defecto
})


const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse) {
    navbarCollapse.addEventListener('shown.bs.collapse', () => {
      isMenuOpen.value = true
    })
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      isMenuOpen.value = false
    })
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <header class="container-fluid">
    <!-- Desktop navbar -->
    <nav :class="['navbar navbar-expand-lg fixed-top py-3 d-none d-lg-block', navClass, scrollBackgroundClass]">
      <div class="container-fluid container-xl">
        <router-link class="navbar-brand" to="/">
          <img class="logo" :src="logoSrc" alt="logo" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="bi bi-list fs-1 color-burger"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-start ms-2" id="navbarNav">
          <ul class="navbar-nav align-items-center fw-bold">
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/residencial">Residencial</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/gamer">Gamer</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/television">Televisión</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/negocios">Negocios</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/pymes">Pymes</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/empresarial">Empresarial</router-link></li>
            <li class="nav-item dropdown mx-xl-2">
              <a class="nav-link dropdown-toggle" :class="linkClass" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oportunidades
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item fw-bold" to="/distribuidor-autorizado">Distribuidor Autorizado</router-link></li>
                <li><router-link class="dropdown-item fw-bold" to="/vendedor-comisionista">Vendedor Comisionista</router-link></li>
              </ul>
            </li>
            <li class="nav-item mx-xl-2">
              <a :class="['btn px-3', btnClass]" href="https://proxy.inbtel.com/accounts/login/?next=/panel/" target="_blank">Mi Cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mobile navbar -->
    <nav :class="['navbar navbar-expand-lg py-2 fixed-top d-block d-lg-none', navClass, scrollBackgroundClass, { show: isMenuOpen }]">
      <div class="container-fluid container-xl">
        <router-link class="navbar-brand" to="/">
          <img :src="logoSrc" alt="logo" height="50" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="bi bi-list fs-1 color-burger"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center fw-bold">
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/residencial">Residencial</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/gamer">Gamer</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/television">Televisión</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/negocios">Negocios</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/pymes">Pymes</router-link></li>
            <li class="nav-item mx-xl-2"><router-link class="nav-link" :class="linkClass" to="/empresarial">Empresarial</router-link></li>
            <li class="nav-item dropdown mx-xl-2">
              <a class="nav-link dropdown-toggle" :class="linkClass" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oportunidades
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><router-link class="dropdown-item fw-bold" to="/distribuidor-autorizado">Distribuidor Autorizado</router-link></li>
                <li><router-link class="dropdown-item fw-bold" to="/vendedor-comisionista">Vendedor Comisionista</router-link></li>
              </ul>
            </li>
            <li class="nav-item mx-xl-2 ">
              <a :class="['btn px-3', btnClass]" href="https://proxy.inbtel.com/accounts/login/?next=/panel/" target="_blank">Mi Cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background: transparent;
  transition: background-color 0.4s ease-in-out;
}

.navbar {
  background-color: transparent;
  transition: background-color 0.4s ease;
}

.navbar.scrolled {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.bg-gamer{
  background-color: #00133E;
}

.bg-negocios {
  background-color: #F27900;
}

.bg-pymes {
  background-color: #1978A4;
}

.logo {
  height: 65px;
}

.text-white:hover {
  border: 1px solid #FFFFFF ;
  border-radius: 3px;
}

.text-inbtel{
  transition: color 0.3s ease;
  color: #396E4B;
}

.text-gamer {
  transition: color 0.3s ease;
  color: #54e1fb;
}

.text-negocios {
  transition: color 0.3s ease;
  color: #F27900;
}

.text-pymes {
  transition: color 0.3s ease;
  color: #0061aa;
}

.text-gamer:hover {
  color: #FFFFFF !important;
    border: 1px solid #54e1fb ;
  border-radius: 3px;
}

.text-inbtel:hover {
  color: #95C83C !important;
  border: 1px solid #95C83C;
  border-radius: 3px;
}

.text-negocios:hover {
  color: #D73D5D!important;
  border: 1px solid #D73D5D;
  border-radius: 3px;
}

.text-pymes:hover {
  color: #64B7D9!important;
  border: 1px solid #64B7D9;
  border-radius: 3px;
}



.dropdown-menu {
  background-color: #ffffff !important;
}

.dropdown-item {
  background-color: #ffffff;
  color: #396E4B;
}

.dropdown-item:hover {
  background-color: #ffffff;
  color: #95C83C;
}

.btn-nav {
  background-color: #6ACAAC;
  color: #ffffff;
  font-weight: bold !important
}

.btn-nav:hover {
  color: #6ACAAC !important;
  border: 1px solid #6ACAAC;
}

.btn-outline-gamer {
  background-color: #54e1fb;
  color: #FFFFFF;
  font-weight: bold !important;
}

.btn-outline-gamer:hover {
  border: 1px solid #54e1fb;
  background-color: transparent;
  color: #54e1fb;
}

.btn-outline-negocios {
  background-color: #D73D5D; 
  color: #FFFFFF;
  font-weight: bold !important;
}

.btn-outline-negocios:hover {
  border: 1px solid #D73D5D;
  background-color: #ffffff;
  color: #D73D5D;
}

.btn-outline-pymes {
  background-color: #64B7D9; 
  color: #FFFFFF;
  font-weight: bold !important;
}

.btn-outline-pymes:hover {
  border: 1px solid #00A0B0;
  background-color: #ffffff;
  color: #00A0B0;
}

.navbar-toggler {
  border: none !important;
}

.color-burger {
  color: #95C83C !important;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .logo {
    height: 45px;
  }
}

@media (max-width: 991.98px) {
  .navbar-nav,
  nav {
    padding: 1rem;
  }
}
</style>


