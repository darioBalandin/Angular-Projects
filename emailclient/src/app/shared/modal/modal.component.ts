import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {



  @Output()
  dismissEvent = new EventEmitter();


  constructor(
    private readonly element: ElementRef

  ) { }
  ngOnInit(): void {

    document.body.appendChild(this.element.nativeElement)
  }

  ngOnDestroy(): void {

    this.element.nativeElement.remove();

  }

  onDismissClick() {
    this.dismissEvent.emit();
  }


}
