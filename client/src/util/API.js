import axios from "axios";

export default {
	createNewUser: newUser => {
		return axios.post(`/api/user/create`, newUser);
	},
	// newUser is an object that takes
	// firstName, lastName, and hometown

	getUserInfo: userId => {
		return axios.get(`/api/user/${userId}`);
	},
	// userId should be a string
	// returns information about one user as object
	// firstName, lastName, hometown, dateJoined,
	// bites[objectIDs]

	createNewBite: newBite => {
		return axios.post(`/api/bite/create`, newBite);
	},
	// newBite is an object that takes
	// localId, city, restaurant
	// startDateRange, endDateRange

	searchForBites: city => {
		return axios.get(`/api/bites/search/city/${city}`);
	},
	// city should be a string

	bookBite: (travelerId, biteId) => {
		return axios.patch(`/api/user/${travelerId}/bite/${biteId}/book`);
	},
	// travelerId should be a string (searching)
	// biteId should be a string

	getUserBookedBites: userId => {
		return axios.get(`/api/user/${userId}/bites/booked`);
	},
	// userId should be a string
	// return an array of bite Ids

	getUserUnbookedBites: userId => {
		return axios.get(`/api/user/${userId}/bites/unbooked`);
	}
	// userId should be a string
	// returns array of bite Ids
};

//TEST createNewUser
// const ali = {
// 	firstName: "Ali",
// 	lastName: "Arfeen",
// 	hometown: "Oak Brook"
// };
//
// console.log("making ali:", ali);
// console.log("calling createNewUser");
// API.createNewUser(ali);

//TEST getUserInfo
// const userToSearch = "5a1c4d67f497743d9428014e";
// console.log("Searching for Andrew", userToSearch);
// API.getUserInfo(userToSearch).then(result => console.log(result.data));

//TEST createNewBite
// const userMakingBite = "5a1c4d67f497743d9428014e";
// const newBite = {
//   localId: userMakingBite,
//   city: "Oaklan",
//   location: "In N Out"
// };
//
// console.log("Andrew making a bite");
// console.log(newBite);
// API.createNewBite(userMakingBite, newBite);

//TEST searchForBites
// const city = "Chicago";
// console.log("Searching for not booked bites in", city);
// API.searchForBites(city).then(results => console.log(results.data));

//TEST bookBite
// console.log("booking a bite");
// const travelerId = "5a1c7ebb418dbf26c09a1ab8";
// const biteId = "5a1c84cdc484e011c83709ad";
// API.bookBite(travelerId, biteId).then(updatedTraveler =>
// 	//returns the user that booked the bite
// 	console.log(updatedTraveler)
// );

//TEST getUserBookedBites
// console.log("User booked bites search");
// const userId = "5a1c4d67f497743d9428014e";
// API.getUserBookedBites(userId).then(result => console.log(result));

//TEST getUserUnbookedBites
// console.log("User unbooked bites search");
// const userId = "5a1c4d67f497743d9428014e";
// API.getUserUnbookedBites(userId).then(result => console.log(result));
