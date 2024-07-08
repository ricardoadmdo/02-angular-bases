import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { Character } from '../interfaces/character.interface';

@Component({
	selector: 'app-dbz-main-page',
	standalone: true,
	imports: [ListComponent, AddCharacterComponent],
	templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
	characters: Character[] = [
		{
			name: 'Krillin',
			power: 1000,
		},
		{
			name: 'Goku',
			power: 9500,
		},
		{
			name: 'Vegeta',
			power: 7500,
		},
		{
			name: 'Broly',
			power: 10000,
		},
	];
}
