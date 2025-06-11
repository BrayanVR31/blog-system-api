import { IsUUID } from "class-validator";

export default class GetParamsTagDto {
  @IsUUID()
  id: string;
}