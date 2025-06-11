import { IsIn, IsString, IsUUID } from "class-validator";

export default class CreateReactionDto {
  @IsUUID()
  userId: string;
  @IsUUID()
  postId: string;
  @IsUUID()
  commentId: string;
  @IsString()
  @IsIn([
    "like" , "love" , "dislike" , "worst"
  ])
  reactionType: "like" | "love" | "dislike" | "worst";
}