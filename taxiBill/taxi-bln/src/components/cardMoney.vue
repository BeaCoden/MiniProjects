<script setup>
	import { defineProps } from "vue";

	const { showSection } = defineProps(["showSection"]);
</script>

<template>
	<div class="container mt-5">
		<div id="app">
			<!-- SECTION - moneyIncome -->
			<div>
				<div class="card-body">
					<h2 class="card-title">Einnahmen</h2>
					<p class="card-text">lorem ipsum dolor sit amet</p>
					<button @click="showSection('moneyIncome')">weiter</button>
				</div>
			</div>

			<br />

			<!-- SECTION - moneySpend -->
			<div>
				<div class="card-body">
					<h2 class="card-title">Ausgaben</h2>
					<p class="card-text">lorem ipsum dolor sit amet</p>
					<button @click="showSection('moneySpend')">weiter</button>
				</div>
			</div>

			<br />

			<!-- SECTION - otherReceipts -->
			<div>
				<div class="card-body">
					<h2 class="card-title">sonstige Belege</h2>
					<p class="card-text">lorem ipsum dolor sit amet</p>
					<button @click="showSection('otherReceipts')">weiter</button>
				</div>
			</div>
		</div>
	</div>
</template>
