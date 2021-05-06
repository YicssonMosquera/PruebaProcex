import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hemofilia'
})
export class HemofiliaPipe implements PipeTransform {

  transform(value: any, args: String):any {
    if (!value) return null
    if (!args) return value
    const resultadohemofilia = []
    for (const hemofilia of value) {
      if ((hemofilia.CAMPO_1.toLowerCase().indexOf(args.toLowerCase()) > -1) || (hemofilia.CAMPO_2.toLowerCase().indexOf(args.toLowerCase()) > -1) ||(hemofilia.CAMPO_3.toLowerCase().indexOf(args.toLowerCase()) > -1) ||(hemofilia.CAMPO_4.toLowerCase().indexOf(args.toLowerCase()) > -1) || (hemofilia.CAMPO_5.toLowerCase().indexOf(args.toLowerCase()) > -1) || (hemofilia.CAMPO_6.toLowerCase().indexOf(args.toLowerCase()) > -1) || (hemofilia.CAMPO_7.toLowerCase().indexOf(args.toLowerCase()) > -1) || (hemofilia.CAMPO_8.toLowerCase().indexOf(args.toLowerCase()) > -1) || (hemofilia.VALIDACION_REGISTRO.toLowerCase().indexOf(args.toLowerCase()) > -1) ||  (hemofilia.VALIDACION_SOPORTE.toLowerCase().indexOf(args.toLowerCase())) > -1) {
        resultadohemofilia.push(hemofilia);
      }
    }
    return resultadohemofilia;
  }

}
