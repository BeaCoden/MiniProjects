<script setup>
	import { useRouter } from "vue-router";
	const router = useRouter();
</script>
<template>
	<div class="container mt-5">
		<div id="app">
			<div class="mt-4">
				<h3>Ergebnisse der einzelnen Kosten:</h3>
				<p>Total Einnahmen:</p>

				<p>Total Ausgaben:</p>

				<p>Total Sonstige:</p>

				<p>Gesamtbetrag:</p>
			</div>
			<div class="container mt-5">
				<button @click="router.push('/moneyCosts')">zurück</button>
			</div>
		</div>
	</div>
</template>
