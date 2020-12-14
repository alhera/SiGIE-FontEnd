const docentes = [
    {
        name: "Rolando",
        lastName: "Valderrama Rosario",
        courses: ["Lenguajes", "Ingeniería"],
        startYear: "1995",
        livesIn: "Cartago"
    },

    {   
        name: "Diana",
        lastName: "Reventos Quiros",
        courses: 
            [
                "Fundamentos de bases de datos", 
                "Informática aplicada a los negocios", 
                "Práctica Empresarial"
            ],
        startYear: "2008",
        livesIn: "Turrialba"
    }

]

export default docentes; 
function filterDocente(name:string):any{
    return docentes.find(x=>x.name===name);
}
export function getDocenteLocation(name:string): string{
    return filterDocente(name).livesIn;
}
 function getDocenteCourses(name:string): Array<string>{
    return filterDocente(name).courses;
}
export {getDocenteCourses};

