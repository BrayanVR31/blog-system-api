import { IsUUID } from "class-validator";

export default class CreateBookmarkDto {
  @IsUUID()
  userId: string;
  @IsUUID()
  postId: string;
}