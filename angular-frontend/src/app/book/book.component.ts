import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  allbooks: Book[]=[];
  constructor(private bookService: BookService){}
  ngOnInit(): void {
    this.bookService.getAll().subscribe((data) =>{
      this.allbooks=data;
    })
    //throw new Error('Method not implemented.');
  }

}
