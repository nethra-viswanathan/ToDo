import express from "express";
import * as todoController from './../controllers/todo-controller.js'

const Router = express.Router();
//redirect to Controller to perform CRUD
Router.route('/').post(todoController.post);
Router.route('/').get(todoController.get);
Router.route('/').put(todoController.put);
Router.route('/').delete(todoController.remove);


export default Router; 