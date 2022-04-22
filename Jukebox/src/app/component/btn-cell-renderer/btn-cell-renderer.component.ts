// app/button-cell-renderer.component.ts

import { Component, OnDestroy } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: 'btn-cell-renderer',
  template: `
    <i class="fas fa-trash text-danger" (click)="btnClickedHandler($event)"></i>
  `,
})
export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
  refresh(params: ICellRendererParams): boolean {
    throw new Error("Method not implemented.");
  }
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(args: any) {
    this.params.clicked(this.params.value);
  }

  ngOnDestroy() {
    // no need to remove the button click handler 
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}