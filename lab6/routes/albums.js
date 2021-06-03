const express = require("express");
const router = express.Router();
const data = require("../data");
const bandData = data.bands;
const albumData =  data.albums;
router.get('/', async (req, res) => {
	try {
		const Album_list = await albumData.getalbums()
		res.json(Album_list);
	} catch (e) {
		res.status(404).json({ error: 'Albums not found' });
	}
});

router.get('/:id', async (req, res) => {
	try {

		const one_album = await albumData.get_onealbum(req.params.id);
		const result_band = await albumData.addbandToAlbum(one_album)
        res.status(200).json(result_band);
	} catch (e) {
		res.status(404).json({ error: "Album not found"});
	}
});

router.post('/', async (req, res) => {
	const albuminfo = req.body;
	console.log(albuminfo)
	if (!albuminfo.title) {
		res.status(400).json({ error: 'You must provide album title' });
		return; 
	}
	if (!albuminfo.author) {
		res.status(400).json({ error: 'You must provide author' });
		return;
	}
	if (!albuminfo.songs) {
		res.status(400).json({ error: 'You must provide songs' });
		return;
    }
    if(albuminfo.songs){
        if(!Array.isArray(albuminfo.songs)){
            res.status(400).json({ error: 'The songs should be an array' });
		return;
        }
        if(albuminfo.songs.length <= 0){
            res.status(400).json({ error: "You must provide at least one song." });
		return;
        }
    }
	try {
		const { title,author,songs } = albuminfo;
		const new_album = await albumData.addAlbum(title,author,songs)
		console.log(new_album)
        res.status(200).json(new_album);
	} catch (e) {
		res.status(404).json({ error:"cant post because there is no matched band"});
	}
});

router.patch('/:id', async (req, res) => {
	const requestBody = req.body;
	let updatedObject = {};
	
	try {
		const old_album = await albumData.get_onealbum(req.params.id)
		if(requestBody.newTitle&& typeof requestBody.newTitle !='string'){
			res.status(400).json({ error: 'newtitle should be a string.' })
			return;
		}
		if (requestBody.newTitle && requestBody.newTitle !== old_album.title) {
			updatedObject.title = requestBody.newTitle;
		}
		if(requestBody.newSongs && typeof requestBody.newSongs !='string'){
			res.status(400).json({ error: 'newSong should be a string.' })
			return;
		}
		if (requestBody.newSongs) {
			old_album.songs.push(requestBody.newSongs)
			updatedObject.songs = old_album.songs
		}
		console.log(updatedObject)

	} catch (e) {
		res.status(404).json({ error: 'album not found' });
		return;
	}
	try {
		const updated_album = await albumData.album_update(req.params.id,updatedObject);
		console.log(updated_album)
		res.status(200).json(updated_album);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.delete('/:id', async (req, res) => {
	if (!req.params.id) {
		res.status(400).json({ error: 'You must Supply and ID to delete' });
		return;
	}
	try {
		will_delete = await albumData.get_onealbum(req.params.id)
		console.log(will_delete)
		will_delete = await albumData.addbandToAlbum(will_delete)
		console.log(will_delete)
	} catch (e) {
		res.status(404).json({ error: 'album not found' })
		return;
	}
	try {
		going_to_delete = await albumData.remove(req.params.id,will_delete)
		res.status(200).json(going_to_delete);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

module.exports = router;
