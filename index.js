import {Name} from "./schemas/name.js";

import express from "express";

import mongoose from "mongoose";

import cors from "cors";

const index = express();

const uri = 'mongodb://root:testing@despliegue-mongo-cont:27017/names?authSource=admin';
await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
index.use(cors())
index.use(express.json());

index.get('/names', async (req, res) => {
  const names = await Name.find().select('name').exec();
  const namesArray = names.map(name => name.name);
  res.send(namesArray);
})

index.post('/names', async (req, res) => {
  const name = new Name({name: req.body.name});
  await name.save();
  res.send(name);
})

index.listen(63342, () => {
  console.log('Server is running on port 3000');
})
