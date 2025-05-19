import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { isRectangle, isStar } from '../utils/type-guards';
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

  private storageService = inject(StorageService);

  constructor() {
    this.loadElements();

    effect(() => {
      this.storageService.saveElements(this._elements());
    });
  }

  loadElements(): void {
    const storedElements = this.storageService.loadElements();
    const parsedElements = storedElements.map((obj) => {
      if (isRectangle(obj)) {
        return new RectangleEntity(obj);
      } else if (isStar(obj)) {
        return new StarEntity(obj);
      }
      return obj;
    });

    this._elements.set(parsedElements);
  }

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

  cleanCanva(): void {
    this._elements.set([]);
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

  resizeElement(handle: string, deltaX: number, deltaY: number): void {
    const selectedId = this._selectedElementId();
    const selectedElement = this.selectedElement();

    if (!selectedId || !selectedElement) return;

    this._elements.update((els) =>
      els.map((el) => {
        if (el.id === selectedId) {
          let newWidth = selectedElement.width;
          let newHeight = selectedElement.height;

          switch (handle) {
            case 'top-left':
              el.x = el.x + deltaX;
              el.y = el.y + deltaY;
              newWidth = el.width - deltaX > 20 ? el.width - deltaX : 20;
              newHeight = el.height - deltaY > 20 ? el.height - deltaY : 20;
              break;
            case 'top-right':
              el.y = el.y + deltaY;
              newWidth = el.width + deltaX;
              newHeight = el.height - deltaY;
              break;
            case 'bottom-left':
              el.x = el.x + deltaX;
              newWidth = el.width - deltaX;
              newHeight = el.height + deltaY;
              break;
            case 'bottom-right':
              newWidth = el.width + deltaX;
              newHeight = el.height + deltaY;
              break;
          }

          el.width = Math.max(20, newWidth);
          el.height = Math.max(20, newHeight);
        }
        return el;
      })
    );
  }

  updateSelectedElement() {
    this._elements.set([...this._elements()]);
  }
}
