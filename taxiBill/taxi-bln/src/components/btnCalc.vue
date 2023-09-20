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
				<button @click="router.push('/moneyCosts')">zurück</button>
				<p>Total Ausgaben:</p>
				<button @click="router.push('/moneyCosts')">zurück</button>
				<p>Total Sonstige:</p>
				<button @click="router.push('/moneyCosts')">zurück</button>
				<p>Gesamtbetrag:</p>
			</div>
		</div>
	</div>
</template>
