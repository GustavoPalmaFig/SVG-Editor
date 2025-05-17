import { Rectangle } from '../interface/rectangle.interface';

export class RectangleEntity implements Rectangle {
  id: string;
  type = 'rectangle' as const;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  borderRadius: number;
  isSelected: boolean;

  constructor(params: Partial<Rectangle> = {}) {
    this.id = params.id ?? crypto.randomUUID();
    this.x = params.x ?? 50;
    this.y = params.y ?? 50;
    this.width = params.width ?? 100;
    this.height = params.height ?? 80;
    this.fill = params.fill ?? '#4CAF50';
    this.stroke = params.stroke ?? '#2E7D32';
    this.strokeWidth = params.strokeWidth ?? 2;
    this.borderRadius = params.borderRadius ?? 0;
    this.isSelected = params.isSelected ?? false;
  }
}
