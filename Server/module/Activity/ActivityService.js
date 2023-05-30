const express = require("express");
const router = express.Router();
const db = require("../../database");
const ActivityModule = require("../module/Activity");


module.exports={
    getAllActivity:{},
    getOneActivityById:{},
    createNewActivity:{},
    updateActivity:{},
    deleteActivity:{}
}