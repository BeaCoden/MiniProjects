// vue rout instance with communication to all components (configuration)
const app = Vue.createApp({
	data() {
		// changes to data also visible in the template
		return {
			places: places, // from dataItems.js
		};
	},
	computed: {
		totalVotes() {
			return this.places.reduce((totalVotes, place) => {
				return totalVotes + place.votes;
			}, 0);
		},
		sortedPlaces() {
			return this.places.slice().sort((a, b) => {
				return b.votes - a.votes;
			});
		},
	},
	methods: {
		upvote(placesId) {
			// find the place with the given id
			const place = this.places.find((place) => place.id === placesId);
			place.votes++;
			// this.places[0].votes++;
		},
	},
	created() {
		// Sort the places by votes when the component is created
		this.places = this.sortedPlaces;
	},
});

// delivers instance to root-component back
// variable vm = view models (mvvm)
// app.mount("#app") = method return infos & store it in vm
const vm = app.mount("#app");
