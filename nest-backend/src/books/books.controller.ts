import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
//import { BookDto } from './dto/book.dto';
import { BooksService } from './books.service';
import { BookDto } from 'src/book-dto/book-dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/')
  async findAll() {
    return this.booksService.findAll();
  }

  @Post('/save')
  async create(@Body() bookDto: BookDto) {
    return this.booksService.create(bookDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bookDto: BookDto) {
    return this.booksService.update(id, bookDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.booksService.delete(id);
  }
}