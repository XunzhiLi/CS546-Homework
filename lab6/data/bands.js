const mongoCollections = require("../config/mongoCollections")
const bands = mongoCollections.bands
const ObjectId = require('mongodb').ObjectID;
const albums = require('./albums')
const albums1 = mongoCollections.albums



let exportedMethods = {
    async string_check(id){
      if (typeof id == 'string'){
        return ObjectId(id)
      }
      else{
        return id
      }
    },

    async getBand(id) {
        id = await this.string_check(id)
        const bandCollection = await bands();
        const found_band = await bandCollection.findOne({ _id: id });
        if (!found_band) throw "No band with that id";
        a = await this.combineAlbuns_intoBands(found_band) 
        result_band = {
          _id: found_band._id,
          bandName: found_band.bandName,
          bandMembers: found_band.bandMembers,
          yearFormed: found_band.yearFormed,
          genres: found_band.genres,
          albums: a,
          recordLabel: found_band.recordLabel
        }
        return result_band
      },
   
    async getAllBands() {
        const bandCollection = await bands();
        const bandall= await bandCollection.find({}).toArray();
        band_list = []
        for (var each_band of bandall){ 
          a = await this.combineAlbuns_intoBands(each_band)  
          result_band = {
            _id: each_band._id,
            bandName: each_band.bandName,
            bandMembers: each_band.bandMembers,
            yearFormed: each_band.yearFormed,
            genres: each_band.genres,
            albums: a,
            recordLabel: each_band.recordLabel
          }
          band_list.push(result_band)
        }
        return band_list
    },
    async combineAlbuns_intoBands(each_band){
      const albumsCollection = await albums1();
      id = each_band._id.toString()
      album_list =  await albumsCollection.find({author:id}).toArray();
      if(!album_list){
        return []
      }
      return album_list
    },

    async band_update(id,bandName,bandMembers,yearFormed,genres,recordLabel) {
        id = await this.string_check(id)
        band_updated_info ={
            bandName : bandName,
            bandMembers : bandMembers,
            yearFormed : yearFormed,
            genres : genres,
            recordLabel : recordLabel,
        }
        const bandCollection = await bands();  
        const updatedInfo = await bandCollection.updateOne({ _id: id },{$set:band_updated_info})
        if (!updatedInfo.matchedCount && !updatedInfo.modifiedCount) throw 'Update failed';
        re =  await this.getBand(id);
        console.log(re)
        return re
      },

      
      
    async addBand(bandName, bandMembers, yearFormed, genres, recordLabel)
    {
        const bandCollection = await bands();
        let newband = {
            bandName: bandName,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            genres: genres,
            albums: [],
            recordLabel: recordLabel,
          }
          const insertInfo = await bandCollection.insertOne(newband)
          if (insertInfo.insertedCount === 0) throw "Could not add another band"
          const newID = insertInfo.insertedId
          const created_band = await this.getBand(newID)
          return created_band  
    },
    async removeband(id,will_delete) {
      id = await this.string_check(id)
      const bandCollection = await bands();
      deleted_item ={
        "deleted": true,
        "data": will_delete
      }
      const deletionInfo = await bandCollection.removeOne({_id: id});
      if (deletionInfo.deletedCount === 0) {
        throw `Could not delete user with id of ${id}`;
      }
      return deleted_item;
    },
}

module.exports = exportedMethods
