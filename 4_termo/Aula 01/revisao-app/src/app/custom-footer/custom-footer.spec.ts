import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomFooter } from './custom-footer';

describe('CustomFooter', () => {
  let component: CustomFooter;
  let fixture: ComponentFixture<CustomFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
