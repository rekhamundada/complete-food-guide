import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  declarations: [DropdownDirective],
  exports: [DropdownDirective,
            CommonModule],
  providers: [],
})
export class SharedModule { }

