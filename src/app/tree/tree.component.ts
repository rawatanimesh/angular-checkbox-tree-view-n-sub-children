import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() treeList = [];
  a = [{id: 1, parentId: [], name: 'a', children: [
    {id: 2, parentId: [1], name: 'a-a', children: [
      {id: 3, parentId: [1, 2]}
    ]
  }
  ]}]
  localId = 0;
  constructor() { }

  ngOnInit(): void {
    this.setLocalId(this.treeList);
    console.log('id for items', this.treeList)
  }

  setLocalId(list, parentId = []) {
    if (!list || list.length === 0) return;
    list.forEach(x => {
      x.localId = ++ this.localId;
      x.localParentId = parentId;
      if (x.children && x.children.length) {
        this.setLocalId(x.children, [x.localId, x.localParentId].reduce((acc, val) => acc.concat(val), []));
      }
    })
  }

  selectedItem(item) {

   
    this.unselectItem(this.treeList);
    console.log('tree unselect', item)
    if (item.event === 'checked') {
      delete item.event;
      this.checkCheckbox(item);
      this.checkParentItem(this.treeList);
    } else {
      console.log('here in expand')
      item.expanded = !item.expanded;
    }
    item.selected = true;
  }

  checkParentItem(list) {
    if (!list || !list.length) return;
    list.forEach(x => {
      if (x.selectable && x.children && x.children.length) {
        x.checked = x.children.every(child => child.checked);
      }
      if (x.children && x.children.length) {
        this.checkParentItem(x.children);
      }
    });
  }

  checkCheckbox(item) {
    if (item.selectable && item.children && item.children.length){
      // if (item.checked) {
      //   item.expanded = true;
      // }
      item.children.forEach(child =>{
        child.checked = item.checked;
      });
    }
  }

  unselectItem(list) {
    if (!list || !list.length) return;
    list.forEach(x => {
      x.selected = false;
      if (x.children && x.children.length) {
        this.unselectItem(x.children);
      }
    })
  }


}