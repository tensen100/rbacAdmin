import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysUserEditModalComponent } from './sys-user-edit-modal.component';

describe('SysUserEditModalComponent', () => {
  let component: SysUserEditModalComponent;
  let fixture: ComponentFixture<SysUserEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysUserEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUserEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
