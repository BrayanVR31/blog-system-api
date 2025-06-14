import { Comment } from "src/comments/comment.entity";
import { Follower } from "src/followers/follower.enity";
import { Post } from "src/posts/post.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users"
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    type: "varchar",
    length: 50,
    unique: true,
    nullable: false
  })
  username: string;
  @Column({
    type: "varchar",
    length: 255,
    unique: true,
    nullable: false
  })
  email: string;
  @Column({
    type: "varchar",
    length: 100,
    nullable: false
  })
  password: string;
  @Column({
    type: "varchar",
    length: 100,
    nullable: true
  })
  firstName: string;
  @Column({
    type: "varchar",
    length: 100,
    nullable: true
  })
  lastName: string;
  @Column({
    type: "text",
    nullable: true
  })
  bio: string;
  @Column({
    type: "text",
    nullable: true
  })
  avatar: string;
  @Column({
    type: "varchar",
    nullable: true,
    name: "social_links",
    array: true
  })
  socialLinks: string[];
  @Column({
    type: "enum",
    nullable: false,
    enum: ["user","author","moderator","admin"]
  })
  role: "user"|"author"|"moderator"|"admin";
  @Column({
    type: "timestamp",
    name: "last_login",
    nullable: true,
  })
  lastLogin: Date;
  @Column({
    type: "varchar",
    name: "url_website",
    nullable: true,
  })
  urlWebsite: string;
  @OneToMany(()=>Post, (post) => post.user)
  posts: Post[];
  @OneToMany(()=>Comment, (comment)=>comment.user)
  comments: Comment[];
  @OneToMany(()=>Follower, (follower) => follower.followingUser)
  followingToUser: Follower[];
  @OneToMany(()=>Follower, (follower) => follower.followerUser)
  followerUser: Follower[];
  @ManyToMany(()=>Post)
  @JoinTable({
    name: "bookmarks",
    joinColumn:{
      name: "user_id"
    },
    inverseJoinColumn: {
      name: "post_id"
    }
  })
  savedPosts: Post[];
}