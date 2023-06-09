const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db('dataset').collection('contacts').find();
        result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getOne = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('dataset').collection('contacts').find({ _id: userId });

    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const create = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await mongodb.getDb().db('dataset').collection('contacts').insertOne(contact);

    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
};

const update = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
    
  const response = await mongodb.getDb().db('dataset').collection('contacts').replaceOne({ _id: userId }, contact);
    
  if (response.modifiedCount >= 1) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Update error');
  }
};

const deleter = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('dataset').collection('contacts').deleteOne({ _id: userId }, true);
    
    if (response.deletedCount >= 1) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Deletion error');
    }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleter
};