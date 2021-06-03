const mongoCollections = require("../config/mongoCollections")
const albums = mongoCollections.albums
const bands = require('./bands')
const band_1 = mongoCollections.bands
const ObjectId = require('mongodb').ObjectID;


const exportedMethods = {
    async string_check(id){
      if (typeof id == 'string'){
        return ObjectId(id)
      }
      else{
        return id
      }
    },
    
    async new_album_withbandname(albuminfo,bandinfo){
      a ={
        _id:albuminfo._id,
        title:albuminfo.title,
        author:{ 
          _id:albuminfo.author,
          bandName:bandinfo.bandName
        },
        songs:albuminfo.songs
      }
      return a
    },

    async getalbums() {
      const albumsCollection = await albums();
      new_album_list = []
      album_all =  await albumsCollection.find({}).toArray();
      console.log(album_all)
      for (var found_album of album_all) {
        const each_one = await this.g1(found_album.author)
        console.log(each_one)
        insert_one = await this.new_album_withbandname(found_album,each_one)
        new_album_list.push(a)
        }
      return new_album_list;

    },
    async get_onealbum(id) {
        if (!id) throw "You must provide an id  to search for an album";
        const albumsCollection = await albums();
        id = await this.string_check(id)
        const one_album = await albumsCollection.findOne({ _id: id });
        if (!one_album) throw "No album with that id";
        return one_album;
      },
    
    async get_onealbum_2(id) {
      const albumsCollection = await albums()
      const one_album = await albumsCollection.findOne({ author: id.toString() });
      if (!one_album) {
        return "gg"
      }
      else{
        return one_album
      }
    },

    async addAlbum(title,author,songs){
        const albumsCollection = await albums()
          let newalbums = {
            title: title,
            author: author,
            songs: songs,
            }

          author = await this.string_check(author)
          each_one = await this.g1(author)
          console.log(author)
          console.log(typeof author)
          if (!each_one) throw "No band with that id";
          const insertInfo = await albumsCollection.insertOne(newalbums)
          if (insertInfo.insertedCount === 0) throw "Insert failed"
          const newID = insertInfo.insertedId
          const created_album = await this.get_onealbum(newID)
          const result_album = await this.new_album_withbandname(created_album,each_one)
          return result_album
    },
    async remove(id,will_delete) {
        if (!id) throw "You must provide an id to search for"
        id = await this.string_check(id)
        const albumsCollection = await albums()
        deleted_item ={
          "deleted": true,
          "data": will_delete
        }
        const deletionInfo = await albumsCollection.removeOne({ _id: id })
    
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete the album with id of ${id}`
        }
        return deleted_item
      },

      async album_update(id,updatedObject) {
        id = await this.string_check(id)
        const albumsCollection = await albums()
        const updatedalbumData = {}
        if (updatedObject.title) {
          updatedalbumData.title = updatedObject.title
        } 
        if (updatedObject.songs) {
          updatedalbumData.songs = updatedObject.songs
        }

        const updatedInfo = await albumsCollection.updateOne({_id: id}, {$set: updatedalbumData});
        if (updatedInfo.modifiedCount === 0){
          throw "could not update album information successfully"
          
        }
        const albuminfo = await this.get_onealbum(id)
        const bandinfo = await this.g1(albuminfo.author)
        const result_album = await this.new_album_withbandname(albuminfo,bandinfo)
        return result_album
      },

      async g1(author){
        const bandCollection = await band_1()
        author = await this.string_check(author)
        const one_band = await bandCollection.findOne({ _id: author });
        if (!one_band) {
          throw 'Cant insert this album ,because the album has no matched band in Bands Table'
        }
        else{
          return one_band
        }
      },

      async addbandToAlbum(one_album){
        get_one = await this.g1(one_album.author)
        if (get_one == 'gg'){
          throw 'The album doesnt belong to any band'
        }
        else{
          a ={
            _id:one_album._id,
            title:one_album.title,
            author:{ 
              _id:one_album.author,
              bandName:get_one.bandName
            },
            songs:one_album.songs
          }
          return a
        }
      }
      
}

module.exports = exportedMethods
