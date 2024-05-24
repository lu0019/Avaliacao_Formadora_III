import { Component } from '@angular/core';
import { CEPService } from '../services/cep.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [CEPService]
})
export class Tab2Page {

  constructor() {}

}
