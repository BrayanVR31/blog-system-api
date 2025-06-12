import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { TagsController } from './tags/tags.controller';
import { CommentsController } from './comments/comments.controller';
import { TagsModule } from './tags/tags.module';
import { CommentsModule } from './comments/comments.module';
import { ReactionsModule } from './reactions/reactions.module';
import { UsersModule } from './users/users.module';
import { BookmarksController } from './bookmarks/bookmarks.controller';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { FollowersModule } from './followers/followers.module';
/**
 * Services
 */
import { TagService } from "./tags/providers/tag.service";
import { CategoriesService } from './categories/providers/categories.service';
/**
 * Entities
 */
import { Category } from "./categories/category.entity";
import { DataSource } from 'typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    entities: [Category]
  }), PostsModule, CategoriesModule, TagsModule, CommentsModule, ReactionsModule, UsersModule, BookmarksModule, FollowersModule],
  controllers: [AppController, PostsController, CategoriesController, TagsController, CommentsController, BookmarksController],
  providers: [AppService, TagService, CategoriesService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
