import { Post } from "src/posts/post.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "comments"
})
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    type: "text",
    nullable: false
  })
  content: string;
  @Column({
    type: "enum",
    enum: ["approved" , "pending" , "spam" , "deleted"],
    nullable: false
  })
  status: "approved" | "pending" | "spam" | "deleted";
  @Column({
    type: "int",
    nullable: false,
    default: 0
  })
  likes: number;
  @Column({
    type: "int",
    nullable: false,
    default: 0
  })
  replies: number;
  @ManyToOne(()=>Post, (post)=>post.comments)
  @JoinColumn({
    name: "post_id",
    referencedColumnName: "id"
  })
  post: Post;
  @ManyToOne(()=>User, (user)=>user.posts)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id"
  })
  user: User;
}