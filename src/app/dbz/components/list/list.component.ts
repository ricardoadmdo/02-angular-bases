import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'dbz-list',
	standalone: true,
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
	imports: [CommonModule],
})
export class ListComponent {
	@Input()
	characterList: Character[] = [
		{
			name: 'Trunks',
			power: 10,
		},
	];
}
