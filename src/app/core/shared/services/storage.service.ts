import { Injectable } from '@angular/core';
import { isRectangle, isStar } from '../utils/type-guards';
import { SvgElement } from '../interfaces/svg-element.interface';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { RectangleEntity } from '../../shapes/rectangle/entity/rectangle.entity';

const STORAGE_KEY = 'svg-editor-elements';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  loadElements(): SvgElement[] {
    try {
      const serializedElements = localStorage.getItem(STORAGE_KEY);
      if (serializedElements) {
        return JSON.parse(serializedElements);
      }
    } catch (error) {
      console.error('Erro ao carregar elementos:', error);
    }
    return [];
  }

  saveElements(elements: SvgElement[]): void {
    try {
      const serializedElements = JSON.stringify(elements);
      localStorage.setItem(STORAGE_KEY, serializedElements);
    } catch (error) {
      console.error('Erro ao salvar elementos:', error);
    }
  }
}
