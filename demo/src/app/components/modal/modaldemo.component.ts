import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from "../../../../../src/modal/modal.service";
import { routerTransition } from "../../router.animations";
import { ModalOptions } from "../../../../../src/modal/modal-options";
import { CadPessoa } from "./cadastro2/cadPessoa.component";

@Component( {
  selector: 'app-modal',
  templateUrl: './modaldemo.component.html',
  animations: [ routerTransition() ],
  styleUrls: [ './modaldemo.component.scss' ]
} )
export class ModalDemo {

  public index: number;
  public modals;
  public modalOptions: ModalOptions;

  constructor(private view: ViewContainerRef, private modalService: ModalService) {
    this.modalService.setView(this.view);

    this.modalOptions = {
      title: 'New Form',
      icon: 'ion-close-circled',
      draggable: true,
      width: '500px',
      height: 'auto',
      maximizable: true,
      minimizable: true
    };
  }

  modal1() {
    this.modalService.createModal(CadPessoa, this.modalOptions, (modalResult) => {
      console.log('Return',modalResult);
    });
    this.modals = this.modalService.getMinModals();
  }

  show(item, index) {
    this.modalService.removeMinModals(index);
    item.instance.element.nativeElement.style.display = 'block';
  }

}
