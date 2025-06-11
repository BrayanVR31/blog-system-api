import { PartialType } from "@nestjs/mapped-types";
import CreateReactionDto from "./create-reaction.dto";

export default class UpdateReaction extends PartialType(CreateReactionDto) {}