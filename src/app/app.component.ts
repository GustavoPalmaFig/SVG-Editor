import { Component } from '@angular/core';
import { CanvasComponent } from './core/features/canvas/canvas.component';
import { ToolbarComponent } from './core/shared/components/toolbar/toolbar.component';
import { PropertiesPanelComponent } from './core/shared/components/properties-panel/properties-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CanvasComponent, ToolbarComponent, PropertiesPanelComponent],
})
export class AppComponent {}
