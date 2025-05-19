import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { isRectangle, isStar } from '../../utils/type-guards';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-properties-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.scss'],
})
export class PropertiesPanelComponent {
  protected elementService = inject(ElementService);
  protected selectedElement = this.elementService.selectedElement;
  protected isRectangle = isRectangle;
  protected isStar = isStar;
}
