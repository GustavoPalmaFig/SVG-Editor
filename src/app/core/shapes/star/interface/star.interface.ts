import { SvgElement } from '../../../shared/interfaces/svg-element.interface';

export interface Star extends SvgElement {
  type: 'star';
  points: number;
  innerRadius: number;
  outerRadius: number;
}
