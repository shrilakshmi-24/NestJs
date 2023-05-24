import { Body, Controller, Get, Post,Put,Delete ,Param, ParseIntPipe, UseFilters, UseGuards, UseInterceptors} from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./book.dto";
import { BookPipe } from "./book.pipe";
import { bookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";
import { BookIntercepter } from "./book.interceptors";

@Controller('book')
export class BookController{
    constructor(private bookService:BookService){}

//pipe demo
@Get()
@UseFilters(BookCustomExceptionFilter)
findBookById(): string {
  throw new bookException()
  return 'book by id';
}


@Get('/findall')
// @UseGuards(new BookGuard())
@UseInterceptors(BookIntercepter)
getAllBooks():Book[]{
    return this.bookService.getAllBooks()
}

@Post('/add')
addBooks(@Body(new BookPipe()) book: Book){
    return "book by id"
}
@Put('update')
updateBook(@Body() book: Book) {
    return this.bookService.updateBook(book);
  }
@Post('')
@UseInterceptors(BookIntercepter)
helloworld():string{
  return "this is from api"
}



// @Delete('delete/:id')
//   deleteBook(@Param('id') bookId: string) {
//     return this.bookService.deleteBook(bookId);
//   }





}