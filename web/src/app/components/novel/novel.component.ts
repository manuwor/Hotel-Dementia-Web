import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import NovelModel from 'src/app/model/novel-model';
import ep1JSON from "../../../assets/json/novel-ep1.json";
@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NovelComponent implements OnInit {

  isEnd = false;
  cardEnd1 = "./assets/img/novel/card-end.png";
  cardEnd2 = "./assets/img/novel/card-end.png";
  cardEndMobile1 = "./assets/img/novel/card-end.png";
  cardEndMobile2 = "./assets/img/novel/card-end.png";
  subtitleIndex = 0;
  text = "";
  isShowNext = false;
  private lastindex = 0;
  fullText = "";

  isClickCard = false;
  isClick = false;
  private readIndex = 0;
  isTextEndShow = false;
  isCardShow = false;
  currentBG = "";
  isCharactor = false;
  characterName = "";
  isChippy = false;
  isNoSubtitle = false;
  private isStop = false;
  constructor(protected $gaService: GoogleAnalyticsService, private router: Router) { }

  ngOnInit(): void {

    this.fullText = ep1JSON[0].desc[this.subtitleIndex].subtitle
    this.currentBG = ep1JSON[0].prefix_url + ep1JSON[0].desc[this.subtitleIndex].bg_url + ".jpg";
    console.log(this.readIndex)
    console.log(this.fullText.length)

    this.startEvent();


  }

  async onClickCardRemember(){
    this.$gaService.event('click', 'Card', 'จดจำ');
    this.isClickCard = true;
    await new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.router.navigate(['/choose-ep'])
    })
  }
  async onClickCardForget(){
    this.$gaService.event('click', 'Card', 'ลืม');
    this.isClickCard = true;
    await new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.router.navigate(['/choose-ep'])
    })
  }

  onMouseOver1(){
    this.cardEnd1 = "./assets/img/novel/card-end-1.png";
  }

  onMouseOut1(){
    this.cardEnd1 = "./assets/img/novel/card-end.png";
  }
  onMouseOver2(){
    this.cardEnd2 = "./assets/img/novel/card-end-2.png";
  }

  onMouseOut2(){
    this.cardEnd2 = "./assets/img/novel/card-end.png";
  }
  async showAnimation1() {
    await new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.isTextEndShow = true;
      
      new Promise(f => {
        setTimeout(f, 2500);
  
      }).then(res => {
        this.isCardShow = true;

        new Promise(f => {
          setTimeout(f, 4000);
    
        }).then(res => {
          this.cardEndMobile1 = "./assets/img/novel/card-end-1.png";
  
          this.cardEndMobile2 = "./assets/img/novel/card-end-2.png";
          
          
         
        })

        
       
      })
    })
  }

  startEvent() {

    if (this.readIndex < this.fullText.length) {
      setTimeout(() => {
        this.isChippy = ep1JSON[0].desc[this.subtitleIndex].is_chippy;
        this.text = this.text + this.fullText[this.readIndex]
        this.isCharactor = ep1JSON[0].desc[this.subtitleIndex].isCharactor;
        this.characterName = ep1JSON[0].desc[this.subtitleIndex].charactor;
        this.readIndex += 1
        this.startEvent();
      }, 20)
    }


    if (this.readIndex == this.fullText.length) {
      console.log("Done");
      this.lastindex += 1;
      this.isStop = true;
      this.readIndex = 0;
      this.isShowNext = true;

      // setTimeout(() => {
      //   this.nextClick();
      // }, 500)

    }

  }

  nextClick() {
    if (this.subtitleIndex == ep1JSON[0].desc.length - 1) {
      console.log("Finish");
      this.isEnd = true;
      this.text = ep1JSON[0].end.text 
      this.currentBG = ep1JSON[0].prefix_url + ep1JSON[0].end.bg_url + ".jpg";
      this.showAnimation1();
    } else {


      if (this.isShowNext) {
        this.isShowNext = false;
        this.isStop = false;
        this.text = "";
        this.subtitleIndex += 1;
        this.fullText = ep1JSON[0].desc[this.subtitleIndex].subtitle
        if (this.fullText.length === 0) {
          this.isNoSubtitle = true;
          setTimeout(() => {
            console.log("Done");
            this.lastindex += 1;
            this.isStop = true;
            this.readIndex = 0;
            this.isShowNext = true;
            this.nextClick();
          }, 1000)
        } else {
          this.isNoSubtitle = false;

        }
        this.currentBG = ep1JSON[0].prefix_url + ep1JSON[0].desc[this.subtitleIndex].bg_url + ".jpg";
        this.startEvent();
      }
    }

  }

}
