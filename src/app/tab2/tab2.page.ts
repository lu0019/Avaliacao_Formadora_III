import { Component } from '@angular/core';
import { ServicesService } from '../CEP/cep.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ServicesService]
})
export class Tab2Page {

  constructor() {}

}
