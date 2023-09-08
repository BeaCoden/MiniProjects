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
			console.log("computed property performed");
			return this.places.reduce((totalVotes, place) => {
				return totalVotes + place.votes;
			}, 0);
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
});

// delivers instance to root-component back
// variable vm = view models (mvvm)
// app.mount("#app") = method return infos & store it in vm
const vm = app.mount("#app");
