<script setup></script>
<template>
	<div class="container mt-5">
		<div class="overview">
			<h1>Übersicht</h1>
			<div class="overview__table">
				<table>
					<thead>
						<tr>
							<th>Monat</th>
							<th>Stunden</th>
							<th>Umsatz</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="month in months"
							:key="month.id"
						>
							<td>{{ month.month }}</td>
							<td>{{ month.hours }}</td>
							<td>{{ month.revenue }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
