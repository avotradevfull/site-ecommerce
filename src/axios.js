import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Mettez l'URL correcte ici
});

export default instance;
