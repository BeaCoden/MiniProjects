<script setup>
	import { useRouter } from "vue-router";
	const router = useRouter();
</script>
<template>
	<!-- //SECTION - Einnahmen -->
	<div class="container mt-5">
		<div id="app">
			<div class="mb-4">
				<div class="form-group">
					<h2>Einnahmen</h2>
					<label>Uber:</label
					><input
						class="form-control"
						v-model="uber"
						type="number"
					/>
					<label>Bolt:</label
					><input
						class="form-control"
						v-model="bolt"
						type="number"
					/>
					<label>FreeNow:</label
					><input
						class="form-control"
						v-model="freenow"
						type="number"
					/>
					<label>EC und Kreditkartenzahlungen:</label
					><input
						class="form-control"
						v-model="ecKredit"
						type="number"
					/>
					<label>Taxi EU Payment Coupon:</label
					><input
						class="form-control"
						v-model="taxiCoupon"
						type="number"
					/>
					<label>Coupons:</label
					><input
						class="form-control"
						v-model="coupons"
						type="number"
					/>
					<label>Fernfahrten:</label
					><input
						class="form-control"
						v-model="fernfahrten"
						type="number"
					/>
				</div>

				<!-- //SECTION - Ausgaben -->
				<div class="container mt-5">
					<div id="app">
						<div class="mb-4">
							<div class="form-group">
								<h2>Ausgaben</h2>
								<label>Tanken:</label
								><input
									class="form-control"
									v-model="tanken"
									type="number"
								/>
								<label>AdBlue:</label
								><input
									class="form-control"
									v-model="adBlue"
									type="number"
								/>
								<label>KFZ-Wäsche und Pflege:</label
								><input
									class="form-control"
									v-model="kfz"
									type="number"
								/>
								<label>sonstige Ausgaben:</label
								><input
									class="form-control"
									v-model="sonstigeAusgaben"
									type="number"
								/>
							</div>
						</div>
					</div>
				</div>

				<!-- //SECTION - Sonstige -->
				<div class="container mt-5">
					<div class="mb-4">
						<div class="form-group">
							<h2>Sonstige</h2>
							<label>Fehlfahrten:</label
							><input
								class="form-control"
								v-model="fehlfahrten"
								type="number"
							/>
						</div>
					</div>
				</div>

				<div class="container mt-5">
					<button @click="router.push('/btnCalc')">berechnen</button>
					<button @click="router.push('/cardMoney')">zurück</button>
				</div>
			</div>
		</div>
	</div>
</template>
