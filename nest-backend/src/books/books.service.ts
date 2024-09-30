import { Injectable } from '@nestjs/common';
//import { BookDto } from './dto/book.dto';
import { BookDto } from 'src/book-dto/book-dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [];

  findAll(): BookDto[] {
    return this.books;
  }

  create(bookDto: BookDto): BookDto {
    this.books.push(bookDto);
    return bookDto;
  }

  update(id: number, bookDto: BookDto): BookDto {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books[index] = { ...bookDto, id };
      return this.books[index];
    }
    return null;
  }

  delete(id: number): BookDto {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      const deletedBook = this.books[index];
      this.books.splice(index, 1);
      return deletedBook;
    }
    return null;
  }
}