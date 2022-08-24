import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(protected $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
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

  clickEden(){
    this.$gaService.event('click', 'Button', 'Eden');
    window.open("https://magiceden.io/creators/hoteldementia", "_blank");
  }

  clickSolanart(){
    this.$gaService.event('click', 'Button', 'Solanart');
    window.open("https://solanart.io/collections/hoteldementia", "_blank");
  }

  public clickIg(){
    this.$gaService.event('click', 'Button', 'IG');
    window.open("https://www.instagram.com/hoteldementia/", "_blank");
  }
}
