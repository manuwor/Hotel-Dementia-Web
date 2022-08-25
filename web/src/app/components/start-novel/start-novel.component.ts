import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-novel',
  templateUrl: './start-novel.component.html',
  styleUrls: ['./start-novel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartNovelComponent implements OnInit {

  isWelcome2 = false;
  isLanguage = false;
  isSelectLang = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showAnimation1();

  }

  async showAnimation1() {
    await new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.isWelcome2 = true;
      
      new Promise(f => {
        setTimeout(f, 3000);

      }).then(res => {
        this.isLanguage = true;
        console.log("Language Active")
      })
    })
  }

  clickLang(){
    this.isSelectLang = true
    this.router.navigate(["choose-ep"])
  }

  clickStart(){
    this.router.navigate(["choose-ep"])

  }

}
