import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
/**
 * Modules
 */
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { CommentsModule } from './comments/comments.module';
import { ReactionsModule } from './reactions/reactions.module';
import { UsersModule } from './users/users.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { FollowersModule } from './followers/followers.module';
/**
 * Entities
 */
import { Category } from "./categories/category.entity";
import { Tag } from './tags/tag.entity';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { Comment } from './comments/comment.entity';
import { Follower } from './followers/follower.enity';


@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: "postgres",
      url: "postgresql://postgres.jlwyfrvktgdaelqgmoct:MGSexMBK6i1ZHG2I@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true",
      synchronize: true,
      entities: [Category, Tag, User, Post, Comment, Follower]
    })
  }), PostsModule, CategoriesModule, TagsModule, CommentsModule, ReactionsModule, UsersModule, BookmarksModule, FollowersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }
}
