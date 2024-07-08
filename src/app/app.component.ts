import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './hero/list/list.component';
import { MainPageComponent } from './dbz/pages/main-page.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CounterComponent, HeroComponent, ListComponent, MainPageComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {}
