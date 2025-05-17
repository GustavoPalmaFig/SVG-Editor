import { Injectable, signal } from '@angular/core';
import { SvgElement } from '../interfaces/svg-element.interface';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { RectangleEntity } from '../../shapes/rectangle/entity/rectangle.entity';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private _elements = signal<Array<RectangleEntity | StarEntity>>([]);
  private _selectedElement = signal<SvgElement | null>(null);

  public readonly elements = this._elements.asReadonly();
  public readonly selectedElement = this._selectedElement.asReadonly();

  addElement(type: 'rectangle' | 'star'): void {
    let newElement: RectangleEntity | StarEntity;

    if (type === 'rectangle') {
      newElement = new RectangleEntity();
    } else if (type === 'star') {
      newElement = new StarEntity();
    }

    this._elements.update((elements) => [...elements, newElement]);
  }

  selectElement(element: SvgElement | null): void {
    this._elements.update((elements) =>
      elements.map((el) => {
        el.isSelected = element?.id === el.id;
        return el;
      })
    );

    const selected =
      this._elements().find((el) => el.id === element?.id) || null;
    this._selectedElement.set(selected);
  }

  deleteElement() {
    this._elements.update((elements) => {
      const index = elements.findIndex(
        (el) => el.id === this.selectedElement()?.id
      );

      if (index !== -1) {
        elements.splice(index, 1);
        this._selectedElement.set(null);
      }
      return elements;
    });
  }

  moveElement(deltaX: number, deltaY: number) {
    this._elements.update((elements) => {
      const index = elements.findIndex(
        (el) => el.id === this.selectedElement()?.id
      );

      if (index !== -1) {
        elements[index].x += deltaX;
        elements[index].y += deltaY;
      }
      return elements;
    });
  }
}
