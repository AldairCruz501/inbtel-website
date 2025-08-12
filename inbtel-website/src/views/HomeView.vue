<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	// import CountCircleMBPS from '../components/CountCircleMBPS.vue';
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import InbtelAppComponent from '../components/InbtelAppComponent.vue';
	import ExtComponent from '../components/ExtComponent.vue';
	import LoaderComponent from '../components/LoaderComponent.vue';
	// import { residencialData } from '../data/residencial';

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
	<LoaderComponent />
	<HeaderComponent />
	<section class="hero-main d-none d-lg-flex align-items-center"  v-if="!loading">
		<div class="container-fluid width-text">
			<div class="row"
				v-motion-slide-visible-left
				:delay="200"
				:duration="1200"
			>
				<div class="col-lg-6 text-uppercase">
					<h3 class="display-6 subtitle-text fw-bold m-0">Conectamos tu</h3>
					<h1 class="display-text fw-bold title-text">Hogar</h1>
					<div class="d-flex align-items-center">
						<img src="/img/inicio/icono-nvo-4.png" alt="img-internet" class="img-fluid" width="140">
						<img src="/img/inicio/icono-nvo-3.png" alt="img-telefono" class="img-fluid" width="130">
						<img src="/img/inicio/icono-nvo-2.png" alt="img-tv" class="img-fluid" width="140">
						<img src="/img/inicio/icono-nvo-1.png" alt="img-celular" class="img-fluid" width="130">
					</div>
				</div>
			</div>
  		</div>
	</section>
	<section class="hero-main-responsive d-block d-lg-none position-relative overflow-hidden">
		<div class="container-fluid width-text position-absolute top-0 start-50 translate-middle-x text-center text-white px-3 mb-5 w-100 pt-5 mt-5">
			<div class="row mt-4 mt-lg-0">
				<div class="text-uppercase">
					<h3 class="fs-2 subtitle-text fw-bold lh-1 m-0">Conectamos tu</h3>
					<h1 class="display-1 fw-bold title-text lh-1 m-0">Hogar</h1>
					<div class="d-flex justify-content-center align-items-center m-0">
						<img src="/img/inicio/icono-nvo-4.png" alt="img-internet" class="img-fluid" width="70">
						<img src="/img/inicio/icono-nvo-3.png" alt="img-telefono" class="img-fluid" width="70">
						<img src="/img/inicio/icono-nvo-2.png" alt="img-tv" class="img-fluid" width="70">
						<img src="/img/inicio/icono-nvo-1.png" alt="img-celular" class="img-fluid" width="70">
					</div>
				</div>
			</div>
  		</div>
	</section>
	<section class="hero position-relative overflow-hidden" style="min-height: 85vh;">
		<video autoplay muted loop playsinline class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover">
			<source src="/img/inicio/yo-soy-inbtel.mp4" type="video/mp4">
		</video>
		<div class="position-absolute top-0 start-0 w-100 h-100" style="background: linear-gradient(to top, #396E4B, rgba(57, 110, 75, 0));"></div>
		<div class="position-absolute bottom-0 start-50 translate-middle-x text-center text-white px-3 mb-5 w-100"
				v-motion-fade-visible
				:delay="200"
				:duration="1200"
		>
			<img src="/img/logo-blanco.png" alt="INBTEL Comunicaciones" class="mb-4 img-inbi">
			<p class="lead fw-medium fs-4" style="max-width: 950px; margin: 0 auto;">
				<span class="fw-bold">¡Más cerca que nunca!</span> <br>
				Disfruta de nuestros servicios en Tampico, Cd. Madero, Altamira y Reynosa, Tamaulipas. Conéctate con la mejor velocidad y entretenimiento donde tú estés.
			</p>
		</div>
	</section>
	<section class="jumbotron-main d-none d-lg-flex align-items-center">
		<div class="container-fluid width-text">
			<div class="row"
				v-motion-slide-visible-bottom
				:delay="200"
				:duration="1200"
			>
				<div class="col-lg-6">
					<h3 class="display-6 subtitle-text fw-bold text-uppercase">Complementa tu</h3>
					<h2 class="display-1 fw-bold title-text text-uppercase">Diversión</h2>
					<p class="text-dark fs-5">
						Añade nuestro paquete de televisión con alta <br> 
						definición a tu servicio de internet por fibra <br>
						óptica y no te pierdas de tus peliculas y <br>
						series favoritas.
					</p>
					<h4 class="fw-bold display-3 text-uppercase title-text">
						<span class="display-6 subtitle-text fw-bold">Desde</span>
						$149/mes
					</h4>
				</div>
			</div>
  		</div>
	</section>
	<section class="jumbotron-main-responsive d-block d-lg-none position-relative overflow-hidden">
		<div class="container-fluid width-text position-absolute top-0 start-50 translate-middle-x text-center text-white px-3 mb-5 w-100 pt-5">
			<div class="row mt-3 mt-lg-0">
				<div class="col-12">
					<h3 class="fs-2 subtitle-text fw-bold text-uppercase m-0 lh-1">Complementa tu</h3>
					<h2 class="display-1 fw-bold title-text text-uppercase m-0 lh-1">Diversión</h2>
					<p class="text-dark fs-5 mt-2">
						Añade nuestro paquete de televisión con alta definición 
						a tu servicio de internet por fibra óptica y no te pierdas de
						tus peliculas y series favoritas.
					</p>
					<h4 class="fw-bold display-3 text-uppercase title-text">
						<span class="display-6 subtitle-text fw-bold">Desde</span>
						$149/mes
					</h4>
				</div>
			</div>
  		</div>
	</section>
	<section class="jumbotron-ideal d-none d-lg-flex align-items-center">
		<div class="container-fluid width-text">
			<div class="row flex-lg-row-reverse"
				v-motion-fade-visible
				:delay="200"
				:duration="1200"
				>
				<div class="col-lg-6 mt-5">
					<img src="/img/logo-blanco.png" alt="Logo INBTEL" class="logo-ideal mb-3" />
					<h3 class="display-1 text-white fw-bold text-uppercase m-0">El plan ideal</h3>
					<h2 class="title-ideal fw-bold title-text text-uppercase m-0">Para Ti</h2>
				</div>
			</div>
  		</div>
	</section>
	<section class="jumbotron-ideal-responsive d-block d-lg-none position-relative overflow-hidden">
		<div class="container-fluid width-text position-absolute bottom-0 start-50 translate-middle-x text-center text-white px-3 mb-5 w-100 pt-5">
			<div class="row mt-3 mt-lg-0">
				<div class="col-12 mt-5">
					<img src="/img/logo-blanco.png" alt="Logo INBTEL" class="logo-ideal mb-3" />
					<h3 class="display-1 text-white fw-bold text-uppercase m-0 lh-1">El plan ideal</h3>
					<h2 class="title-ideal fw-bold title-text text-uppercase m-0 lh-1">Para Ti</h2>
				</div>
			</div>
  		</div>
	</section>
	<!-- <section class="bg-plans py-5">
		<div class="container pt-lg-3 mt-lg-2">
			<div class="text-center">
				<h2 
					class="text-uppercase display-1 fw-bold subtitle-text"
					v-motion-slide-visible-top
					:delay="200"
					:duration="1200"
				>
				INTERNET POR FIBRA ÓPTICA
			</h2>
			</div>
			<div class="row  p-md-5 p-lg-4 g-5">
				<div v-for="plan in residencialData.plansInt" class="col-12 col-md-6 col-xl-4">
					<div class="card text-center border-color-card h-100 d-flex shadow">
						<div class="card-header fs-3 fw-bold">
							Plan {{ plan.nombre }}
						</div>
						<div class="card-body">
							<CountCircleMBPS :value="Number(plan.mbps)" />
							<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
								<div class="border icon-circle p-3 shadow">
									<img src="/img/inicio/icono-internet.png" alt="" class="mx-auto" width="25">
								</div>
								<div class="border icon-circle p-3 shadow">
									<img src="/img/inicio/icono-telefonia.png" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.simetrico" class="border icon-circle p-3 shadow">
									<img :src="plan.simetrico" alt="" class="mx-auto" width="25">
								</div>
								<div v-if="plan.repetidor" class="border icon-circle p-3 shadow">
									<img :src="plan.repetidor" alt="" class="mx-auto" width="25">
								</div>
							</div>
							<p class="fs-5">Internet + Telefonía</p>
							<h5 class="card-title subtitle-text display-3 fw-semibold">
								${{ plan.precio }}<small class="small fs-5">/Mensual</small>
							</h5>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p v-if="plan.wifi" class="card-text fs-4 m-0">{{plan.wifi}}</p>
							<p v-if="plan.repwifi" class="card-text fs-4 m-0">{{plan.repwifi}}</p>
							<p class="card-text fs-4">{{ plan.sub1 }} <span class="title-text fw-semibold">{{ plan.sub2 }}</span></p>
							<p class="card-text fs-4 m-0">Llamadas ilimitadas</p>
							<p class="card-text fs-6 text-uppercase">USA|MEX|Canada</p>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p class="card-text fs-4 m-0">Pronto Pago</p>
							<h6 class="card-title subtitle-text display-5 fw-semibold">
								${{ plan.pago }}<small class="small fs-5">/Mensual</small>
							</h6>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<a href="https://wa.link/w28bec" target="_blank" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
						</div>
						<div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
							Folio ift: {{ plan.folioIFT }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<ExtComponent />
	<section class="jumbotron-gamer d-none d-lg-flex align-items-center">
		<div class="container-fluid width-text">
			<div class="row flex-lg-row-reverse"
				v-motion-slide-visible-bottom
				:delay="200"
				:duration="1200"
			>
				<div class="col-lg-5">
					<img src="/img/inicio/logo-planes-gamer.png" alt="Logo INBTEL" class="img-fluid mb-5" />
					<h4 class="fs-2 text-white fw-bolder text-uppercase m-0">
						Domina la <span class="gamer-text">partida</span> con nuestra
					</h4>
					<h2 class="display-5 fw-bold title-text text-uppercase m-0">Conexión ultra rápida</h2>
					<p class="mt-1 text-white fs-4">
						<span class="fw-bold">¿Listo para llevar tu juego al siguiente nivel?</span> Nuestra conexión
						de alta velocidad te pone al mando. Descargas instantáneas, actualizaciones sin demoras y partidas
						imparables te esperan. No juegues, domina.
					</p>
					<router-link to="/gamer"class="btn btn-gamer fw-bold fs-5">
						Ver planes
					</router-link>
				</div>
			</div>
  		</div>
	</section>
	<section class="jumbotron-gamer-responsive d-block d-lg-none position-relative overflow-hidden">
		<div class="container-fluid width-text position-absolute top-0 start-50 translate-middle-x text-center text-white px-3 mb-5 w-100 pt-5">
			<div class="row mt-3 mt-lg-0">
				<div class="col-13">
					<img src="/img/inicio/logo-planes-gamer.png" alt="Logo INBTEL" class="img-fluid w-75 mb-3" />
					<h4 class="fs-3 text-white fw-bolder text-uppercase m-0">
						Domina la <span class="gamer-text">partida</span> con nuestra
					</h4>
					<h2 class="display-5 fw-bold title-text text-uppercase m-0">Conexión ultra rápida</h2>
					<p class="mt-1 text-white fs-5">
						<span class="fw-bold">¿Listo para llevar tu juego al siguiente nivel?</span> Nuestra conexión
						de alta velocidad te pone al mando. Descargas instantáneas, actualizaciones sin demoras y partidas
						imparables te esperan. No juegues, domina.
					</p>
					<button class="btn btn-gamer fw-bold fs-5">
						Ver Planes
					</button>
				</div>
			</div>
  		</div>
	</section>
	<InbtelAppComponent />
	<!-- <CovaregeMap /> -->
	<FooterComponent />
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden !important;
}

