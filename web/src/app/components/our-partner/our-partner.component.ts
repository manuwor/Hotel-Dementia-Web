import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html',
  styleUrls: ['./our-partner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurPartnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickL1(){
    window.open('https://www.facebook.com/labyrinthcafebkk', '_blank');
  }
  clickL2(){
    window.open('https://www.velabkk.com/', '_blank');
  }
  clickL3(){
    window.open('https://www.facebook.com/FindTheLockerRoom', '_blank');
  }
  clickL4(){
    window.open('https://www.facebook.com/dusktilldawnbarekamai', '_blank');
  }
  clickL5(){
    window.open('https://www.facebook.com/dumbo.bangkok', '_blank');
  }
  clickL6(){
    window.open('https://www.instagram.com/knockknock.bkk/', '_blank');
  }
  clickL7(){
    window.open('https://www.instagram.com/sinnerman.bar/', '_blank');
  }
  clickL8(){
    window.open('https://www.facebook.com/wallflowerscafe.th/', '_blank');
  }
  clickL9(){
    window.open('https://www.facebook.com/greatshotbarcnx', '_blank');
  }


  clickR1(){
    window.open('https://mediums.store/', '_blank');
  }

  clickR2(){
    window.open('https://www.facebook.com/SEALIFEBangkokOceanWorld/', '_blank');
  }

  clickC1(){
    window.open('https://www.asaihotels.com/', '_blank');
  }

  clickRE1(){
    window.open('https://www.instagram.com/aunglo.by.yangrak/', '_blank');
  }

  clickDE1(){
    window.open('https://www.mycloudfulfillment.com/', '_blank');
  }
}
