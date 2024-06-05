import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};
export const getEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      "SELECT * FROM empleados WHERE id = (?)",
      id
    );
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Sin empleados",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const postEmpleados = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "INSERT INTO empleados (name,salary) VALUES (?,?)",
      [name, salary]
    );

    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};
export const putEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "UPDATE empleados SET name= IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?",
      [name, salary, id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id=?", id);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const deleteEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE  FROM empleados WHERE id = ?",
      req.params.id
    );
    console.log(result);
    if (result.affectedRows == 0) {
      res.status(404).json({
        message: "No se encontro el empleado",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};
