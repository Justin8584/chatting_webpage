const express = require("express");
const {
    summaryController,
    paragraphController,
    chatController,
    jsconverterController,
    scifiImageController,
} = require("../controllers/openAiController");

const router = express.Router();

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chat", chatController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

module.exports = router;
