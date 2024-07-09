import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'dbz-add-character',
	standalone: true,
	templateUrl: './add-character.component.html',
	styleUrls: ['./add-character.component.css'],
	imports: [CommonModule, FormsModule],
})
export class AddCharacterComponent {
	@Output()
	onNewCharacter: EventEmitter<Character> = new EventEmitter();

	character: Character = {
		name: '',
		power: 0,
	};

	emitCharacter() {
		if (this.character.name.length === 0) return;
		this.onNewCharacter.emit(this.character);

		this.character = { name: '', power: 0 };
	}
}
