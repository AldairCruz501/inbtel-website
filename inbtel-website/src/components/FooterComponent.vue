<script setup lang="ts">
// import WhatsappChatComponent from './WhatsappChatComponent.vue';

</script>

<template>
  <footer class="text-white footer-gradient pt-5">
    <div class="container text-center text-md-start">
      <div class="row">
        <!-- Logo y redes -->
        <div class="col-lg-3 mb-4 mt-4 text-center">
          <img src="/img/logo-blanco.png" alt="Logo INBTEL" class="logo mb-3" />
          <div class="text-center mt-2">
            <h6 class="fw-bold fs-4">Síguenos</h6>
          </div>
          <div class="d-flex gap-3 justify-content-center">
            <div class="border rounded-1 p-1 bg-white">
              <a href="https://www.facebook.com/INBTEL" class="text-white m-1" target="_blank"><i class="bi bi-facebook fs-5 title-text"></i></a>
            </div>
            <div class="border rounded-1 p-1 bg-white">
              <a href="https://www.instagram.com/inbtel/" class="text-white m-1" target="_blank"><i class="bi bi-instagram fs-5 title-text"></i></a>
            </div>
            <div class="border rounded-1 p-1 bg-white">
              <a href="https://x.com/INBTELMX" class="text-white m-1" target="_blank"><i class="bi bi-twitter-x fs-5 title-text"></i></a>
            </div>
          </div>
        </div>

        <!-- Enlaces -->
        <div class="col-lg-3 mb-4 mt-4">
          <h6 class="fw-bold mb-3 fs-3">Enlaces</h6>
          <ul class="list-unstyled">
            <li><router-link to="/residencial" class="text-white text-decoration-none">Planes Residenciales</router-link></li>
            <li><router-link to="/gamer" class="text-white text-decoration-none">Planes gamer</router-link></li>
            <li><router-link to="/cobertura" class="text-white text-decoration-none">Cobertura</router-link></li>
            <li><router-link to="/empresarial" class="text-white text-decoration-none">Servicios Voz IP</router-link></li>
            <li><router-link to="/contacto" class="text-white text-decoration-none">Contacto</router-link></li>
            <!-- <li><router-link to="/" class="text-white text-decoration-none">Recomienda y gana</router-link></li> -->
            <li><router-link to="/terminos-y-condiciones" class="text-white text-decoration-none">Términos y Condiciones</router-link></li>
            <li><router-link to="/aviso-de-privacidad" class="text-white text-decoration-none">Aviso de Privacidad</router-link></li>
          </ul>
        </div>

        <!-- Atención a Clientes -->
        <div class="col-lg-3 mb-4 mt-4">
          <h6 class="fw-bold mb-3 fs-3">Atención a Clientes</h6>
          <p class="mb-1">Quejas y aclaraciones</p>
          <p class="mb-1">833 526 0000</p>
          <p class="mb-3">Horario:<br>Lunes a Viernes 8:00am a 6:00pm<br>Sábado: 8:00am a 2:00pm</p>
          <h6 class="fw-bold mb-1">Soporte Técnico</h6>
          <p class="mb-1">833 526 0000</p>
          <p>Lunes a Domingo: 24Hrs</p>
        </div>

        <!-- Legal -->
        <div class="col-lg-3 mb-4 mt-4">
          <h6 class="fw-bold mb-3 fs-3">Legal</h6>
          <ul class="list-unstyled">
            <li><a href="/codigo-gestion-trafico" target="_blank" class="text-white text-decoration-none">Código de Política de Gestión de Tráfico</a></li>
            <li><a href="/lineamientos-de-informacion" target="_blank" class="text-white text-decoration-none">Lineamientos de información</a></li>
            <li><a href="/colaboracion-con-la-justicia" target="_blank" class="text-white text-decoration-none">Colaboración con la justicia</a></li>
            <li><a href="/contrato-dobleplay" target="_blank" class="text-white text-decoration-none">Contrato PROFECO DoblePlay</a></li>
            <li><a href="/contrato-tripleplay" target="_blank" class="text-white text-decoration-none">Contrato PROFECO TriplePlay</a></li>
            <li><a href="/derechos-usuarios" target="_blank" class="text-white text-decoration-none">Derechos de los usuarios</a></li>
            <li><a href="/cod-practicas-comerciales" class="text-white text-decoration-none">Código de Prácticas Comerciales</a></li>
            <li><a href="http://ucsweb.ift.org.mx/vrpc/" target="_blank" class="text-white text-decoration-none">Cobertura Nacional</a></li>
            <li><a href="http://ucsweb.ift.org.mx/ift_visor/" target="_blank" class="text-white text-decoration-none">Tarifas</a></li>
            <li><a href="/tarifas-doble-play" class="text-white text-decoration-none">Tarifas Registradas Doble Play ante la IFT</a></li>
            <li><a href="/tarifas-triple-play" class="text-white text-decoration-none">Tarifas Registradas Triple Play ante la IFT</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center py-3 mt-4" style="border-color: rgba(255,255,255,0.1) !important;">
      © 2025 Todos los derechos reservados por <span class="fw-bold">INBTEL</span>.
    </div>
  </footer>
  <!-- <WhatsappChatComponent /> -->
</template>

<style scoped>
.footer-gradient {
  background: linear-gradient(90deg, #00133E 0%, #376949 100%);
}

.logo {
  height: 70px;
}

a.text-white:hover {
  text-decoration: underline;
}

.title-text {
	color: #7AD100 !important
}
</style>
