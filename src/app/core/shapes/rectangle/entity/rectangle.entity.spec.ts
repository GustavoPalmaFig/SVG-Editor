import { RectangleEntity } from './rectangle.entity';

describe('RectangleEntity', () => {
  it('should create with default values', () => {
    const rect = new RectangleEntity();
    expect(rect.type).toBe('rectangle');
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(80);
    expect(rect.fill).toBe('#4CAF50');
    expect(rect.stroke).toBe('#2E7D32');
    expect(rect.strokeWidth).toBe(2);
    expect(rect.borderRadius).toBe(0);
    expect(rect.isSelected).toBe(false);
    expect(typeof rect.id).toBe('string');
  });

  it('should assign custom values from params', () => {
    const rect = new RectangleEntity({
      x: 10,
      y: 20,
      width: 200,
      height: 150,
      fill: '#fff',
      stroke: '#000',
      strokeWidth: 5,
      borderRadius: 8,
      isSelected: true,
      id: 'custom-id',
    });
    expect(rect.x).toBe(10);
    expect(rect.y).toBe(20);
    expect(rect.width).toBe(200);
    expect(rect.height).toBe(150);
    expect(rect.fill).toBe('#fff');
    expect(rect.stroke).toBe('#000');
    expect(rect.strokeWidth).toBe(5);
    expect(rect.borderRadius).toBe(8);
    expect(rect.isSelected).toBe(true);
    expect(rect.id).toBe('custom-id');
  });

  it('should generate unique id if not provided', () => {
    const rect1 = new RectangleEntity();
    const rect2 = new RectangleEntity();
    expect(rect1.id).not.toBe(rect2.id);
  });
});
