import mongoose from "mongoose" 

mongoose.connect("mongodb+srv://alura:1234@alura.m5mwhqf.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;