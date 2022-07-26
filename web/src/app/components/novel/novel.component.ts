import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import NovelModel from 'src/app/model/novel-model';
import ep1JSON from "../../../assets/json/novel-ep1.json";
@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NovelComponent implements OnInit {


  subtitleIndex = 0;
  text = "";
  isShowNext = false;
  private lastindex = 0;
  fullText = "";
  isClick = false;
  private readIndex = 0;
  currentBG = "";
  isChippy = false;
  private isStop = false;
  constructor() { }

  ngOnInit(): void {

    this.fullText = ep1JSON[0].desc[this.subtitleIndex].subtitle
    this.currentBG = ep1JSON[0].prefix_url + ep1JSON[0].desc[this.subtitleIndex].bg_url + ".jpg";
    console.log(this.readIndex)
    console.log(this.fullText.length)

    this.startEvent();


  }


  startEvent() {

    if (this.readIndex < this.fullText.length) {
      setTimeout(() => {
        this.isChippy = ep1JSON[0].desc[this.subtitleIndex].is_chippy;
        this.text = this.text + this.fullText[this.readIndex]
        this.readIndex += 1
        console.log(this.text);
        this.startEvent();
      }, 20)
    }
    if (this.readIndex == this.fullText.length) {
      console.log("Done");
      this.lastindex += 1;
      this.isStop = true;
      this.readIndex = 0;
      this.isShowNext = true;

    }

  }

  nextClick() {
    if (this.isShowNext) {
      this.isShowNext = false;
      this.isStop = false;
      this.text = "";
      this.subtitleIndex += 1;
      this.fullText = ep1JSON[0].desc[this.subtitleIndex].subtitle
      this.currentBG = ep1JSON[0].prefix_url + ep1JSON[0].desc[this.subtitleIndex].bg_url + ".jpg";
      this.startEvent();
    }

  }

}
