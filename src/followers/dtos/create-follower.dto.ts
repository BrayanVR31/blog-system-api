import { IsUUID } from "class-validator";

export default class CreateFollowerDto {
  @IsUUID()
  userId: string;
}