import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { Book } from "./book.dto";
import {plainToInstance} from 'class-transformer'
import {validate} from 'class-validator'

export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
   const bookClass=plainToInstance(Book,value)

   const errors=await validate(bookClass)
    if(errors.length>0){
        throw new BadRequestException("validation failed"+JSON.stringify(errors))
    }
    console.log(value,typeof(value))
    return value
  }
}
