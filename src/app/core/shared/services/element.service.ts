import { Injectable, signal } from '@angular/core';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { RectangleEntity } from '../../shapes/rectangle/entity/rectangle.entity';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private _elements = signal<Array<RectangleEntity | StarEntity>>([]);
  public readonly elements = this._elements.asReadonly();

  addElement(type: 'rectangle' | 'star'): void {
    let newElement: RectangleEntity | StarEntity;

    if (type === 'rectangle') {
      newElement = new RectangleEntity();
    } else if (type === 'star') {
      newElement = new StarEntity();
    }

    this._elements.update((elements) => [...elements, newElement]);
  }
}
