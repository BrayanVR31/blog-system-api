import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "tags"
})
export class Tag {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    type: "varchar",
    length: 50,
    nullable: false
  })
  name: string;
  @Column({
    type: "varchar",
    length: 50,
    nullable: false
  })
  slug: string;
  @Column({
    type: "text",
    nullable: true
  })
  description: string;
  @Column({
    type: "varchar",
    length: 7,
    nullable: false
  })
  color: string;
}