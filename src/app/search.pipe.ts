import { Pipe, PipeTransform } from '@angular/core';
import { products } from 'src/app/shared/interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:products[] , term:string ): products[] {
    return products.filter(
      (product )=>
      product.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }

}
