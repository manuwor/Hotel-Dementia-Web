import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-ep',
  templateUrl: './choose-ep.component.html',
  styleUrls: ['./choose-ep.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChooseEpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  clicktoEP(ep: String){
    this.router.navigate(["/novel-ep-"+ep])
  }

}
