const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprovados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprovados.push(nuevoCursito);
    },
};

// Hacer Natalia apruebe otro curso
// natalia.cursosAprovados.push("Curso de Responsive Design");

function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // } Esta es una forma de trabajar con el prototipo, pero ya vamos a ver una forma mas interesante.
};

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
};
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de CSS y HTML",
        "Curso de preprocesadores",
    ]
);