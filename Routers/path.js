const express = require("express");
const router = express.Router();
const controller = require("../Controller/pathController");

router.get("/", controller.getHomePage);
router.get("/Skills", controller.getSkillPage);
router.get("/certifications", controller.Certifications);
router.get("/projects", controller.getProjects);
router.get("/experiences", controller.getExperiences);
router.get("/education", controller.education);
module.exports = router;
