import { Injectable } from '@angular/core';

import { ModalComponent } from './modal.component';
import { Logger } from '../logger.service';

@Injectable()
export class ModalService {
    private modals: Array<ModalComponent>;
	private logger: Logger;

    constructor(logger: Logger) {
        this.modals = [];
        this.logger = logger;
    }

    registerModal(newModal: ModalComponent): void {
      this.logger['log']('register');
        var modal = this.findModal(newModal.modalId);

        // Delete existing to replace the modal
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal));
        }

        this.modals.push(newModal);
    }

    open(modalId: string): void {
      this.logger['log']('open');
        var modal = this.findModal(modalId);

        if (modal) {
            modal.isOpen = true;
        }
    }

    close(modalId: string, checkBlocking = false): void {
        var modal = this.findModal(modalId);

        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }

            modal.isOpen = false;
        }
    }

    private findModal(modalId: string): ModalComponent {
        for (var modal of this.modals) {
            if (modal.modalId === modalId) {
                return modal;
            }
        }

        return null;
    }
}