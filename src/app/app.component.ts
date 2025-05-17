import { Component } from '@angular/core';
import { CanvasComponent } from './core/features/canvas/canvas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CanvasComponent],
})
export class AppComponent {}
