<script setup lang="ts">
</script>

<template>
	<section class="bg-porta ">
		<div class="fondo d-none d-xl-flex align-items-center">
			<div class="container-fluid contenedor-info">
				<div class="row g-0 align-items-center"
					v-motion-fade-visible 
					:delay="200"
					:duration="1200"
				>
					<div class="col-md-6 d-flex align-items-center mb-4 mb-md-0">
						<img src="/img/inicio/extensor-nvo.png" alt="Extensor WiFi" class="img-porta" style="max-width: 450px;">
						<div>
							<h5 class="title-text fw-bold display-6"><span class="subtitle-text">EXTENSOR</span> WiFi</h5>
							<p class="mb-0 fs-5">Potencia tu experiencia online al máximo con nuestro potente extensor de WiFi.
							Olvídate de las zonas muertas y disfruta de una conexión sin interrupciones en cada rincón de tu hogar.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex align-items-center">
						<img src="/img/inicio/porta-nvo.png" alt="Teléfono" class="img-porta" style="max-width: 400px;">
						<div>
							<h5 class="title-text fw-bold fs-1"><span class="subtitle-text">PORTA TU</span> NÚMERO</h5>
							<p class="mb-0 fs-5">Mantén el mismo número de tu casa al contratar un plan de internet con nosotros.
							Realiza la portabilidad marcando al <strong>833 526 0000</strong></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-porta">
		<div class="fondo-responsive d-block d-xl-none align-items-center pt-lg-5">
			<div class="container-fluid contenedor-info">
				<div class="row g-0 align-items-center">
					<div class="col-12 d-flex flex-column align-items-center mb-4">
						<img src="/img/inicio/extensor-nvo.png" alt="Extensor WiFi" class="img-fluid" style="max-width: 200px;">
						<div class="text-center">
							<h5 class="title-text fw-bold fs-2">
								<span class="subtitle-text">EXTENSOR</span> WiFi
							</h5>
							<p class="mb-0 fs-6">
								Potencia tu experiencia online al máximo con nuestro potente extensor de WiFi.
								Olvídate de las zonas muertas y disfruta de una conexión sin interrupciones en cada rincón de tu hogar.
							</p>
						</div>
					</div>
					<div class="col-12 d-flex flex-column align-items-center">
						<img src="/img/inicio/porta-nvo.png" alt="Teléfono" class="img-porta" style="max-width: 250px;">
						<div class="text-center">
							<h5 class="title-text fw-bold fs-2">
								<span class="subtitle-text">PORTA TU</span> NÚMERO
							</h5>
							<p class="mb-0 fs-6">
								Mantén el mismo número de tu casa al contratar un plan de internet con nosotros.
								Realiza la portabilidad marcando al <strong>833 526 0000</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.bg-porta .fondo {
  background-image: url('/img/inicio/fondo-porta-1.png'); /* Reemplázala si tienes otra */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 110vh;
}
.bg-porta .fondo-responsive {
  background-image: url('/img/inicio/fondo-porta-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 110vh;
  position: relative;
  z-index: 1;
}
.subtitle-text {
	color: #396E4B !important;
}
.title-text {
	color: #7AD100 !important
}
.contenedor-info {
	width: 90% !important;
}

.bg-porta .img-porta {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .bg-porta .fondo-responsive {
    padding: 2rem 1rem;
  }

  .bg-porta .row.align-items-center {
    text-align: center;
  }

  .bg-porta .col-md-6 img {
    margin-bottom: 1rem;
  }
}
</style>