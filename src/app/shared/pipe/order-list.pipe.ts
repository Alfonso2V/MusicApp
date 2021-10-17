import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {
  //Value= valores que llegan, seguido del tipo de dato que se recibe, args y sort= argumentos que se reciben y al final el tipo de dato que sale
  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] { 
    try{
      if(args == null)
        return value
      else{
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1
          }
          else if (a[args] === b[args]) {
            return 0;
          }
          else if (a[args] > b[args]) {
            return 1;
          }
          return 1
        });
        return (sort === 'asc' ) ? tmpList : tmpList.reverse()
           // ⬆⬆⬆ Si es ascendente nos regresa la lista como llego, pero si no es nos la regresa en reverso que es descendente
      }

    }catch(e){
      console.log('Algo paso!');
      return value
    }
  }
}