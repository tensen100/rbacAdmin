import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryIndexComponent } from './lottery-index.component';

describe('LotteryIndexComponent', () => {
  let component: LotteryIndexComponent;
  let fixture: ComponentFixture<LotteryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
