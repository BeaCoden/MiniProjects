<script setup></script>
<template>
	<div class="container mt-5">
		<div id="app">
			<div class="mb-4">
				<div class="form-group">
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
			</div>
		</div>
	</div>
</template>
