import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.sass']
})
export class TablaComponent implements OnInit {

  constructor(public json: ServiceService ) {
    this.json.getLibros('http://localhost:3000/data/db.js').subscribe((res: any) =>{
      console.log(res);
    });
   }

  ngOnInit() {
   
  }

}
