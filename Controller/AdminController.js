const Skill = require("../model/SkillModel"); // Skill model import kar lo
const Certificate = require("../model/Certification");
const Project = require("../model/Project");
const Education = require("../model/Education");
Experience = require("../model/Experience");

exports.DashBoard = (req, res) => {
  res.render("Admin/AdminDashBoard");
};

// GET: Show the add skill form
exports.Add_skills = (req, res) => {
  console.log("📄 Add Skill Page Opened");
  res.render("Admin/addSkills"); // Views/add-skill.ejs ko render karega
};

// POST: Handle the skill form submission
exports.Save_skills = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newSkill = new Skill({ title, description });
    await newSkill.save();

    console.log("✅ Skill saved successfully");
    res.redirect("/admin/add-skill");
  } catch (error) {
    console.log("❌ Error saving skill:", error);
    res.status(500).send("Error saving skill");
  }
};

exports.Add_Certificates = (req, res) => {
  console.log("My New Certificate");
  res.render("Admin/addCertificates");
};

exports.Save_Certificates = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newCertificate = new Certificate({ title, description });
    await newCertificate.save();

    console.log("✅ Certificates saved successfully");
    res.redirect("/admin/add-certificates");
  } catch (error) {
    console.log("❌ Error saving certificates:", error);
    res.status(500).send("Error saving certificates");
  }
};

exports.Add_Project = (req, res) => {
  console.log("Project Added");
  res.render("Admin/addProject");
};

exports.Save_Project = async (req, res) => {
  try {
    const { title, description, github, live } = req.body;

    const data = new Project({ title, description, github, live });
    await data.save();

    console.log("✅ Project saved successfully");
    res.redirect("/admin/add-project");
  } catch (error) {
    console.log("❌ Error saving Project:", error);
    res.status(500).send("Error saving Project");
  }
};

exports.Add_Education = (req, res) => {
  console.log("My Education page Added");
  res.render("Admin/addEducation");
};

exports.Save_Education = async (req, res) => {
  console.log("Come to save Education", req.body);
  try {
    const { degree, institute, session } = req.body;
    console.log(req.body);

    const data = new Education({ degree, institute, session });
    await data.save();

    console.log("✅ Project saved successfully");
    res.redirect("/admin/add-education");
  } catch (error) {
    console.log("❌ Error saving Education:", error);
    res.status(500).send("Error saving Education");
  }
};

exports.Add_Experience = (req, res) => {
  res.render("Admin/addExperience");
};

exports.Save_Experience = async (req, res) => {
  try {
    const { title, company, duration, description } = req.body;

    // Validate input
    if (!title || !company || !duration || !description) {
      return res.status(400).send("All fields are required.");
    }

    // Create and save experience in DB
    await Experience.create({
      title,
      company,
      duration,
      description,
    });

    // Redirect after saving
    res.redirect("/admin/add-experience"); // or the page where you list experiences
  } catch (error) {
    console.error("Error saving experience:", error);
    res.status(500).send("Internal Server Error");
  }
};

// module.exports = Save_Experience;
