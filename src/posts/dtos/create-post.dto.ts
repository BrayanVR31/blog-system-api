import { IsUUID, IsString, MinLength, MaxLength, IsIn, IsInt, IsOptional, IsDate } from "class-validator";

export default class CreatePostDto {
  @IsUUID()
  authorId: string;
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  title: string;
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  slug: string;
  @IsString()
  @MinLength(3)
  content: string;
  @IsString()
  @MinLength(3)
  excerpt: string;
  @IsString()
  @IsIn([
    "draft" , "published" , "archived" , "deleted"
  ])
  status: "draft" | "published" | "archived" | "deleted";
  @IsString()
  @MinLength(3)
  thumbnail: string;
  @IsString()
  @IsIn([
    "public","private","unlisted"
  ])
  visibility: "public"|"private"|"unlisted";
  @IsInt()
  @IsOptional()
  views?: number;
  @IsInt()
  @IsOptional()
  likes?: number;
  @IsInt()
  @IsOptional()
  commentCount?: number;
  @IsDate()
  publishedAt: Date;
  @IsInt()
  readingTime: number; // ms
}