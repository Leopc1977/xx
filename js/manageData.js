const fs = require("fs");
const pathDB = 'json/db.json'

//MAJ database
function UpdateData(idMembre, content) {
    let db 
    //Lecture de db.json
    fs.readFile(pathDB, "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        db = JSON.parse(jsonString)
        //db.lstMembres["1"]=1
        //console.log("File data:", db.lstMembres["1"]);
      });


    //Ajoute new membres à la database
    if (typeof db.lstMembres[idMembre.toString()] === 'undefined'){
        const member = {
            id: idMembre,
            words:[]
          };
        db.lstMembres[idMembre.toString()]=member;
    }
    fs.writeFile(pathDB, JSON.stringify(db), (x) => {
        if (x) console.error(x)
    })
} 

module.exports.UpdateData=UpdateData;