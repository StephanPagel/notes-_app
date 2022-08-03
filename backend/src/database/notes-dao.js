const {ObjectId} = require("mongodb")
const {getDB} = require("./getDB")
const collectionName = "notes"

// function findAllNotes() {
//   const db = getDB();
//   console.log(db);
//   return db.collection(collectionName).find().toArray();
// }

function findAllNotes() {
    return new Promise((resolve, reject)=> {
        getDB()
        .then((db) => db.collection(collectionName).find().toArray())
    } 
)}

module.exports = {
    findAllNotes
}
