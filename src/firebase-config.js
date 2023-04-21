const config = {
  apiKey: "AIzaSyBuWQlnel4KStns_pmkWf4N-zVBR5Hwfb4",
  authDomain: "todoapp-ab18a.firebaseapp.com",
  projectId: "todoapp-ab18a",
  storageBucket: "todoapp-ab18a.appspot.com",
  messagingSenderId: "805823049750",
  appId: "1:805823049750:web:95aa0618c2dbf91e2c0537",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
