const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals

module.exports ={
    async get(id) {
        if (!id) throw "You must provide an id to search for"
        const animalCollection = await animals()
        const animalgo = await animalCollection.findOne({ _id: id })
        if (animalgo === null) throw "No animal with that id"  
        return animalgo
      },
    
      async getAll() {
        const animalCollection = await animals();
        const animalgo = await animalCollection.find({}).toArray()
        return animalgo 
      },


    async create(name, animalType)
    {
        if (!name) throw "You must provide a name for animal"
        if (!animalType) throw "You must provide an animalType "
        const animalCollection = await animals();
        let newanimal = 
        {
            name: name,
            animalType: animalType
        }

        const insertInfo = await animalCollection.insertOne(newanimal)
        if (insertInfo.insertedCount === 0) throw "Could not add animals"
        const newId = insertInfo.insertedId
        const animal = await this.get(newId)
        return animal

    },
    async remove(id) {
      if (!id) throw "You must provide an id to search for";
  
      const animalCollection = await animals();
      const deletionInfo = await animalCollection.removeOne({ _id: id });
  
      if (deletionInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
      }
    },

    async rename(id, name) {
      if (!id) throw "You must provide an id to search for";
      if (!name) throw "You must provide a newname for your the animal";
      const animalCollection = await animals();
      
      const updatedInfo = await animalCollection.updateOne({ _id: id },{$set:{name:name}},{upsert: true})
      if (updatedInfo.modifiedCount === 0) {
        throw "could not update animal information successfully";
      }

      return await this.get(id);
    }
}

