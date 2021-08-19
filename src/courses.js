export default class Course {
    constructor({
        id,
        name,
        classes = [],
        teacher,
        isFree = false,
        lang = "spanish",
    }){
        this.id = id;
        this._name = name;
        this.classes = classes;
        this.teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(newname){
        if(newname === "Bad names"){
            console.error("I dont think so....");
        }else{
            this._name = newname;
        }
    }
};