import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit ,OnDestroy{

  @Output() close= new EventEmitter();


  constructor(private element: ElementRef) {
    console.log(this.element.nativeElement)

  }
  ngOnInit(): void {

    document.body.appendChild(this.element.nativeElement);
  }
  ngOnDestroy(): void {

    this.element.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit()

  }
}
