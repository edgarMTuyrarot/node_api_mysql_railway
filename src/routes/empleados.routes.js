import { Router } from "express";
import {
  getEmpleados,
  postEmpleados,
  putEmpleados,
  deleteEmpleados,
  getEmpleado
} from "../controllers/empleados.controller.js";

const router = Router();

//Rutas
router.get("/empleados", getEmpleados);
router.get("/empleado/:id", getEmpleado);
router.post("/empleados", postEmpleados);
router.patch("/empleados/:id", putEmpleados);
router.delete("/empleados/:id", deleteEmpleados);

export default router;
