const fs = require('fs')
const path = require('path')


// '-----------------------------------------------'
async function getFileAsString(path) {
  if(path){
    let readFile = new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
              if (err) {
                reject(err);
                console.log("Error!!!")
              } 
              resolve(data);
            })
          })
    let data = await readFile;
    return data.toString()
  }else{
    console.log("You must provide a  path!!!")
  }
}


// '-----------------------------------------------'

async function getFileAsJSON(path) {
    if(path){
      let readFile = new Promise((resolve, reject) => {
              fs.readFile(path, (err, data) => {
                if (err) {
                  reject(err);
                  console.log("Error!!!")
                } 
                resolve(data);
              })
            })
      let data = await readFile;
      return JSON.parse(data)
    }else{
      console.log("You must provide a  path!!!")
    }
  }


// '-----------------------------------------------'

async function saveStringToFile(path, text) {
  if (!text) throw "You must provide a text";
  else if (!path) throw "You must provide a path";
  else{
    await fs.writeFileSync(path,text)
  } 
}

// '-----------------------------------------------'
async function saveJSONToFile(path, obj) {
  if (!obj) throw "You must provide an obj";
  else if (!path) throw "You must provide a path";
  else{
    await fs.writeFileSync(path,JSON.stringify(obj,0, '\t'))
  } 
} 

module.exports = {
  firstName: "Xunzhi", 
  lastName: "Li", 
  studentId: "10457500",
  getFileAsString,
  getFileAsJSON,
  saveStringToFile,
  saveJSONToFile
};