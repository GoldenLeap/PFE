import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  navItems = [
    {label: "Link1", path:"#"},
    {label: "Link2", path:"#"},
    {label: "Link3", path:"#"},
  ]

}
