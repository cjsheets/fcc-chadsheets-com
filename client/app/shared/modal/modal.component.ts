import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from './modal.service';
import { Logger } from '../logger.service';

@Component({
  selector: 'modal-window',
  templateUrl: './modal.view.html',
  styleUrls: ['./modal.view.css'],
  host: { '(document:keyup)': 'keyup($event)' }
})
export class ModalComponent implements OnInit {
  @Input('modal-id') modalId: string;
  @Input('modal-title') modalTitle: string;
  @Input('blocking') blocking: boolean;
  isOpen: boolean = false;
	private logger: Logger;

  constructor(
    private modalService: ModalService,
    logger: Logger
  ) { this.logger = logger }

  ngOnInit() {
    this.modalService.registerModal(this);
    this.logger['log']('Registered Modal ID: ' + this.modalId);
  }

  private close(checkBlocking = false): void {
    this.modalService.close(this.modalId, checkBlocking);
    this.logger['log']('Close Modal ID: ' + this.modalId);
  }

  private keyup(event: KeyboardEvent): void {
    this.logger['log']('Modal detected key event: ' + event.keyCode);
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }
}