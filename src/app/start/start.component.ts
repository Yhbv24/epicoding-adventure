import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [CharacterService]
})
export class StartComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  startGame(name: string, color: string, track: string, codeTool: string, charSelect: string) {
    if (charSelect != null) {

    } else {
      var newCharacter: Character = new Character(name, color, track, codeTool);
      this.characterService.saveCharacter(newCharacter);
    }
  }

}
