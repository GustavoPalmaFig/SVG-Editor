import { SvgElement } from '../../../shared/interfaces/svg-element.interface';

export interface Rectangle extends SvgElement {
  type: 'rectangle';
  borderRadius: number;
}
