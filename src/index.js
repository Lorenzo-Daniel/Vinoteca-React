import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyBlXqVos8wHU7-qtdsolsgRDD8gXCJIjhU",
  authDomain: "vinoteca-64269.firebaseapp.com",
  projectId: "vinoteca-64269",
  storageBucket: "vinoteca-64269.appspot.com",
  messagingSenderId: "432976298554",
  appId: "1:432976298554:web:4a1a3191329a62ebb16b03",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
