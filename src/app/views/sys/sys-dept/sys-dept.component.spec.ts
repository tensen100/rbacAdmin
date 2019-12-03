import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDeptComponent } from './sys-dept.component';

describe('SysDeptComponent', () => {
  let component: SysDeptComponent;
  let fixture: ComponentFixture<SysDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
