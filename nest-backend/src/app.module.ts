import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookDto } from './book-dto/book-dto';
@Module({
  //imports: [BooksModule],
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
     // entities: [__dirname + '/**/*.book-dto{.ts,.js}'],
    entities: [BookDto],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
