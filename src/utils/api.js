import * as firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyAcqJyCmFx1MuLWyWJiTutHfZ8gWxO_LHc",
	authDomain: "rapps-vkapp.firebaseapp.com",
	databaseURL: "https://rapps-vkapp.firebaseio.com",
	projectId: "rapps-vkapp",
	storageBucket: "rapps-vkapp.appspot.com",
	messagingSenderId: "214728213335",
	appId: "1:214728213335:web:a86ddf170cac6b1aa6f412",
	measurementId: "G-KFDGGEXBP0"
});


const firestore = firebase.firestore();

export const getLibraries = () => new Promise((resolve) => {
	const ref = firestore.collection("libraries").get();
	ref
		.then((refs) => {
			const result = [];
			refs.forEach((ref) => result.push({ id: ref.id, ...ref.data() }));
			resolve(result);
		})
		.catch(() => resolve([]));
});

export const getStatisticForNpmPackage = (name) => new Promise((resolve) => {
	fetch("https://api.npmjs.org/downloads/range/last-month/" + name)
		.then((response) => response.json())
		.then((response) => resolve(response.downloads.reduce((a, x) => a + x.downloads, 0)))
		.catch(() => resolve("Ошибка"))
});

export const getLatestVersion = (name) => new Promise((resolve) => {
	fetch("https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/" + name)
		.then((response) => response.json())
		.then((response) => resolve(response["dist-tags"]["latest"]))
		.catch(() => resolve("Ошибка"))
});

export const getLicense = (name) => new Promise((resolve) => {
	fetch("https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/" + name)
		.then((response) => response.json())
		.then((response) => resolve(response["license"]))
		.catch(() => resolve("Ошибка"))
});

export const getServices = () => new Promise((resolve) => {
	const ref = firestore.collection("services").get();
	ref
		.then((refs) => {
			const result = [];
			refs.forEach((ref) => result.push({ id: ref.id, ...ref.data() }));
			resolve(result);
		})
		.catch(() => resolve([]));
});

export const getArticles = () => new Promise((resolve) => {
	const ref = firestore.collection("articles").get();
	ref
		.then((refs) => {
			const result = [];
			refs.forEach((ref) => result.push({ id: ref.id, ...ref.data() }));
			resolve(result);
		})
		.catch(() => resolve([]));
});