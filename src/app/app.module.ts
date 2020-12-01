import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeItemComponent } from './tree/tree-item/tree-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, MatIconModule, MatButtonModule, MatCheckboxModule ],
  declarations: [ AppComponent, TreeComponent, TreeItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
