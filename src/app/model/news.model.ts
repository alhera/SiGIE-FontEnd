import { NewsCategory } from "./newscategory.model";
import { UniversityBranch } from "./universitybranch.model";

export class News {
  constructor(public newsId?: number, public title?: string,
    public content?: string, public publicationDate?: Date,
    public image?: string, public visible?: boolean, public expirationDate?: Date,
    public authorName?: string, public authorLastName?: string, public authorMail?: string,
    public newsCategory?: NewsCategory, public universityBranch?: UniversityBranch, public authorInstitutionRole?: string) {
  }
}
