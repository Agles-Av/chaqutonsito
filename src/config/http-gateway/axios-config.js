import axios from "axios";

// Obtiene la URL del servidor desde las variables de entorno
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const AxiosCliente = axios.create({
  baseURL: SERVER_URL,
  withCredentials: false,
});

// Manejador de solicitudes
const requestHandler = (request) => {
  request.headers["Accept"] = "application/json";
  request.headers["Content-Type"] = "application/json";
  return request;
};

// Añadir el manejador de solicitudes a los interceptores
AxiosCliente.interceptors.request.use(
  (req) => requestHandler(req),
  (err) => Promise.reject(err)
);

// Añadir el manejador de respuestas a los interceptores
AxiosCliente.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err)
);

export default AxiosCliente;
