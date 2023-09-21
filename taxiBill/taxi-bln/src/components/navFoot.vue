<script setup>
	import { useRouter } from "vue-router";
	const router = useRouter();
</script>

<template>
	<!-- SECTION - nav -->
	<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top">
		<div class="container-fluid">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				class="collapse navbar-collapse"
				id="navbarTogglerDemo03"
			>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="#home"
							>Home</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#overview"
							>Übersicht</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#moneyIncome"
							>Einnahmen</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#moneySpend"
							>Ausgaben</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#profil"
							>Profil</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#settings"
							>Einstellungen</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#contact"
							>Kontakt</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<!-- SECTION - Footer -->
	<footer class="footer mt-auto py-1 bg-light fixed-bottom">
		<div class="d-flex float-start">
			<a
				href="#impress"
				class="text-muted text-decoration-none bg-light px-3 py-1"
				style="font-size: 12px"
			>
				Impressum</a
			>
		</div>
		<div class="d-flex float-end">
			<a
				href="#copyright"
				class="text-muted text-decoration-none bg-light px-3 py-1"
				style="font-size: 12px"
			>
				&copy; BP 2023</a
			>
		</div>
	</footer>
</template>
