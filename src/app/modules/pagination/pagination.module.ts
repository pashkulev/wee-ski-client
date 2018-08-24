import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsPerPageSelectorComponent } from './components/results-per-page-selector/results-per-page-selector.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ResultsPerPageSelectorComponent
  ],
  exports: [
    ResultsPerPageSelectorComponent
  ]
})
export class PaginationModule { }
