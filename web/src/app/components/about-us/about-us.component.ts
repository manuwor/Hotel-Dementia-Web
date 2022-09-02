import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {

  constructor(protected $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }
  clickLitePaper(){
    this.$gaService.event('click', 'Button', 'Litepaper');
    window.open("https://7d400753.flowpaper.com/litepaperV20Final/", "_blank");
  }
}
