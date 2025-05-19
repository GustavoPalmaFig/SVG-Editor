import { Injectable } from '@angular/core';
import { SvgElement } from '../interfaces/svg-element.interface';

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
      console.error('Error on loading saved elements:', error);
    }
    return [];
  }

  saveElements(elements: SvgElement[]): void {
    try {
      const serializedElements = JSON.stringify(elements);
      localStorage.setItem(STORAGE_KEY, serializedElements);
    } catch (error) {
      console.error('Error on saving elements:', error);
    }
  }
}
