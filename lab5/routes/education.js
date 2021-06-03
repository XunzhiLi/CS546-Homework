const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const post = [
        {
          "schoolName": "Deyang No.5 Middle School",
          "degree": "High School Diploma",
          "favoriteClass": "P.E",
          "favoriteMemory": "there was a hiking organized by our teacher before our Chinese college entrance examination.That was probably the happiest and most relaxing day of my year, because everything was goning to be over and my life would start a new chapter."
        },
        {
            "schoolName": "Southwest Petroleum University",
            "degree": "Bachelor of Engineering Degree",
            "favoriteClass": "3d-Unity Games develop",
            "favoriteMemory": "The last day after graduation:roomates left one by one "
          },
          {
            "schoolName": "Stevens Institute of technology",
            "degree": "Master of Science Degree",
            "favoriteClass": "not sure yet",
            "favoriteMemory": "maybe it will be the moment when i find a suitable job in NYC"
          }
    ]
      res.json(post);
    } catch (e) {
      res.status(404).json({ message: "Post not found" });
    }
  });

  module.exports = router;