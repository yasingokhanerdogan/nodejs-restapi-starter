const mongoose = require("mongoose");
const {testModel} = require("../models");

module.exports = {
    getTestAllData: async (req, res) => {
        try {
            const responseData = await testModel.find({});

            if (!responseData)
                return res.status(400).json({message: "No Data.", data: null});

            return res.status(200).json({message: "All Data.", data: responseData});
        } catch (error) {
            res.status(404).json({message: error.message, data: null});
        }
    },
    getTestSingleData: async (req, res) => {
        try {
            const {id} = req.params;

            if (!mongoose.Types.ObjectId.isValid(id))
                return res.status(400).json({message: "Invalid ID.", data: null});

            const responseData = await testModel.findById(id);

            if (!responseData)
                return res.status(400).json({message: "No Data.", data: null});

            return res.status(200).json({message: "Single Data.", data: responseData});
        } catch (error) {
            res.status(404).json({message: error.message, data: null});
        }
    },
    createTestData: async (req, res) => {
        try {
            const {text} = req.body;
            const createData = await testModel.create({text});

            if (!createData)
                return res.status(400).json({message: "Couldn't Create Text.", data: null})

            res.status(201).json({message: "Text Created.", data: createData});
        } catch (error) {
            res.status(404).json({message: error.message, data: null});
        }
    },
    updateTestData: async (req, res) => {
        try {
            const {id} = req.params;

            if (!mongoose.Types.ObjectId.isValid(id))
                return res.status(400).json({message: "Invalid ID.", data: null});

            const updateData = await testModel.findByIdAndUpdate(id, req.body, {new: true});

            if (!updateData)
                return res.status(400).json({message: "Couldn't Update Text.", data: null});

            return res.status(200).json({message: "Text Updated.", data: updateData});
        } catch (error) {
            res.status(404).json({message: error.message, data: null});
        }
    },
    deleteTestData: async (req, res) => {
        try {
            const {id} = req.params;

            if (!mongoose.Types.ObjectId.isValid(id))
                return res.status(400).json({message: "Invalid ID.", data: null});

            const deleteData = await testModel.findByIdAndDelete(id);

            if (!deleteData)
                return res.status(400).json({message: "No Data.", data: null});

            return res.status(200).json({message: "Text Deleted.", data: deleteData});
        } catch (error) {
            res.status(404).json({message: error.message, data: null});
        }
    },
}