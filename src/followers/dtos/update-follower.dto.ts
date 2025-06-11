import { PartialType } from "@nestjs/mapped-types";
import CreateFollowerDto from "./create-follower.dto";

export default class UpdateFollowerDto extends PartialType(CreateFollowerDto){}