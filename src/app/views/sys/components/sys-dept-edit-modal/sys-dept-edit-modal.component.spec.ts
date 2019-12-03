import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDeptEditModalComponent } from './sys-dept-edit-modal.component';

describe('SysDeptEditModalComponent', () => {
  let component: SysDeptEditModalComponent;
  let fixture: ComponentFixture<SysDeptEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysDeptEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDeptEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
