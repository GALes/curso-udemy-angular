import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesResultComponent } from './heroes-result.component';

describe('HeroesResultComponent', () => {
  let component: HeroesResultComponent;
  let fixture: ComponentFixture<HeroesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
