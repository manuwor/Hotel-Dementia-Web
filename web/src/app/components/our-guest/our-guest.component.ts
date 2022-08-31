import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-our-guest',
  templateUrl: './our-guest.component.html',
  styleUrls: ['./our-guest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurGuestComponent implements OnInit {

  constructor(protected $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }


  clickEden(){
    this.$gaService.event('click', 'Button', 'Eden');
    window.open("https://magiceden.io/creators/hoteldementia", "_blank");
  }

  clickSolanart(){
    this.$gaService.event('click', 'Button', 'Solanart');
    window.open("https://solanart.io/collections/hoteldementia", "_blank");
  }
}
