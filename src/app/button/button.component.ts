import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'primary';

  @Input() colorBadge: string = 'secondary';

  @Input() outline: boolean;

  @Input() size: 'small' | 'normal' | 'big' = 'normal';

  @Input() badge: string;

  @Input() badgeCorner: boolean;

  constructor() {}

  ngOnInit() {}

  getButtonClassSize() {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'normal':
        return '';
      case 'big':
        return 'btn-lg';
    }
  }

  getButtonClassColor() {
    if (this.outline) {
      return 'btn-outline-' + this.color;
    }
    return 'btn-' + this.color;
  }
}
