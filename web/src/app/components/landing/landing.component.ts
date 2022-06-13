import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  config: CountdownConfig = {
    leftTime: 1655560800,
    format: 'yyyy-MM-dd E HH:mm:ss a',
    formatDate: ({ date, formatStr }) => format(date, formatStr),
  };
  constructor(protected $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.$gaService.pageView('/', 'Landing')
  }

  clickLitePaper(){
    this.$gaService.event('click', 'Button', 'Litepaper');
    window.open("https://7d400753.flowpaper.com/litepaperV20/", "_blank");
  }


  clickTwitter(){
    this.$gaService.event('click', 'Button', 'Twitter');
    window.open("https://twitter.com/hoteldementia", "_blank");
  }

  clickDiscord(){
    this.$gaService.event('click', 'Button', 'Discord');
    window.open("https://discord.com/invite/hoteldementia", "_blank");
  }

  clickFacebook(){
    this.$gaService.event('click', 'Button', 'Facebook');
    window.open("https://www.facebook.com/hoteldementia", "_blank");
  }

  public clickIg(){
    this.$gaService.event('click', 'Button', 'IG');
    window.open("https://www.instagram.com/hoteldementia/", "_blank");
  }

  clickEden(){
    this.$gaService.event('click', 'Button', 'Eden');
    window.open("https://magiceden.io/creators/hoteldementia", "_blank");
  }

  clickSolanart(){
    this.$gaService.event('click', 'Button', 'Solanart');
    window.open("https://solanart.io/collections/hoteldementia", "_blank");
  }

  handleEvent($event){

  }

}
