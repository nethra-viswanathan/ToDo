import * as todoService from './../services/todo-service.js';
//Set response for all APIs
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//Set error for all APIs
const setError = (err,response) => {
    response.status(500);
    response.json(err);
}

//POST API that gets the data from body and sends it to service
export const post = async(req,res) =>{
    try{
        const todo = req.body; 
        const savedtodo = await todoService.save(todo);
        setResponse(savedtodo,res)
    }catch(err){
        setError(err,res);
    }
    

}

//GET API that gets parameters from body and send it to the list method in service
export const get = async(req,res) =>{
    try{
        const todo = req.body; 
        const listtodo = await todoService.list(todo);
        setResponse(listtodo,res)
    }catch(err){
        setError(err,res);
    }
}

//PUT API gets body from request and sends it to update method in service
export const put = async(req,res) =>{
    try{
        // const todo = req.body; 
        
        const savedtodo = await todoService.update(req);
        setResponse(savedtodo,res)
    }catch(err){
        setError(err,res);
    }
}

//DELETE method gets id from body and sends it to delete method in service
export const remove = async(req,res) =>{
    try{
        
        // const todo = req.body; 
        const removetodo = await todoService.remove(req);
        setResponse(removetodo,res)
    }catch(err){
        setError(err,res);
    }
}