<script setup>
	import { useRouter } from "vue-router";
	const router = useRouter();
</script>

<template>
	<div class="container mt-5">
		<div id="app">
			<!-- SECTION - overView -->
			<div class="card-body">
				<h2 class="card-title">Übersicht</h2>
				<p class="card-text">lorem ipsum dolor sit amet</p>
				<button
					class="landingPage__button"
					@click="router.push('/overview')"
				>
					weiter
				</button>
			</div>

			<br />

			<!-- SECTION - moneyIncome -->
			<div>
				<div class="card-body">
					<h2 class="card-title">Einnahmen</h2>
					<p class="card-text">lorem ipsum dolor sit amet</p>
					<button @click="router.push('/moneyCosts')">weiter</button>
				</div>
			</div>

			<br />

			<!-- SECTION - moneySpend -->
			<div>
				<div class="card-body">
					<h2 class="card-title">Ausgaben</h2>
					<p class="card-text">lorem ipsum dolor sit amet</p>
					<button @click="router.push('/moneyCosts')">weiter</button>
				</div>
			</div>

			<br />

			<!-- SECTION - otherReceipts -->
			<div>
				<div class="card-body">
					<h2 class="card-title">sonstige Belege</h2>
					<p class="card-text">lorem ipsum dolor sit amet</p>
					<button @click="router.push('/moneyCosts')">weiter</button>
				</div>
			</div>
		</div>
		<div class="container mt-5">
			<button @click="router.push('/')">zurück</button>
		</div>
	</div>
</template>
