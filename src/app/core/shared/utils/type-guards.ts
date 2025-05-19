import { SvgElement } from '../interfaces/svg-element.interface';
import { StarEntity } from '../../shapes/star/entity/star.entity';
import { RectangleEntity } from '../../shapes/rectangle/entity/rectangle.entity';

export function isRectangle(element: SvgElement): element is RectangleEntity {
  return element.type === 'rectangle';
}

export function isStar(element: SvgElement): element is StarEntity {
  return element.type === 'star';
}
