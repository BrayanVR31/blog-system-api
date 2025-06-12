import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "categories"
})
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("varchar", {
    length: 100,
    nullable: false
  })
  name: string;
  @Column("varchar", {
    length: 100,
    nullable: false
  })
  slug: string;
  @Column("text", {
    nullable: true
  })
  description: string;
  @Column("char", {
    length: 7,
    nullable: true
  })
  color: string;
}