import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysModuleEditModalComponent } from './sys-module-edit-modal.component';

describe('SysModuleEditModalComponent', () => {
  let component: SysModuleEditModalComponent;
  let fixture: ComponentFixture<SysModuleEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysModuleEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysModuleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
