<script setup></script>
<template>
	<section
		class="h-100 gradient-form"
		style="background-color: #eee"
	>
		<div class="container py-3 h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-xl-10">
					<div class="card rounded-3 text-black">
						<div class="row g-0">
							<div class="col-lg-6">
								<div class="card-body p-md-2 mx-md-4 bg-white rounded-4">
									<div class="login rounded-4 mt-3">
										<div class="text-center">
											<img
												src="src/assets/logo.png"
												style="width: 300px"
												alt="logo"
											/>
										</div>
									</div>
									<form>
										<p class="pt-3">LOGIN</p>
										<div class="form-outline mb-4">
											<input
												type="email"
												id="form2Example11"
												class="form-control"
												placeholder="Telefonnummer"
											/>
										</div>

										<div class="form-outline mb-4">
											<input
												type="password"
												id="form2Example22"
												class="form-control"
												placeholder="Passwort"
											/>
										</div>
										<div
											class="d-flex align-items-center justify-content-left pb-4"
										>
											<button
												type="button"
												class="btn btn-outline-warning"
											>
												Anmelden
											</button>
										</div>
										<div
											class="d-flex align-items-center justify-content-center pb-4"
										>
											<p class="mb-0 me-2 text-muted">
												<small>Neu hier ?</small>
											</p>
											<button
												type="button"
												class="btn btn-outline-secondary btn-sm"
											>
												Registrieren
											</button>
										</div>
									</form>
								</div>
							</div>
							<!-- <div class="col-lg-6 d-flex align-items-center">
								<div class="text-black px-3 py-4 p-md-5 mx-md-4">
									<h4 class="mb-4">We are more than just a company</h4>
									<p class="small mb-0">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
