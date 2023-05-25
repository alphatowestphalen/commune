import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(premierCopies: any[], search: string): any[] {
    if(!premierCopies || !premierCopies.length) return premierCopies;
    if(!search || !search.length) return premierCopies;
    return premierCopies.filter(premierCopie => {
      return premierCopie.enfant.nomEnfant.toString().toLowerCase().indexOf(search.toLowerCase()) > -1
    });
  }

}
