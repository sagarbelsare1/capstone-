import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCartComponent } from './choose-cart.component';

describe('ChooseCartComponent', () => {
  let component: ChooseCartComponent;
  let fixture: ComponentFixture<ChooseCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
