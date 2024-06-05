import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import indexRouter from "./routes/index.routes.js";
import {PORT} from './config.js'

const app = express();

app.use(express.json());

//Usando rutas
app.use(indexRouter);
app.use(empleadosRoutes);

app.use((req, res, netx) => {
    res.status(404).json({
        message: "endpoint no encontrado",
  });
});

export default app