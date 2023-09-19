<script setup></script>
<template>
	<div class="container mt-5">
		<div id="app">
			<div class="mt-4">
				<h3>Gesamtergebnis:</h3>
				<p>Total Einnahmen: {{ totalEinnahmen }}</p>
				<p>Total Ausgaben: {{ totalAusgaben }}</p>
				<p>Gesamtbetrag: {{ totalEinnahmen - totalAusgaben }}</p>
			</div>
		</div>
	</div>
</template>
