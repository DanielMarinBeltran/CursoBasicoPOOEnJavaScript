import Teacher from'./teacher.js'
import Course from'./courses.js'
import Lesson from'./lessons.js'
import LearningPath from'./learningPaths.js'
import Student from'./students.js'

// Teachers ------------------------

const FreddyVega = new Teacher({
    id: 1,
    name: "Freddy Vega",
    speciality: "CEO",
});
console.log(FreddyVega);

const JuanDC = new Teacher({
    id:2,
    name: "Juan DC",
    speciality: "Leader"
});
console.log(JuanDC);

// Lecciones ------------------------

const lesson1PB = new Lesson({
    id:1,
    title: "Clase 1 Prog Basica",
});
console.log(lesson1PB);

const lesson1DM = new Lesson({
    id:2,
    title:"Clase 1 Marketing Digital",
});
console.log(lesson1DM);

// Cursos ------------------------

const cursoProgBasica = new Course({
    id: 1,
    name: "Curso Gratis de Programación Básica",
    classes: [lesson1PB,],
    teacher: FreddyVega,
});
console.log(cursoProgBasica);

const cursoIntroMarketingDigital = new Course ({
    id: 2,
    name: "Curso de introducción al Marketing Digital",
    classes:[lesson1DM],
    teacher: JuanDC
});
console.log(cursoIntroMarketingDigital);

// Escuelas ---------------------

const escuelaDesarrolloWeb = new LearningPath({
    id: 1,
    title: 'Escuela de Desarrollo Web',
    courses: [cursoProgBasica],
  });
  console.log(escuelaDesarrolloWeb);
  
  const escuelaMarketingDigital = new LearningPath({
    id: 2,
    title: 'Marketing Digital',
    courses: [cursoIntroMarketingDigital],
  });
  console.log(escuelaMarketingDigital);
  
  
  // Estudiantes ---------------------

  const miguel = new Student({
    id: 1,
    name: 'Miguel',
    email: 'miguel@gmail.com',
    username: 'mike',
    points: 40000,
    approvedCourses: [cursoProgBasica],
    learningPaths: [escuelaDesarrolloWeb]
  });
  console.log(miguel);