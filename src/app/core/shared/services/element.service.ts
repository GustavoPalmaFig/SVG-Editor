import { computed, effect, Injectable, signal } from '@angular/core';
import { SvgElement } from '../interfaces/svg-element.interface';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { RectangleEntity } from '../../shapes/rectangle/entity/rectangle.entity';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private _elements = signal<Array<SvgElement>>([]);
  private _selectedElementId = signal<string | null>(null);

  public readonly elements = this._elements.asReadonly();
  public readonly selectedElement = computed(
    () =>
      this._elements().find((el) => el.id === this._selectedElementId()) ?? null
  );

  addElement(type: 'rectangle' | 'star'): void {
    let newElement: RectangleEntity | StarEntity;

    if (type === 'rectangle') {
      newElement = new RectangleEntity();
    } else if (type === 'star') {
      newElement = new StarEntity();
    }

    this._elements.update((els) => [...els, newElement]);
  }

  selectElement(element: SvgElement | null): void {
    this._selectedElementId.set(element?.id ?? null);

    this._elements.update((elements) =>
      elements.map((el) => {
        el.isSelected = el.id === element?.id;
        return el;
      })
    );
  }

  deleteElement(): void {
    const selectedId = this._selectedElementId();
    if (!selectedId) return;

    this._elements.update((els) => els.filter((el) => el.id !== selectedId));
    this._selectedElementId.set(null);
  }

  moveElement(deltaX: number, deltaY: number): void {
    const selectedId = this._selectedElementId();
    if (!selectedId) return;

    this._elements.update((els) =>
      els.map((el) => {
        if (el.id === selectedId) {
          el.x = el.x + deltaX;
          el.y = el.y + deltaY;
        }
        return el;
      })
    );
  }
}
