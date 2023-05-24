import { Injectable } from '@nestjs/common';
import { Book } from './book.dto';
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class BookService {
  public books: Book[] = [];

  // Add book
  addBook(book: Book): string {
    book.id=uuidv4()
    this.books.push(book);
    return 'Book has been added to the library';
  }

  // Update book
  updateBook(book: Book): string {
    const index = this.books.findIndex((currentBook) => currentBook.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      return 'Book updated successfully';
    }
    return 'Book not found';
  }

  // Delete book
  // deleteBook(bookId: string): string {
  //   const initialLength = this.books.length;
  //   this.books = this.books.filter((book) => book.id !== bookId);
  //   if (this.books.length < initialLength) {
  //     return 'Book has been deleted';
  //   }
  //   return 'Book not found';
  // }

  // Get all books
  getAllBooks(): Book[] {
    return this.books;
  }
}
