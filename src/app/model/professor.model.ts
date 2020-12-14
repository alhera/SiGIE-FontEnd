export class Professor{

    professorId: number;
    name: string;
    lastName: string;
    institutionalMail: string;
    academicDegreeAcronym: string;

    constructor(
        professorId:number, 
        name: string,
        lastName: string,
        institutionalMail: string,
        academicDegreeAcronym: string){

            this.professorId = professorId;
            this.name = name;
            this.lastName = lastName;
            this.institutionalMail = institutionalMail;
            this.academicDegreeAcronym = academicDegreeAcronym;

    }

}