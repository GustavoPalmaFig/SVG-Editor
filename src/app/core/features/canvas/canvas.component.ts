import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { RectangleEntity } from '../../shapes/rectangle/entity/rectangle.entity';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
  svgElements: Array<RectangleEntity | StarEntity> = [];

  constructor() {
    this.svgElements = [new RectangleEntity(), new StarEntity()];
  }

  generateStarPoints(star: StarEntity): string {
    return star.generatePoints();
  }
}
