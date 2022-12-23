import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-visual-novel',
  templateUrl: './visual-novel.component.html',
  styleUrls: ['./visual-novel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisualNovelComponent implements OnInit {


  isShowMobile = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onClickSeason(){

    this.isShowMobile = true;

    console.log(this.isShowMobile);

  }

}
