import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.css']
})
export class CustomTooltipComponent implements OnInit {

  @Input() tooltip: string;

  constructor() { }

  ngOnInit() {
  }

}
