const mongodb = require('../db/connect');

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('dataset').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getOne = async (req, res, next) => {
    const result = await mongodb.getDb().db('dataset').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getAll, getOne };