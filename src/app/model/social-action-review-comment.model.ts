export class SocialActionReviewComment{

    reviewCommentID: number;
    reviewComment: string;
    reviewCommentDate: Date;

    constructor(reviewCommentID: number,
        reviewComment: string,
        reviewCommentDate: Date){

            this.reviewCommentID = reviewCommentID;
            this.reviewComment = reviewComment;
            this.reviewCommentDate = reviewCommentDate;

        }

}