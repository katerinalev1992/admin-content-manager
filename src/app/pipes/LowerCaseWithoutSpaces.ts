import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toLowerCaseWithoutSpaces'})
export class LowerCaseWithoutSpaces implements PipeTransform {

  transform(value: string): string {
    return value.replace(' ', '').toLocaleLowerCase();
  }

}
