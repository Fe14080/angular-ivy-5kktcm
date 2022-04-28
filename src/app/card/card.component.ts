import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() titulo: string;
  @Input() descricao: string;
  @Input('url') imagemUrl: string;

  @Output() buttonClicked = new EventEmitter();

  constructor() {}
}
