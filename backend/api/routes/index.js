import TodoRouter from './todo-routes.js';

export default (app) => {
    //create route link for create API
    app.use('/todo',TodoRouter);
    //create route link for Listing API
    app.use('/list-todo',TodoRouter);
    //create route for update API
    app.use('/update-todo',TodoRouter);
    //create route for delete API
    app.use('/remove-todo',TodoRouter);

    
}