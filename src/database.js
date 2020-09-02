import firebase from 'firebase';
var serviceAccount = require("./admin.json");

var app = firebase.initializeApp(serviceAccount);

const DATABASE = app.database();
const PROJECTS_DB = DATABASE.ref("projects");
const STORAGE = app.storage().ref();

export async function get_projects(snapshot) {
    let projects;
    await PROJECTS_DB.once("value", (snapshot) => { projects = snapshot.val(); })
    return projects;
}

export async function get_image(name) {
    let image;
    await STORAGE.child(name).getDownloadURL()
        .then((firebaseUrl) => {
            image = "/" + firebaseUrl
        })
    return image;
}