import { IsUUID } from "class-validator";

export default class GetParamsBookmarkDto {
  @IsUUID()
  id: string;
}