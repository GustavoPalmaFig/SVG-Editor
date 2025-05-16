export interface SvgElement {
  id: string;
  type: 'rectangle' | 'star';
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  isSelected: boolean;
}
