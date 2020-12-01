import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeItemComponent } from './tree/tree-item/tree-item.component;

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TreeComponent, TreeItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
