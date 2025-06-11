import { IsUUID } from "class-validator";

export default class GetParamsCommentDto {
  @IsUUID()
  id: string;
}