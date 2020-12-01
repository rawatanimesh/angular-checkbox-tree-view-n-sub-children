import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  treeList = [
    {text: 'RAN', icon: 'calendar_view_day', expanded: true, children: [
      {text: 'Altiostar', icon: 'calendar_view_day', expanded: true, children: [
        {text: '4G', icon: '', expanded: true, children: [
          {text: 'On Air', icon: '', children: [
            {text: 'RM1-2', icon: 'calendar_view_day', children: []},
          ]},
          {text: 'Planned', icon: '', expanded: true, children: [
            {text: 'Indoor', icon: '', expanded: true, children: [
              {text: 'Femto', icon: '', selectable: true, checked: true, children: []},
              {text: 'Small Cell', icon: '', selectable: true, children: []},
            ]},
            {text: 'Outdoor', icon: '', expanded: true, children: [
              {text: 'Macro', icon: '', selectable: true, children: []},
            ]},
            {text: 'Small Cell', icon: '', expanded: true, selectable: true, children: [
              {text: 'vCU', icon: '', selectable: true, children: []},
              {text: 'vDU', icon: '', selectable: true, children: []},
              {text: 'RIU', icon: '', selectable: true, children: []},
              {text: 'RRH', icon: '', selectable: true, children: []},
            ]},
          ]},
        ]},
        {text: '5G', icon: '', children: [
          {text: 'RM1-2', icon: 'calendar_view_day', children: []},
          {text: 'RM1-2', icon: 'calendar_view_day', children: []},
        ]},
      ]},
      {text: 'Airspan', icon: 'calendar_view_day', children: [
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
      ]},
      {text: 'Sercomm', icon: 'calendar_view_day', children: [
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
      ]},
    ]},
    {text: 'Core', icon: 'calendar_view_day', expanded: true, children: [
      {text: 'Nokia', icon: 'calendar_view_day', children: [
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
      ]},
      {text: 'F5', icon: 'calendar_view_day', children: [
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
        {text: 'RM1-2', icon: 'calendar_view_day', children: []},
      ]},
    ]},
  
  ];
}
