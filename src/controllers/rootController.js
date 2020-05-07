const Post = require('../models').Post;
const config = require('../config/config.js');
const testColors = ['light-green', 'light-pink', 'cyan', 'light-orange', 'light-purple']
const testImages = ['https://pbs.twimg.com/media/EVaefChWoAA9Pwv?format=jpg', 'https://pbs.twimg.com/media/EV0PV-tWkAI2fjV?format=jpg', 'https://pbs.twimg.com/media/EV-dmmAXgAE59Lq?format=jpg', 'https://pbs.twimg.com/media/EWBHKcNUMAA3yPc?format=jpg', 'https://pbs.twimg.com/media/EVhCDJmXgAIMwUi?format=jpg', 'https://pbs.twimg.com/media/EVXALM1XsAAGVvp?format=jpg', 'https://pbs.twimg.com/media/EU01KaXX0AsbxUW?format=jpg', 'https://pbs.twimg.com/media/EVp_CgyXQAE4VpG?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EVSLu_jWoAI_EGY?format=jpg']
const path = require('path')
const postService = require('../services/postService')

exports.root = function(req, res) {
  res.render('index', {
    title: 'Home page'
  })
}

exports.quienes_somos = function(req, res) {
  res.render('quienes_somos')
}

exports.dona = function(req, res) {
  res.render('dona')
}

exports.faq = function(req, res) {
  res.render('faq')
}