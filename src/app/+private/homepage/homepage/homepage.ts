import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-homepage',
  imports: [RouterOutlet,RouterLinkWithHref],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}
