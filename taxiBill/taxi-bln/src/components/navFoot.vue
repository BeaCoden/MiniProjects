<script setup></script>

<template>
	<!-- SECTION - Heading -->
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
			<p class="navbar-brand fw-bold fs-6 text-uppercase pt-4">Taxi Billing</p>
			<img
				class="float-end"
				width="65"
				height="65"
				src="src/assets/Taxi.png"
				alt="picture of cartoon taxi driver"
			/>
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
							href="#summary"
							>Summary</a
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
							>Settings</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#logout"
							>Login</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#logout"
							>Logout</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<!-- SECTION - Footer -->
	<!-- <footer class="footer mt-auto py-3 bg-light fixed-bottom">
		<div class="container">
			<small class="text-muted"> <a href="#impress">impress</a></small>
		</div>
	</footer> -->
</template>
