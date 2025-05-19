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
    this.innerRadius = params.innerRadius ?? 25;
    this.outerRadius = params.outerRadius ?? 50;
    this.isSelected = params.isSelected ?? false;
  }

  generatePoints(): string {
    const points = [];
    const centerX = this.x;
    const centerY = this.y;

    for (let i = 0; i < this.points * 2; i++) {
      const radius = i % 2 === 0 ? this.outerRadius : this.innerRadius;
      const angle = (Math.PI / this.points) * i;

      const x = centerX + radius * Math.sin(angle);
      const y = centerY - radius * Math.cos(angle);

      points.push(`${x.toFixed()},${y.toFixed()}`);
    }

    return points.join(' ');
  }

  get pointsValue(): string {
    return this.generatePoints();
  }
}
