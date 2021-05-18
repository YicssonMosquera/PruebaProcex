import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { Hemofilia } from '../../models/cargahemofilia'
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service'

@Component({
  selector: 'app-cargar-hemofilia',
  templateUrl: './cargar-hemofilia.component.html',
  styleUrls: ['./cargar-hemofilia.component.css']
})
export class CargarHemofiliaComponent implements OnInit {
  file: File;
  nombrearchivo: string
  cargahemofilia: any
  hemofilia: Hemofilia = {
    CAMPO_1: '',
    CAMPO_2: '',
    CAMPO_3: '',
    CAMPO_4: '',
    CAMPO_5: '',
    CAMPO_6: '',
    CAMPO_7: '',
    CAMPO_8: '',
    CAMPO_9: '',
    CAMPO_10: '',
    CAMPO_11: '',
    CAMPO_12: '',
    CAMPO_13: '',
    CAMPO_14: '',
    CAMPO_15: '',
    CAMPO_16: '',
    CAMPO_17: '',
    CAMPO_18: '',
    CAMPO_19: '',
    CAMPO_20: '',
    CAMPO_21: '',
    CAMPO_22: '',
    CAMPO_23: '',
    CAMPO_24: '',
    CAMPO_25: '',
    CAMPO_26: '',
    CAMPO_27: '',
    CAMPO_28: '',
    CAMPO_29: '',
    CAMPO_30:'',
    CAMPO_31: '',
    CAMPO_32: '',
    CAMPO_32_1: '',
    CAMPO_32_2: '',
    CAMPO_32_3: '',
    CAMPO_32_4: '',
    CAMPO_33: '',
    CAMPO_34: '',
    CAMPO_35: '',
    CAMPO_36: '',
    CAMPO_37: '',
    CAMPO_38: '',
    CAMPO_39: '',
    CAMPO_40: '',
    CAMPO_40_1: '',
    CAMPO_40_2: '',
    CAMPO_41: '',
    CAMPO_42: '',
    CAMPO_43: '',
    CAMPO_44: '',
    CAMPO_45: '',
    CAMPO_46: '',
    CAMPO_47_1: '',
    CAMPO_47_2: '',
    CAMPO_47_3: '',
    CAMPO_48: '',
    CAMPO_48_1: '',
    CAMPO_48_2: '',
    CAMPO_48_3: '',
    CAMPO_48_4: '',
    CAMPO_49: '',
    CAMPO_49_1: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_54: '',
    CAMPO_55: '',
    CAMPO_55_1: '',
    CAMPO_56: '',
    CAMPO_56_1: '',
    CAMPO_57: '',
    CAMPO_57_1: '',
    CAMPO_57_2: '',
    CAMPO_57_3: '',
    CAMPO_57_4: '',
    CAMPO_57_5: '',
    CAMPO_57_6: '',
    CAMPO_57_7: '',
    CAMPO_57_8: '',
    CAMPO_57_9: '',
    CAMPO_57_10: '',
    CAMPO_57_11: '',
    CAMPO_57_12: '',
    CAMPO_57_13: '',
    CAMPO_57_14: '',
    CAMPO_58: '',
    CAMPO_59: '',
    CAMPO_60: '',
    CAMPO_61: '',
    CAMPO_62: '',
    CAMPO_63: '',
    CAMPO_64: '',
    CAMPO_64_1: '',
    CAMPO_64_2: '',
    CAMPO_65: '',
    CAMPO_66: '',
  }
  constructor(private hemofiliaservice: HemofiliaService) { }

  ngOnInit(): void {
  }

