import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  @Output() navClick = new EventEmitter<void>();
  onNavClick() {
    this.navClick.emit();
  }
}
