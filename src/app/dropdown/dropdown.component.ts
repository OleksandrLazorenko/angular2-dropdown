import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DropdownOption } from './dropdown-option.interface';
import { DropdownSettings } from './dropdown-settings.interface';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {
  @Input() settings: DropdownSettings;
  @Input() options: DropdownOption[];
  @Output() select: EventEmitter<DropdownOption> = new EventEmitter();

  selected: DropdownOption = <DropdownOption> {};
  isOpen: boolean = false;

  ngOnChanges(changes) {
    this.clearSelection();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: DropdownOption) {
    this.isOpen = false;
    this.selected = option;
    this.select.emit(option);
  }

  clearSelection() {
    this.selectOption(<DropdownOption> {});
  }

  close() {
    this.isOpen = false;
  }
}
