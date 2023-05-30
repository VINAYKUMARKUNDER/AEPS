const express = require("express");
const router = express.Router();
const db = require("../../database");
const ActivityModule = require("../module/Activity");

module.exports = {

    // get all entry
  getAllActivity: async (req, res) => {
    try {
      const data = await ActivityModule.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get One entry by id
  getOneActivityById: async (req, res) => {
    try {
      const data = await ActivityModule.findByPk(req.params.id);
      if (!data)
        res.status(200).json("data not found with id: ", req.params.id);
      else res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // create new antry
  createNewActivity: async (req, res) => {
    try {
      const data = await ActivityModule.create(req.body);
      res.status(201).json("new entry created successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update entry
  updateActivity: async (req, res) => {
    try {
      const data = await ActivityModule.update(req.body, {
        where: {
          activity_id: req.params.id,
        },
      });
      if (data[0] == 1) res.status(200).json("updated successfully...");
      else res.status(200).json("already updated...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete entry
  deleteActivity: async (req, res) => {
    try {
      const data = await ActivityModule.destroy({
        where: {
          activity_id: req.params.id,
        },
      });
      if (data == 0)
        res.status(200).json("entry not found with id: ", req.params.id);
      else res.status.json("deleted successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
