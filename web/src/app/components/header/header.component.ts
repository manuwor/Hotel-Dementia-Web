import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor(protected $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  onClickHome(){
    this.$gaService.event('click', 'Header', 'Home');
  }
  onClickOurGuest(){
    this.$gaService.event('click', 'Header', 'Our guests');
  }
  onClickAboutUs(){
    this.$gaService.event('click', 'Header', 'About Us');
  }
  onClickPartner(){
    this.$gaService.event('click', 'Header', 'Partner');
  }
  onClickVisual(){
    this.$gaService.event('click', 'Header', 'Visual');
  }

  onClickLogo(){
    this.$gaService.event('click', 'Header', 'Logo');
  }

}
