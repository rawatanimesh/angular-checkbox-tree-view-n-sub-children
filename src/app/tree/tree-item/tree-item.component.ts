import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit {

  @Input() treeList = [];
  @Output() itemSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.clear();
    console.info('tree', this.treeList);
  }

  selectedItem(item) {
    // if(item.selectable) return;
    this.itemSelected.emit(item);
    console.log('called here')
  }

  onCheckbox(event, item) {
    console.log('event', event);
    console.log('item', item)
    item.checked = event;
    item.event = 'checked';
    this.selectedItem(item);
    //if parent is selectable than select children as per parent
    console.log('item', item)
  }

}