import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-custom-footer',
  styleUrl: './custom-footer.css',
  templateUrl: './custom-footer.html',
  host:{
    class: "w-full mt-auto block"
  }
})
export class CustomFooter {
  @Input() year : number = new Date().getFullYear();

  @Input() owner: string = 'Blablabla';
  @Input() rightsText: string = 'Todos os direitos reservados';
  @Input() version: string = '1.0.0';

}
