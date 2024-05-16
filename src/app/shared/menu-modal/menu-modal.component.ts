import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent {
  showModal: boolean = false;

  onToggleModal() {
    this.showModal = !this.showModal;
  }
}
