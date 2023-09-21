<script setup>
	import { useRouter } from "vue-router";
	const router = useRouter();
</script>
<template>
	<div class="container mt-5">
		<div class="landingPage">
			<h1>Willkommen</h1>
			<p>
				Diese App ist für die Verwaltung von Taxifahrern gedacht.
				<br />
				<br />
				Bitte wählen Sie eine der folgenden Optionen:
			</p>
			<div class="landingPage__buttons">
				<button
					class="landingPage__button"
					@click="router.push('/overview')"
				>
					Übersicht
				</button>
				<button
					class="landingPage__button"
					@click="router.push('/addDriver')"
				>
					Fahrer hinzufügen
				</button>
				<button
					class="landingPage__button"
					@click="router.push('/addMonth')"
				>
					Monat hinzufügen
				</button>
			</div>
		</div>
	</div>
</template>
