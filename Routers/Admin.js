const express = require("express");
const AdminController = require("../Controller/AdminController");
const AdminRouter = express.Router();

AdminRouter.get("/dashboard", AdminController.DashBoard);

AdminRouter.get("/add-skill", AdminController.Add_skills);
AdminRouter.post("/add-skill", AdminController.Save_skills);
AdminRouter.get("/add-certificates", AdminController.Add_Certificates);
AdminRouter.post("/add-certificates", AdminController.Save_Certificates);
AdminRouter.get("/add-project", AdminController.Add_Project);
AdminRouter.post("/add-project", AdminController.Save_Project);
AdminRouter.get("/add-education", AdminController.Add_Education);
AdminRouter.post("/add-education", AdminController.Save_Education);
AdminRouter.get("/add-experience", AdminController.Add_Experience);
AdminRouter.post("/add-experience", AdminController.Save_Experience);
module.exports = AdminRouter;
