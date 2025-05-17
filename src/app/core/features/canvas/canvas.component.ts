import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { ElementService } from '../../shared/services/element.service';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
  protected elementsService = inject(ElementService);

  protected svgElements = this.elementsService.elements;

  generateStarPoints(star: StarEntity): string {
    return star.generatePoints();
  }
}
