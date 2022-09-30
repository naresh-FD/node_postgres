const express = require('express');
const { getallres, getallresbyId, createRes } = require('../controllers/restaurantController');
const resRouter = express.Router();

resRouter.route('/').post(createRes).get(getallres);
resRouter.route('/:id').get(getallresbyId);
// .patch(updateTour).delete(deleteTour);
module.exports = resRouter;
