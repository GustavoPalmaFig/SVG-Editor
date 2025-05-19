import { Star } from '../interface/star.interface';

export class StarEntity implements Star {
  id: string;
  type = 'star' as const;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  points: number;
  innerRadius: number;
  outerRadius: number;
  isSelected: boolean;

  constructor(params: Partial<Star> = {}) {
    this.id = params.id ?? crypto.randomUUID();
    this.x = params.x ?? 300;
    this.y = params.y ?? 100;
    this.width = params.width ?? 100;
    this.height = params.height ?? 100;
    this.fill = params.fill ?? '#FFC107';
    this.stroke = params.stroke ?? '#FFA000';
    this.strokeWidth = params.strokeWidth ?? 2;
    this.points = params.points ?? 5;
    this.innerRadius = params.innerRadius ?? 20;
    this.outerRadius = params.outerRadius ?? 50;
    this.isSelected = params.isSelected ?? false;
  }

  generatePoints(): string {
    const points = [];

    const squareSize = Math.min(this.width, this.height);
    const centerX = this.x + this.width / 2;
    const centerY = this.y + this.height / 2;

    const outerRadius = (squareSize / 2) * 0.9; // um pouco menor que o quadrado
    const innerRadius = outerRadius * (this.innerRadius / this.outerRadius);

    const step = Math.PI / this.points;

    for (let i = 0; i < 2 * this.points; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = i * step - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x.toFixed()},${y.toFixed()}`);
    }

    return points.join(' ');
  }

  get pointsValue(): string {
    return this.generatePoints();
  }
}
