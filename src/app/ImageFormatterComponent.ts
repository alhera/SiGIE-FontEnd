import { Component } from "@angular/core";

@Component({
  selector: 'app-image-formatter-cell',
  template: `<img style="margin-left: 30%;margin-top: 5px;" border="0" width="60px" height="60px" src=\"{{ params.value }}\">` })

export class ImageFormatterComponent {
  params: any;
  agInit(params: any){
    this.params = params;
  }
}