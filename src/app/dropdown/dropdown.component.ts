import {Component, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { DropdownOption } from './dropdown-option.interface';
import { DropdownSettings } from './dropdown-settings.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {
  @Input() settings: DropdownSettings;
  @Input() options: DropdownOption[];
  @Output() select: EventEmitter<DropdownOption> = new EventEmitter();

  @ViewChild('list') listRef: ElementRef;

  selected: DropdownOption = <DropdownOption> {};
  isOpen = false;

  ngOnChanges(changes) {
    if (this.selected.id) {
      this.clearSelection();
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;

    if (this.isOpen && this.options.length > 0) {
      this.scrollList();
    }
  }

  selectOption(option: DropdownOption, close = true) {
    this.selected = option;
    this.select.emit(option);

    if (close) {
      this.close();
    }
  }

  clearSelection() {
    this.selectOption(<DropdownOption> {}, false);
  }

  close() {
    this.isOpen = false;
  }

  private scrollList() {
    const index = this.selected.id ? this.options.findIndex(option => option.id === this.selected.id) : 0;
    const listElement = this.listRef.nativeElement;
    const optionElement = listElement.children[index];

    listElement.scrollTop = optionElement.offsetTop - listElement.offsetHeight;
  }
}
