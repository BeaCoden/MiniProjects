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
			console.log("totalVotes performed");
			return this.places.reduce((totalVotes, place) => {
				return totalVotes + place.votes;
			}, 0);
		},
		sortedPlaces() {
			console.log("sortedPlaces performed");
			return this.places.slice().sort((a, b) => {
				return b.votes - a.votes;
			});
		},
	},
	methods: {
		upvote(infoText, event) {
			this.places[0].votes++;
			console.log(infoText);
			console.log(event);
		},
		downvote() {
			this.places[0].votes--;
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
