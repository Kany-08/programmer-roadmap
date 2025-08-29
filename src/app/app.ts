import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoadmapForm } from './components/roadmap/roadmap-form/roadmap-form';
import { RoadmapList } from './components/roadmap/roadmap-list/roadmap-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoadmapForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('roadmap');
}
