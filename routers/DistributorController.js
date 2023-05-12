
const express = require('express');
const router = express.Router();
const db = require('../database')
const distributorModule = require('../module/Distributor')


// get all distributor data
router.get('/', async (req, res)=>{
    try {
       const data = await distributorModule.findAll();
       res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});


// get one entry by id
router.get('/:id', async (req, res)=>{
    try {
        const data = await distributorModule.findByPk(req.params.id);
        if(!data)res.status(200).json('data not found with id:',req.params.id);
        else res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

// create new entry
router.post('/', async (req, res)=>{
    try {
        const data = await distributorModule.create(req.body);
        res.status(201).json('created new entry successfully...');
    } catch (error) {
        res.status(500).json(error);
    }
});


// update entry by id
router.put('/:id', async (req, res)=>{
    try {
        const data = await distributorModule.update(req.body,{
            where: {
                dist_id:req.params.id
            }
        });
        if(data[0]==1)res.status(200).json('updated successgully...');
        else res.status(200).json('already updated...')
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete entry by id
router.delete('/:id', async (req, res)=>{
    try {
        const data = await distributorModule.destroy({
            where:{
                dist_id:req.params.id
            }
        });
        if(data==0)res.status(200).json('data not found...');
        else res.status(200).json('deleted successfully...');
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports=router;