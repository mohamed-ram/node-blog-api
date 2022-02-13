const Article = require("../models/article");

// @desc     Create new article.
// @router   POST /api/articles
exports.createArticle = async (req, res, next) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json({
      success: true,
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
    });
  }
};

// @desc     Get all articles.
// @router   GET /api/articles
exports.getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
    });
  }
};

// @desc     Get article by id.
// @router   GET /api/articles/:id
exports.getSingleArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ success: false, data: null });
    }
    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
    });
  }
};

// @desc     Update article with id.
// @router   PUT /api/articles/:id
exports.updateArticle = async (req, res, next) => {
  try {
    const updates = Object.keys(req.body);
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ success: false, data: null });
    }

    updates.forEach((update) => {
      article[update] = req.body[update];
    });

    await article.save();

    res.status(201).json({
      success: true,
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
    });
  }
};

// @desc     Get all articles.
// @router   GET /api/articles
exports.deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ success: false, data: null });
    }

    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
    });
  }
};
