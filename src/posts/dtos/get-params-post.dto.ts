import { IsUUID } from "class-validator";

export default class GetParamsPostDto {
  @IsUUID()
  id: string;
}