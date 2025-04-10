const Skill = require("../model/SkillModel");
const Certificate = require("../model/Certification");
const Project = require("../model/Project");
const Education = require("../model/Education");
const Experience = require("../model/Experience");

exports.getHomePage = (req, res) => {
  res.render("index");
};

exports.getSkillPage = async (req, res) => {
  const data = await Skill.find();
  res.render("Skills", { data });
};

exports.Certifications = async (req, res) => {
  const data = await Certificate.find();
  res.render("Certification", { data });
};

exports.getProjects = async (req, res) => {
  const data = await Project.find();

  res.render("project", { data: data });
};

exports.getExperiences = async (req, res) => {
  const data = await Experience.find();
  res.render("experiences", { data });
};
exports.education = async (req, res) => {
  const data = await Education.find();
  res.render("education", { data });
};
