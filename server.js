// TODO: this file :)
const express = require("express");
   const app = express();
   const employees = require("./employees")

   const init = async () => {
    app.listen(3000, () => console.log("Hello employees!"));
  };

  app.get("/", async (req, res) => {
    res.status(200).send("This is our backend");
  });

  app.get("/employees", (req,res) => {
    res.json(employees);
  })

  app.get("/employees/random", (req,res) => {
    const randomIndex = Math.floor(Math.random()*employees.length);
    const randomEmployees = employees[randomIndex];
    res.status(200).json(randomEmployees);
  })

  app.get("/employees/:id", (req, res) => {
    const { id } = req.params;
    if (id < 0 || id >= employees.length) {
      res.status(404).send("There is no employee with that id.");
    } else {
      res.json(employees[id]);
    }
  });





  init();