const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const post = {
        "name": "Xunzhi Li",
        "cwid": "10457500",
        "biography": "I was born in a small urban city. \n I want to live in a big city!",
        "favoriteShows": ["CONAN", "THE TONIGHT SHOW", "JIMMY KIMMEL LIVE", "THE LATE SHOW"],
        "hobbies": ["E-Sports", "Basketball", "Travelling"]
      }
      res.json(post);
    } catch (e) {
      res.status(404).json({ message: "Post not found" });
    }
  });

  module.exports = router;