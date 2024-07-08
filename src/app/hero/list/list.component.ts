import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	heroNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
	deletedHero? = '';

	removeLastHeroe() {
		this.deletedHero = this.heroNames.pop();
	}
}
