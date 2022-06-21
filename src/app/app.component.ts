import { Component } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCards } from "swiper";

SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
}
