import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { isRectangle, isStar } from '../../utils/type-guards';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-properties-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
    InputNumberModule,
    InputTextModule,
    ColorPickerModule,
  ],
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.scss'],
})
export class PropertiesPanelComponent {
  protected elementService = inject(ElementService);
  protected selectedElement = this.elementService.selectedElement;
  protected isRectangle = isRectangle;
  protected isStar = isStar;
}