  Seleccionarzip(event: any): void {
    this.file = event.target.files[0]
    this.nombrearchivo = event.target.files[0].name
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.descomprimirzip(this.file)
    }
    reader.readAsText(this.file)
  }
  descomprimirzip(prueba: any) {
    const jszip = new JSZip();
    jszip.loadAsync(prueba).then((zip) => {
      Object.keys(zip.files).forEach((filename) => {
        zip.files[filename].async('string').then((fileData) => {
          this.leertxt(fileData)
        })
      })
    });
  }

  leertxt(prueba: any) {
    this.cargahemofilia = prueba;
    for (const line of prueba.split(/[\r\n]+/)) {
      var nombre = line.split(',')[0];
      console.log(nombre);
    }
  }

  cargarhemofilia() {
    delete this.hemofilia.ID_HEMOFILIA
    for (const line of this.cargahemofilia.split(/[\r\n]+/)) {
      var nombre = line.split(',')[0];
      var apellido = line.split(',')[1];

      this.hemofilia.CAMPO_1 = line.split(',')[0];
      this.hemofilia.CAMPO_2 = line.split(',')[1]
      this.hemofilia.CAMPO_3 = line.split(',')[2]
      this.hemofilia.CAMPO_4 = line.split(',')[3]
      this.hemofilia.CAMPO_5 = line.split(',')[4]
      this.hemofilia.CAMPO_6 = line.split(',')[5]
      this.hemofilia.CAMPO_7 = line.split(',')[6]
      this.hemofilia.CAMPO_8 = line.split(',')[7]
      this.hemofilia.CAMPO_9 = line.split(',')[8]
      this.hemofilia.CAMPO_10 = line.split(',')[9]
      this.hemofilia.CAMPO_11 = line.split(',')[10]
      this.hemofilia.CAMPO_12 = line.split(',')[11]
      this.hemofilia.CAMPO_13 = line.split(',')[12]
      this.hemofilia.CAMPO_14 = line.split(',')[13]
      this.hemofilia.CAMPO_15 = line.split(',')[14]
      this.hemofilia.CAMPO_16 = line.split(',')[15]
      this.hemofilia.CAMPO_17 = line.split(',')[16]
      this.hemofilia.CAMPO_18 = line.split(',')[17]
      this.hemofilia.CAMPO_19 = line.split(',')[18]
      this.hemofilia.CAMPO_20 = line.split(',')[19]
      this.hemofilia.CAMPO_21 = line.split(',')[20]
      this.hemofilia.CAMPO_22 = line.split(',')[21]
      this.hemofilia.CAMPO_23 = line.split(',')[22]
      this.hemofilia.CAMPO_24 = line.split(',')[23]
      this.hemofilia.CAMPO_25 = line.split(',')[24]
      this.hemofilia.CAMPO_26 = line.split(',')[25]
      this.hemofilia.CAMPO_27 = line.split(',')[26]
      this.hemofilia.CAMPO_28 = line.split(',')[27]
      this.hemofilia.CAMPO_29 = line.split(',')[28]
      this.hemofilia.CAMPO_30 = line.split(',')[29]
      this.hemofilia.CAMPO_31 = line.split(',')[30]
      this.hemofilia.CAMPO_32 = line.split(',')[31]
      this.hemofilia.CAMPO_32_1 = line.split(',')[32]
      this.hemofilia.CAMPO_32_2 = line.split(',')[33]
      this.hemofilia.CAMPO_32_3 = line.split(',')[34]
      this.hemofilia.CAMPO_32_4 = line.split(',')[35]
      this.hemofilia.CAMPO_33 = line.split(',')[36]
      this.hemofilia.CAMPO_34 = line.split(',')[37]
      this.hemofilia.CAMPO_35 = line.split(',')[38]
      this.hemofilia.CAMPO_36 = line.split(',')[39]
      this.hemofilia.CAMPO_37 = line.split(',')[40]
      this.hemofilia.CAMPO_38 = line.split(',')[41]
      this.hemofilia.CAMPO_39 = line.split(',')[42]
      this.hemofilia.CAMPO_40 = line.split(',')[43]
      this.hemofilia.CAMPO_40_1 = line.split(',')[44]
      this.hemofilia.CAMPO_40_2 = line.split(',')[45]
      this.hemofilia.CAMPO_41 = line.split(',')[46]
      this.hemofilia.CAMPO_42 = line.split(',')[47]
      this.hemofilia.CAMPO_43 = line.split(',')[48]
      this.hemofilia.CAMPO_44 = line.split(',')[49]
      this.hemofilia.CAMPO_45 = line.split(',')[50]
      this.hemofilia.CAMPO_46 = line.split(',')[51]
      this.hemofilia.CAMPO_47_1 = line.split(',')[52]
      this.hemofilia.CAMPO_47_2 = line.split(',')[53]
      this.hemofilia.CAMPO_47_3 = line.split(',')[54]
      this.hemofilia.CAMPO_48 = line.split(',')[55]
      this.hemofilia.CAMPO_48_1 = line.split(',')[56]
      this.hemofilia.CAMPO_48_2 = line.split(',')[57]
      this.hemofilia.CAMPO_48_3 = line.split(',')[58]
      this.hemofilia.CAMPO_48_4 = line.split(',')[59]
      this.hemofilia.CAMPO_49 = line.split(',')[60]
      this.hemofilia.CAMPO_49_1 = line.split(',')[61]
      this.hemofilia.CAMPO_50 = line.split(',')[62]
      this.hemofilia.CAMPO_51 = line.split(',')[63]
      this.hemofilia.CAMPO_52 = line.split(',')[64]
      this.hemofilia.CAMPO_53 = line.split(',')[65]
      this.hemofilia.CAMPO_54 = line.split(',')[66]
      this.hemofilia.CAMPO_55 = line.split(',')[67]
      this.hemofilia.CAMPO_55_1 = line.split(',')[68]
      this.hemofilia.CAMPO_56 = line.split(',')[69]
      this.hemofilia.CAMPO_56_1 = line.split(',')[70]
      this.hemofilia.CAMPO_57 = line.split(',')[71]
      this.hemofilia.CAMPO_57_1 = line.split(',')[72]
      this.hemofilia.CAMPO_57_2 = line.split(',')[73]
      this.hemofilia.CAMPO_57_3 = line.split(',')[74]
      this.hemofilia.CAMPO_57_4 = line.split(',')[75]
      this.hemofilia.CAMPO_57_5 = line.split(',')[76]
      this.hemofilia.CAMPO_57_6 = line.split(',')[77]
      this.hemofilia.CAMPO_57_7 = line.split(',')[78]
      this.hemofilia.CAMPO_57_8 = line.split(',')[79]
      this.hemofilia.CAMPO_57_9 = line.split(',')[80]
      this.hemofilia.CAMPO_57_10 = line.split(',')[81]
      this.hemofilia.CAMPO_57_11 = line.split(',')[82]
      this.hemofilia.CAMPO_57_12 = line.split(',')[83]
      this.hemofilia.CAMPO_57_13 = line.split(',')[84]
      this.hemofilia.CAMPO_57_14 = line.split(',')[85]
      this.hemofilia.CAMPO_58 = line.split(',')[86]
      this.hemofilia.CAMPO_59 = line.split(',')[87]
      this.hemofilia.CAMPO_60 = line.split(',')[88]
      this.hemofilia.CAMPO_61 = line.split(',')[89]
      this.hemofilia.CAMPO_62 = line.split(',')[90]
      this.hemofilia.CAMPO_63 = line.split(',')[91]
      this.hemofilia.CAMPO_64 = line.split(',')[92]
      this.hemofilia.CAMPO_64_1 = line.split(',')[93]
      this.hemofilia.CAMPO_64_2 = line.split(',')[94]
      this.hemofilia.CAMPO_65 = line.split(',')[95]
      this.hemofilia.CAMPO_66 = line.split(',')[96]

      console.log(this.cargahemofilia.length)
      this.hemofiliaservice.cargamasivahemofilia(this.hemofilia).subscribe(res => {
        console.log(res)
      })
    }
  }

}
