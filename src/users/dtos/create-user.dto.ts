import { IsArray, IsDate, IsEmail, IsIn, IsOptional, IsString, IsStrongPassword, IsUrl, MaxLength, MinLength } from "class-validator";

export default class CreateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  username: string;
  @IsEmail()
  @MaxLength(255)
  email: string;
  @IsString()
  @MinLength(8)
  @IsStrongPassword()
  password: string;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  firstName?: string;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  lastName?: string;
  @IsOptional()
  @IsString()
  bio?: string;
  @IsOptional()
  @IsString()
  avatar?: string;
  @IsOptional()
  @IsArray()
  socialLinks?: string[];
  @IsString()
  @IsIn([
    "user","author","moderator","admin"
  ])
  role: "user"|"author"|"moderator"|"admin";
  @IsOptional()
  @IsDate()
  lastLogin?: Date;
  @IsOptional()
  @IsUrl()
  urlWebsite?: string;
}