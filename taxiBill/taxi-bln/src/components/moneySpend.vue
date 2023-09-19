<script setup></script>
<template>
	<div class="container mt-5">
		<div id="app">
			<div class="mb-4">
				<h2>Ausgaben</h2>
				<div class="form-group">
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
</template>
