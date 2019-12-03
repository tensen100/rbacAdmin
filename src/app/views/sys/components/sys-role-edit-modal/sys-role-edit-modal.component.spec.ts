import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRoleEditModalComponent } from './sys-role-edit-modal.component';

describe('SysRoleEditModalComponent', () => {
  let component: SysRoleEditModalComponent;
  let fixture: ComponentFixture<SysRoleEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysRoleEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRoleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
