import { Component } from '@angular/core';
import { NavigatorInterface, FooterInterface } from './core/models/Core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Destinos - Json Server';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "countries",
      link: "/countries"
    },
    {
      name: "scenery",
      link: "/scenery"
    },
    {
      name: "about",
      link: "/about"

    }
  ];
  public footer: FooterInterface = {
    creator: "Ricardo Cortina",
    from: "Upgrade Hub"
  }
}
