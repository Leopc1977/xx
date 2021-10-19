const fs = require("fs");

//MAJ database
function UpdateData(idMembre, content) {
    console.log(idMembre+content)
    let db =  JSON.parse(fs.readFileSync('./json/db.json'));
    console.log(db)
    
    //Ajoute new membres à la database
    if (typeof db[idMembre] === 'undefined'){
        const member = {
            id: idMembre,
            words:[]
          };
        db["lstMembers"][idMembre]=member;
    }

    fs.writeFile('./json/db.json', JSON.stringify(db), (x) => {
        if (x) console.error(x)
    })
} 

module.exports.UpdateData=UpdateData;