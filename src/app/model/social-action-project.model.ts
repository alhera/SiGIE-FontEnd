import { UniversityBranch } from './universitybranch.model';
import { InternalSocialActionCollaborator } from './internal-social-action-collaborator.model';
import { ExternalSocialActionCollaborator } from './external-social-action-collaborator.model';
import { SocialActionReviewComment } from './social-action-review-comment.model';

export class SocialActionProject{

    code: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    active: boolean;
    visible: boolean;
    publicationStatus: string;
    internalCollaborators: InternalSocialActionCollaborator[];
    externalCollaborators: ExternalSocialActionCollaborator[];
    listReviewComments: SocialActionReviewComment[];
    branch: UniversityBranch;

    constructor(
        code?: number,
        title?: string,
        description?: string,
        startDate?: Date,
        endDate?: Date,
        active?: boolean,
        visible?: boolean,
        publicationStatus?: string,
        internalCollaborators?: InternalSocialActionCollaborator[],
        externalCollaborators?: ExternalSocialActionCollaborator[],
        listReviewComments ?: SocialActionReviewComment[],
        branch?: UniversityBranch){

            this.code = code;
            this.title = title;
            this.description = description;
            this.startDate = startDate;
            this.endDate = endDate;
            this.active = active;
            this.visible = visible;
            this.publicationStatus = publicationStatus;
            this.internalCollaborators = internalCollaborators;
            this.externalCollaborators = externalCollaborators;
            this.listReviewComments = listReviewComments;
            this.branch = branch;

        }


}
