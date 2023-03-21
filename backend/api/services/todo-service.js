import Todo from './../models/to-do.js'

//To create a new field  s
export const save = async(todo) => {
    const newTodo = new Todo(todo);
    return newTodo.save();
}

//to update id,title,description,created date & modified date to the DB
export const update = async(req) => {
    const date = Date.parse(new Date().toLocaleDateString());
    const query = req.query.id
    const filter = { _id: query};
    const update = req.body;
    update.lastModifiedDate = date;
    console.log("updating",update.lastModifiedDate )
    
    const newTask = Todo.findOneAndUpdate(filter,update,{

        new: true

    }).exec();



    return newTask;
}

//Remove a field from the DB using the id
export const remove = async(req) => {
    const query = req.query.id
    const filter = { _id: query };
    const newTask = Todo.findOneAndDelete(filter).exec();

    return newTask
}

//List all entries in the DB
export const list = async() => {
    return Todo.find({})
}