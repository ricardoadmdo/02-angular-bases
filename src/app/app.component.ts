import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './hero/list/list.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CounterComponent, HeroComponent, ListComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {}
