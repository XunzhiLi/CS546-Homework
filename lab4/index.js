const animals = require("./animals");
const connection = require("./mongoConnection");
ObjectId = require('mongodb').ObjectID;

async function main() {

    const Sasha = await animals.create("Sasha", "Dog");
    console.log(Sasha);

    const Lucy =  await animals.create("Lucy", "Dog");
    const a = await animals.getAll()
    console.log(a)

    const Duke = await animals.create("Duke", "Walrus");

    const duke = await animals.get(Duke._id)
    console.log(duke)   

    const newsasha = await animals.rename(Sasha._id,"Sashita")
    console.log(newsasha)


    await animals.remove(Lucy._id)
    const b = await animals.getAll()
    console.log(b)

    
    

}

main().catch(error => {
    console.log(error);
  })

