import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  protected elementService = inject(ElementService);
}
