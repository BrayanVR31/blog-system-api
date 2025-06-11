import { IsUUID } from "class-validator";

export default class GetParamsReactionDto {
  @IsUUID()
  id: string;
}