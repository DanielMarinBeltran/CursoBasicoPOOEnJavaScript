export default class Students {
    constructor({
        name,
        email,
        username,
        points= 0,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this._name = name;
        this.email = email;
        this.username = username;
        this.points = points;
        this._socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

    get socialMedia(){
        return this._socialMedia;
    }
    set socialMedia(newsocialMedia){
        this._socialMedia = newsocialMedia;
    }
};

class FreeStudent extends Students{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos, "+ this.name + ", solo puedes tomar cursos gratis.")
        }
    }
}

class BasicStudent extends Students{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos, "+ this.name + ", no puedes tomar cursos en ingles.")
        }
    }
}

class ExpertStudent extends Students{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}