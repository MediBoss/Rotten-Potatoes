const express = require('express');
const router =  express.Router();

// PATH TO INSTANCE OF MODELS
const Review = require('./models/review');
const Comment = require('./models/comment');
