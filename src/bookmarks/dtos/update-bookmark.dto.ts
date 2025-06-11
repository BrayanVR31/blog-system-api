import { PartialType } from "@nestjs/mapped-types";
import CreateBookmarkDto from "./create-bookmark.dto";

export default class UpdateBookmarkDto extends PartialType(CreateBookmarkDto){}