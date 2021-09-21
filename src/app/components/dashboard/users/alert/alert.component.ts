import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() confirm;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.emit();
  }
  onDelete(){
    this.delete.emit()
  }

}
