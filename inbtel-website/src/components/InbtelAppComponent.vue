<script setup lang="ts">
</script>

<template>
  <section class="jumbotron-app d-flex align-items-center">
    <div class="container width-text py-5 px-3">
      <div class="row"
      	v-motion-slide-visible-left
				:delay="200"
				:duration="1200"
      >
        <div class="col-lg-6">
          <h4 class="display-6 display-md-4 fw-bolder text-uppercase m-0 subtitle-text">
            Descarga
          </h4>
          <h2 class="display-3 display-md-1 fw-bold title-text text-uppercase m-0">
            Nuestra App
          </h2>
          <ul class="fs-5 fs-md-3 fw-bold mt-3 mb-4 custom-list">
            <li>Revisa Facturas</li>
            <li>Paga tus Facturas</li>
            <li>Visualiza tu Servicio</li>
            <li>Cambia la Contraseña</li>
          </ul>
          <div class="d-flex flex-wrap align-items-start gap-3">
            <a href="https://play.google.com/store/apps/details?id=inbtel.com&hl=es_419&pli=1" target="_blank" class="text-decoration-none">
              <img src="/img/btn-play-store.png" alt="btn-play-store" class="img-fluid" style="max-width: 180px;">
            </a>
            <a href="https://apps.apple.com/us/app/inbtel/id6474140660" target="_blank" class="text-decoration-none">
              <img src="/img/btn-app-store.png" alt="btn-app-store" class="img-fluid" style="max-width: 165px;">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron-app {
  background-image: url('/img/inicio/nuestra-app.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.subtitle-text {
  color: #396E4B !important;
}

.title-text {
  color: #7AD100 !important;
}

.custom-list {
  list-style: none;
  padding-left: 0;
}

.custom-list li::before {
  content: "●";
  color: #00c2a8;
  font-size: 2.5rem;
  display: inline-block;
  width: 2rem;
  margin-right: 0.5rem;
}

.custom-list li {
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

/* Responsivo adicional */
@media (max-width: 576px) {
  .title-text {
    font-size: 2.5rem !important;
  }

  .subtitle-text {
    font-size: 1.5rem !important;
  }

  .custom-list li {
    font-size: 1.2rem;
  }
}
</style>
