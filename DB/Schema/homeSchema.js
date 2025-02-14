const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  topBanner: {
    homeBannerUrl: { type: String, default: "" },
    productName: { type: String, default: "" },
    description: { type: String, default: "" },
    previewUrlOne: { type: String, default: "" },
    previewUrlTwo: { type: String, default: "" }
  },
  newDrops: [
    {
      url: { type: String, default: "" },
      productName: { type: String, default: "" },
      price: { type: String, default: "" }
    }
  ],
  categories: [
    {
      url: { type: String, default: "" },
      productName: { type: String, default: "" }
    }
  ],
  review: [
    {
      personImgUrl: { type: String, default: "" },
      productUrl: { type: String, default: "" },
      reviewTitle: { type: String, default: "" },
      reviewContent: { type: String, default: "" },
      rate: { type: String, default: "" }
    }
  ]
});

module.exports = ("Home", HomeSchema, "home");