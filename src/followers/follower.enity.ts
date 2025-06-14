import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "followers"
})
export class Follower {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @ManyToOne(() => User, (user)=>user.followingToUser)
  @JoinColumn({
    name: "following_user_id"
  })
  followingUser: User;
  @ManyToOne(() => User, (user) => user.followerUser)
  @JoinColumn({
    name: "follower_user_id"
  })
  followerUser: User;
}