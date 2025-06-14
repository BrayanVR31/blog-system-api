import { User } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ForeignKey, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Comment } from "src/comments/comment.entity";
import { Category } from "src/categories/category.entity";

@Entity({
  name: "posts"
})
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({
    name: "author_id",
    referencedColumnName: "id"
  })
  user: User;
  @Column({
    type: "varchar",
    length: 255,
    nullable: false
  })
  title: string;
  @Column({
    type: "varchar",
    length: 255,
    nullable: false
  })
  slug: string;
  @Column({
    type: "text",
    nullable: false
  })
  content: string;
  @Column({
    type: "varchar",
    nullable: false
  })
  excerpt: string;
  @Column({
    type: "enum",
    enum: ["draft" , "published" , "archived" , "deleted"],
    nullable: false,
    default: "draft"
  })
  status: "draft" | "published" | "archived" | "deleted";
  @Column({
    type: "varchar",
    nullable: false
  })
  thumbnail: string;
  @Column({
    type: "enum",
    enum: ["public","private","unlisted"],
    nullable: false
  })
  visibility: "public"|"private"|"unlisted";
  @Column({
    type: "int",
    nullable: true,
    default: 0
  })
  views: number;
  @Column({
    type: "int",
    nullable: true,
    default: 0
  })
  likes: number;
  @Column({
    type: "int",
    nullable: true,
    default: 0,
    name: "comment_count"
  })
  commentCount: number;
  @Column({
    type: "timestamp",
    nullable: false,
    name: "published_at"
  })
  publishedAt: Date;
  @Column({
    type: "timestamp",
    nullable: false
  })
  readingTime: Date;
  @OneToMany(() => Comment, (comment)=>comment.post)
  comments: Comment[]
  @ManyToMany(()=>Category)
  @JoinTable({
    name: "post_categories",
    joinColumn: {
      name: "post_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "category_id",
      referencedColumnName: "id"
    }
  })
  categories: Category[];
}