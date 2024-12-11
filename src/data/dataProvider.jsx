// src/data/dataProvider.js
import jsonServerProvider from "ra-data-json-server";

// Configuración del proveedor de datos
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default dataProvider;
