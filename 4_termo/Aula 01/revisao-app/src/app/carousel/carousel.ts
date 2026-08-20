import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carousel',
  styleUrl: './carousel.css',
  templateUrl: './carousel.html',
})
export class Carousel implements AfterContentInit{
  elementId = 0;
  listLength = 0;

  @ContentChildren('carouselCard', {read: ElementRef, descendants: true})
  elementosInjetados!: QueryList<ElementRef>;

  ngAfterContentInit(): void {

    this.listLength = this.elementosInjetados.length;
    this.updateVisibility();
    this.elementosInjetados.changes.subscribe((list) =>{
      this.listLength = list.length;
      this.updateVisibility();
    })
  }

  proximo(){
    this.elementId++;
    this.updateVisibility();
  }

  anterior(){
    this.elementId--;
    this.updateVisibility();
  }

  private updateVisibility(){
    this.elementosInjetados.forEach((item, index)=>{
      if(index != this.elementId){
        item.nativeElement.style.display = 'none';
      }else{
        item.nativeElement.style.display = 'block';
      }
    })
  }
}
