export default class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }){
        this.id = id;
        this.name = name;
        this.courses = courses;
        this.coursesQuantity = courses.length;
    }
};