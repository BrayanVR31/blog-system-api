import { IsIn, IsInt, IsString, IsUUID, MinLength } from "class-validator";

export default class CreateCommentDto {
  @IsUUID()
  postId: string;
  @IsUUID()
  userId: string;
  @IsString()
  @MinLength(3)
  content: string;
  @IsString()
  @IsIn([
    "approved" , "pending" , "spam" , "deleted"
  ])
  status: "approved" | "pending" | "spam" | "deleted";
  @IsInt()
  likes: number;
  @IsInt()
  replies: number;
}