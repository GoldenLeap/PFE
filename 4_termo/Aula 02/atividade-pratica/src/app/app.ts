import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { HeroBanner } from './hero-banner/hero-banner';
import { Sidebar } from './sidebar/sidebar';
import { Card } from './card/card';
import { CardProduct } from './card-product/card-product';
@Component({
  imports: [RouterOutlet,Card, CardProduct, Footer, Header, HeroBanner, Sidebar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('atividade-pratica');
}
