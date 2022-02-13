const express = require("express");
const router = express.Router();
const {
  createArticle,
  getArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

router.route("/").get(getArticles).post(createArticle);

router
  .route("/:id")
  .get(getSingleArticle)
  .patch(updateArticle)
  .delete(deleteArticle);

module.exports = router;
