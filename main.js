// Inicia reto de la clase.
class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
};
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        "HTML Y CSS",
        "CursoJS",
        "CursoReact",
        "CursoNextJS",
    ]
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "cursoPython",
        "CursoMatematicas",
        "CursoExcel",
    ],
  });
// Finaliza reto de la clase.

class Student {
    constructor({
        name,
        email,
        usename,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.usename = usename;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "DanielMB",
    username: "daniel2015",
    email: "daniel2015@hotmail.com",
    twitter: "danielmb"
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguel@hotmail.com",
    instagram: "miguel_rc"
});