html {
  overflow-x: hidden !important;
}

.hero-main {
	background-image: url('/img/inicio/banner-inicio-1.png'); 
	background-size: cover; 
	min-height: 100vh;
}
.hero-main-responsive {
  background-image: url('/img/inicio/banner-inicio-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 110vh;
  color: #fff;
  position: relative;
  z-index: 1;
}
.jumbotron-main {
	background-image: url('/img/inicio/fondo-canalestv-1.png'); 
	background-size: cover; 
	background-position: center;
	background-repeat: no-repeat;
	min-height: 100vh;
}
.jumbotron-main-responsive {
	background-image: url('/img/inicio/fondo-canalestv-2.png'); 
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 115vh;
	color: #fff;
	position: relative;
	z-index: 1;
}
.jumbotron-ideal {
	background-image: url('/img/inicio/fondo-planideal-1.png'); 
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 115vh;
	color: #fff;
	position: relative;
	z-index: 1;
}
.jumbotron-ideal-responsive {
	background-image: url('/img/inicio/fondo-planideal-2.png'); 
	background-size: cover; 
	min-height: 100vh;
}
.bg-plans {
  background-image: url('/img/inicio/fondo-inicio-6.png');
  background-size: cover; 
  min-height: 100vh; /* valor base para XS */
}
.jumbotron-gamer {
	background-image: url('/img/inicio/fondo-gamer-1.png'); 
	background-size: cover; 
	min-height: 105vh;
}
.jumbotron-gamer-responsive {
	background-image: url('/img/inicio/fondo-gamer-2.png'); 
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 115vh;
	color: #fff;
	position: relative;
	z-index: 1;
}
.width-text {
	width: 90%;
}
.img-inbi {
	width: 25%;
}
.subtitle-text {
	color: #396E4B !important;
}
.title-text {
	color: #7AD100 !important
}
.gamer-text {
	color: #54e1fb !important;
}
.btn-gamer {
	background-color: #7AD100 !important;
	color: #FFFFFF !important;
}
.logo-ideal {
	height: 60px;
}

.display-text {
	font-size: 8.5rem;
}
.title-ideal {
	font-size: 8.5rem;
}

.border-color {
	border: 2px solid #396E4B !important;
}

.border-bottom-color {
	border-bottom: 2px solid #396E4B !important;
	width: 50% !important;
}

.border-color-card {
	border: 1px solid #396E4B;
}

.btn-primary {
	background-color: #396E4B !important;
	border: 1px solid	#396E4B !important;
}

.btn-primary:hover {
	background-color: #ffffff !important;
	border: 1px solid	#396E4B !important;
	color: #396E4B;
}

.btn-light {
	background-color: #ffffff;
	border: 1px solid	#396E4B !important;
	color: #396E4B;
}

.btn-light:hover {
	background-color: #396E4B;
	border: 1px solid #ffffff !important;
	color: #ffffff;
}

.card-header {
	background-color: #396E4B;
	color: #ffffff;
}

.plan-circle {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	margin: 0 auto 1rem auto;
	flex-direction: column;
}

.icon-circle {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	flex-direction: column;
}

.contenedor-info {
	width: 90% !important;
}


.bg-porta .img-porta {
  max-width: 100%;
  height: auto;
}

@media (max-width: 991.98px) {
	.title-ideal {
		font-size: 6.5rem;
	}
	  .img-inbi {
	width: 50%;
}
}

@media (max-width: 768px) {
  .bg-porta .fondo {
    padding: 2rem 1rem;
  }

  .bg-porta .row.align-items-center {
    text-align: center;
  }

  .bg-porta .col-md-6 img {
    margin-bottom: 1rem;
  }
}

@media (max-width: 575.98px) {
	.title-ideal {
		font-size: 4.5rem;
	}
	.img-inbi {
		width: 80%;
	}
}
</style>