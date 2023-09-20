<script setup></script>
<template>
	<div class="container px-4 py-5 mx-auto">
		<div class="card card0">
			<div class="d-flex flex-lg-row flex-column-reverse">
				<div class="card card1">
					<div class="row justify-content-center my-auto">
						<div class="col-md-8 col-10 my-5">
							<img
								class="d-block w-100"
								src="src/assets/logo.png"
								alt=""
							/>
							<h1>Login</h1>

							<div class="form-group">
								<label class="form-control-label text-muted"></label>
								<input
									type="integer"
									id="phoneNumber"
									name="phoneNumber"
									placeholder="Phone Number"
									class="form-control"
								/>
							</div>
							<div class="form-group">
								<label class="form-control-label text-muted"></label>
								<input
									type="password"
									id="psw"
									name="psw"
									placeholder="Password"
									class="form-control"
								/>
							</div>
							<div class="row justify-content-center my-3 px-3">
								<button class="btn-block btn-color">Login</button>
							</div>
							<div class="row justify-content-center my-2">
								<a href="#"
									><small class="text-muted">Forgot Password?</small></a
								>
							</div>
							<div class="bottom text-center mb-5">
								<p>
									Noch kein account?
									<button class="btn-block btn-color">Registrieren</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
