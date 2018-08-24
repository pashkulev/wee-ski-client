import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-results-per-page-selector',
  templateUrl: './results-per-page-selector.component.html',
  styleUrls: ['./results-per-page-selector.component.css']
})
export class ResultsPerPageSelectorComponent implements OnInit {

  @Input() size;
  @Output() selectedSize = new EventEmitter<number>();
  selectForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.selectForm = new FormGroup({
      size: new FormControl(this.size)
    });
  }

  onChange() {
    this.selectedSize.emit(this.selectForm.value.size);
  }
}
