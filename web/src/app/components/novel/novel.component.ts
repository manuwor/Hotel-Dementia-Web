import { Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import NovelModel from 'src/app/model/novel-model';
import ep1JSON from "../../../assets/json/novel-ep1.json";
import ep2JSON from "../../../assets/json/novel-ep2.json";
import ep3JSON from "../../../assets/json/novel-ep3.json";
import ep4JSON from "../../../assets/json/novel-ep4.json";
import ep5JSON from "../../../assets/json/novel-ep5.json";
import ep6JSON from "../../../assets/json/novel-ep6.json";
import ep7JSON from "../../../assets/json/novel-ep7.json";
import ep8JSON from "../../../assets/json/novel-ep8.json";
@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NovelComponent implements OnInit, OnDestroy, OnChanges {
  SPEED_COUNT_TEXT = 20;
  isShowTitle = false;
  isTitle = false;
  isTitle2 = false;
  isFadeTitle = false;
  isEnd = false;
  isEndCredit = false;
  cardEnd1 = "./assets/img/novel/card-end.png";
  cardEnd2 = "./assets/img/novel/card-end.png";
  cardEndMobile1 = "./assets/img/novel/card-end.png";
  cardEndMobile2 = "./assets/img/novel/card-end.png";
  subtitleIndex = 0;
  text = "";
  isShowNext = false;
  isShowPrev = false;
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
  EPTITLE = "1";
  EPCurrent;
  audio;
  private isStop = false;
  constructor(protected $gaService: GoogleAnalyticsService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url.includes("ep-1")) {
      this.EPCurrent = ep1JSON;
      this.EPTITLE = "1";

    } else if (this.router.url.includes("ep-2")) {
      this.EPCurrent = ep2JSON;
      this.EPTITLE = "2";

    } else if (this.router.url.includes("ep-3")) {
      this.EPCurrent = ep3JSON;
      this.EPTITLE = "3";

    } else if (this.router.url.includes("ep-4")) {
      this.EPCurrent = ep4JSON;
      this.EPTITLE = "4";

    } else if (this.router.url.includes("ep-5")) {
      this.EPCurrent = ep5JSON;
      this.EPTITLE = "5";

    }else if (this.router.url.includes("ep-6")) {
      this.EPCurrent = ep6JSON;
      this.EPTITLE = "6";

    }else if (this.router.url.includes("ep-7")) {
      this.EPCurrent = ep7JSON;
      this.EPTITLE = "7";

    }else if (this.router.url.includes("ep-8")) {
      this.EPCurrent = ep8JSON;
      this.EPTITLE = "8";

    }
    this.fullText = this.EPCurrent[0].desc[this.subtitleIndex].subtitle
    this.currentBG = this.EPCurrent[0].prefix_url + ep5JSON[0].desc[this.subtitleIndex].bg_url + ".jpg";
    this.showAnimationTitle();
    this.startEvent();
    this.audio = new Audio()


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  @HostListener('window:webkitvisibilitychange', ['$event'])
  webkitvisibilitychangeHandler(event) {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  @HostListener('window:visibilitychange', ['$event'])
  visibilitychangeHandler(event) {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }


  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }

  }
  playAudio() {

    this.audio.src = "../../../assets/sound/sound-1.wav";
    this.audio.loop = true;
    this.audio.load();
    this.audio.play();
  }
  async onClickCardRemember() {
    this.$gaService.event('click', 'Card', 'จดจำ - ' + this.EPTITLE);
    this.isClickCard = true;
    await new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.isEndCredit = true;
      setTimeout(() => {
        this.isEndCredit = false;
        this.router.navigate(['/choose-ep'])
      }, 3000)
    })
  }
  async onClickCardForget() {
    this.$gaService.event('click', 'Card', 'ลืม - ' + this.EPTITLE);
    this.isClickCard = true;
    await new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.isEndCredit = true;
      setTimeout(() => {
        this.isEndCredit = false;
        this.router.navigate(['/choose-ep'])
      }, 3000)
    })
  }

  onMouseOver1() {
    if(this.EPTITLE == "7"){
      this.cardEnd1 = "./assets/img/novel/card-end-ep7-1.png";
    }else if(this.EPTITLE == "8"){
      this.cardEnd1 = "./assets/img/novel/card-end-ep8-1.png";
    }
    else{
      this.cardEnd1 = "./assets/img/novel/card-end-1.png";
    }
    
  }

  onMouseOut1() {
    this.cardEnd1 = "./assets/img/novel/card-end.png";
  }
  onMouseOver2() {
    if(this.EPTITLE == "7"){
      this.cardEnd2 = "./assets/img/novel/card-end-ep7-2.png";
    }else if(this.EPTITLE == "8"){
      this.cardEnd2 = "./assets/img/novel/card-end-ep8-2.png";
    }
    else{
      this.cardEnd2 = "./assets/img/novel/card-end-2.png";
    }
  }

  onMouseOut2() {
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

          if(this.EPTITLE == "7"){
            this.cardEndMobile1 = "./assets/img/novel/card-end-ep7-1.png";

            this.cardEndMobile2 = "./assets/img/novel/card-end-ep7-2.png";
          }if(this.EPTITLE == "8"){
            this.cardEndMobile1 = "./assets/img/novel/card-end-ep8-1.png";

            this.cardEndMobile2 = "./assets/img/novel/card-end-ep8-2.png";
          }
          else{
            this.cardEndMobile1 = "./assets/img/novel/card-end-1.png";

            this.cardEndMobile2 = "./assets/img/novel/card-end-2.png";
          }
          
        
        



        })



      })
    })
  }

  startEvent() {
    if (this.fullText.length === 0 && this.lastindex == 0) {
      
      setTimeout(() => {
        console.log("Done");
        this.lastindex += 1;
        this.isStop = true;
        this.readIndex = 0;
        this.isShowNext = true;
        this.nextClick();
      }, 3000)
    }
    if (this.subtitleIndex === 0) {
      this.isShowPrev = false;

    }
    if (this.readIndex < this.fullText.length) {
      setTimeout(() => {
        this.isChippy = this.EPCurrent[0].desc[this.subtitleIndex].is_chippy;
        this.text = this.text + this.fullText[this.readIndex]
        this.isCharactor = this.EPCurrent[0].desc[this.subtitleIndex].isCharactor;
        this.characterName = this.EPCurrent[0].desc[this.subtitleIndex].charactor;
        this.readIndex += 1
        this.startEvent();
      }, this.SPEED_COUNT_TEXT)
    }


    if (this.readIndex == this.fullText.length) {
      console.log("Done");
      console.log("subtitleIndex : " + this.subtitleIndex)
      this.lastindex += 1;
      this.isStop = true;
      this.readIndex = 0;
      this.isShowNext = true;
      if (this.subtitleIndex > 0 && this.subtitleIndex != this.EPCurrent[0].desc.length - 1) {
        this.isShowPrev = true;
      } else {
        this.isShowPrev = false;
      }


      // setTimeout(() => {
      //   this.nextClick();
      // }, 500)

    }

  }
  async showAnimationTitle() {
    await new Promise(f => {
      setTimeout(f, 2000);

    }).then(res => {
      this.isTitle = true;

      new Promise(f => {
        setTimeout(f, 2000);

      }).then(res => {
        this.isTitle2 = true
      })
    })
  }

  clickCont() {
    this.isFadeTitle = true;
    new Promise(f => {
      setTimeout(f, 1500);

    }).then(res => {
      this.isShowTitle = true;
      this.playAudio();
      // this.startEvent();

    })

  }
  prevClick() {
    if (this.isShowPrev) {
      this.isShowNext = false;
      this.isShowPrev = false;
      this.isStop = false;
      this.text = "";
      this.subtitleIndex -= 1;
      this.fullText = this.EPCurrent[0].desc[this.subtitleIndex].subtitle
      console.log("prevClick subtitleIndex : " + this.subtitleIndex)
      this.isNoSubtitle = false;
      this.currentBG = this.EPCurrent[0].prefix_url + this.EPCurrent[0].desc[this.subtitleIndex].bg_url + ".jpg";
      this.startEvent();
    }
  }
  nextClick() {
    if (this.subtitleIndex == this.EPCurrent[0].desc.length - 1) {
      console.log("Finish");
      this.isEnd = true;
      this.text = this.EPCurrent[0].end.text
      this.currentBG = this.EPCurrent[0].prefix_url + this.EPCurrent[0].end.bg_url + ".jpg";
      this.showAnimation1();

    } else {


      if (this.isShowNext) {
        this.isShowNext = false;
        this.isShowPrev = false;
        this.isStop = false;
        this.text = "";
        this.subtitleIndex += 1;
        this.fullText = this.EPCurrent[0].desc[this.subtitleIndex].subtitle
        if (this.fullText.length === 0) {
          this.isNoSubtitle = true;
          let duration = 1000;

          if (this.EPCurrent[0].desc[this.subtitleIndex].duration && this.EPCurrent[0].desc[this.subtitleIndex].duration > 0) {
            duration = this.EPCurrent[0].desc[this.subtitleIndex].duration;
          }
          setTimeout(() => {
            console.log("Done");
            this.lastindex += 1;
            this.isStop = true;
            this.readIndex = 0;
            this.isShowNext = true;
            this.nextClick();
          }, duration)
        } else {
          this.isNoSubtitle = false;

        }
        this.currentBG = this.EPCurrent[0].prefix_url + this.EPCurrent[0].desc[this.subtitleIndex].bg_url + ".jpg";
        this.startEvent();
      }
    }


  }


}
