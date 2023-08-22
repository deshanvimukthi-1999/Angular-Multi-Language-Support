import { Component } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})


export class DataEntryComponent {
  items: string[] = [];
  newItem: string = '';
  editIndex: number | null = null;
  

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  editItem(index: number) {
    this.editIndex = index;
    this.newItem = this.items[index];
  }

  saveEditedItem() {
    if (this.editIndex !== null) {
      this.items[this.editIndex] = this.newItem;
      this.newItem = '';
      this.editIndex = null;
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
