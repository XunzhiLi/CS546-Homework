const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const post = {
        "storyTitle": "Tipping habits",
        "story": "When I first arrived in the United States, I didn't know that the United States also had the habit of tipping. \\nI thought it was only in the European countries such as France.\nThen every time I go to eat, I leave after I finish the check. No wonder every time I feel the waiter's last look is unfriendly, hahaha."
      }
      res.json(post);
    } catch (e) {
      res.status(404).json({ message: "Post not found" });
    }
  });

  module.exports = router;