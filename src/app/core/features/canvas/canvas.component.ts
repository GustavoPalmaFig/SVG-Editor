import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { ElementService } from '../../shared/services/element.service';
import { SvgElement } from '../../shared/interfaces/svg-element.interface';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
  protected elementService = inject(ElementService);

  protected svgElements = this.elementService.elements;
  private draggedElement: SvgElement | null = null;
  private lastMouseX = 0;
  private lastMouseY = 0;

  @ViewChild('svgCanvas', { static: true }) svgCanvas!: ElementRef<SVGElement>;

  getBorderRadiusValue(element: SvgElement): number {
    return typeof (element as any).borderRadius === 'number'
      ? (element as any).borderRadius
      : 0;
  }

  getStarPoints(star: SvgElement): string {
    if (!(star instanceof StarEntity)) {
      return '';
    }

    return star.pointsValue;
  }

  onCanvasMouseDown(event: MouseEvent) {
    // Se clicar no canvas (não em um elemento), desseleciona tudo
    if (event.target === this.svgCanvas.nativeElement) {
      this.elementService.selectElement(null);
    }
  }

  onElementMouseDown(event: MouseEvent, element: SvgElement) {
    event.stopPropagation();

    this.elementService.selectElement(element);
    this.draggedElement = element;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  onCanvasMouseMove(event: MouseEvent) {
    if (event.buttons === 1 && this.draggedElement) {
      const deltaX = event.clientX - this.lastMouseX;
      const deltaY = event.clientY - this.lastMouseY;

      this.elementService.moveElement(deltaX, deltaY);

      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
    }
  }

  onCanvasMouseUp() {
    this.draggedElement = null;
  }

  onCanvasMouseLeave() {
    this.onCanvasMouseUp();
  }
}
