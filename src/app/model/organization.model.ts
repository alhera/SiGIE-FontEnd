export class Organization{

    organizationId: number;
    organizationName: string;
    organizationDepartment: string;

    constructor(
        organizationId:number, 
        organizationName: string,
        organizationDepartment: string){

            this.organizationId = organizationId;
            this.organizationName = organizationName;
            this.organizationDepartment = organizationDepartment;

    }

}