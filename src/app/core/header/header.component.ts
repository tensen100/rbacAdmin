import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkThem = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  openSidebar() {
    this.toggle.emit();
  }
  onChange(checked: boolean) {
    this.toggleDarkThem.emit(checked);
  }
  logout() {
    console.log('logout');
  }

}
