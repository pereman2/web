import firebase from 'firebase';
var serviceAccount = require("./admin.json");

var app = firebase.initializeApp(serviceAccount);

const DATABASE = app.database();
const PROJECTS_DB = DATABASE.ref("projects");

export async function get_projects(snapshot) {
    let projects;
    await PROJECTS_DB.once("value", (snapshot) => { projects = snapshot.val(); })
    return projects;
}

