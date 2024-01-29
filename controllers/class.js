const { ObjectId } = require("mongodb");
const classModal = require("../modals/class");
const mongoose = require("mongoose");

const getClassList = async (req, res) => {
  try {
    const data = await classModal.find().populate("subject");
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Network Error");
  }
};

const addClass = async (req, res) => {
  try {
    const { name, subject } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please provide class name.",
      });
    }
    if (!subject) {
      return res.status(400).json({
        success: false,
        message: "Please provide an array of subject IDs.",
      });
    }

    const vals = {
      name,
      subject,
    };

    const result = await classModal.create(vals);
    console.log(result);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Failed to add the class",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Class created successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Network Error");
  }
};

const updateClass = async (req, res) => {
  try {
    const classId = new ObjectId(req.params._id);
    const { name, subject } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please provide class name.",
      });
    }

    if (!subject) {
      return res.status(400).json({
        success: false,
        message: "Please provide a subject",
      });
    }

    const data = await classModal.findOne({ _id: classId });
    const existingClass = await classModal.findOne({
      _id: classId,
      subject: { $in: subject },
    });

    if (data && data.subject && data.subject.length > 0) {
      if (existingClass) {
        return res.status(400).json({
          success: false,
          message: "One or more subjects already exist in the class.",
        });
      }
     

      const result = await classModal.updateOne(
        { _id: classId },
        {
          $set: { name: name }, 
          $addToSet: { subject: subject }, 
        }
      );
      res.send(result);
    } else {
      const result = await classModal.updateOne(
        { _id: classId },
        { $set: { name: name, subject: [subject] } }
      );
      res.send(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Network Error");
  }
};

module.exports = {
  getClassList,
  addClass,
  updateClass,
};
