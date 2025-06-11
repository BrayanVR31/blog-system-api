import { IsUUID } from "class-validator";

export default class GetParamsFollowerDto {
  @IsUUID()
  id: string;
}