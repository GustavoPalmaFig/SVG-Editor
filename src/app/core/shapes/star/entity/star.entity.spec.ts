import { StarEntity } from './star.entity';

describe('StarEntity', () => {
  it('should create with default values', () => {
    const star = new StarEntity();
    expect(star.type).toBe('star');
    expect(star.points).toBe(5);
    expect(star.innerRadius).toBe(20);
    expect(star.outerRadius).toBe(50);
    expect(star.x).toBe(300);
    expect(star.y).toBe(100);
    expect(star.width).toBe(100);
    expect(star.height).toBe(100);
    expect(star.fill).toBe('#FFC107');
    expect(star.stroke).toBe('#FFA000');
    expect(star.strokeWidth).toBe(2);
    expect(star.isSelected).toBe(false);
    expect(typeof star.id).toBe('string');
  });

  it('should generate correct number of points for a 5-pointed star', () => {
    const star = new StarEntity({
      points: 5,
      x: 0,
      y: 0,
      innerRadius: 10,
      outerRadius: 20,
    });
    const pointsArr = star.pointsValue.split(' ');
    expect(pointsArr.length).toBe(10); // 2 * points
  });

  it('should generate different points for different innerRadius and outerRadius', () => {
    const star1 = new StarEntity({
      points: 5,
      x: 0,
      y: 0,
      innerRadius: 10,
      outerRadius: 20,
    });
    const star2 = new StarEntity({
      points: 5,
      x: 0,
      y: 0,
      innerRadius: 20,
      outerRadius: 40,
    });
    expect(star1.pointsValue).not.toBe(star2.pointsValue);
  });
});
