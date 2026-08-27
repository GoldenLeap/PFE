import { Component,Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  @Input() year : number = new Date().getFullYear();

  @Input() owner: string = 'Blablabla';
  @Input() rightsText: string = 'Todos os direitos reservados';
  @Input() version: string = '1.0.0';

}
