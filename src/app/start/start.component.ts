import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [CharacterService]
})
export class StartComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  character;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  startGame(name: string, color: string, track: string, codeTool: string, charSelect: any) {
    if (charSelect == 'blank') {
      if (!name || !track || !color || !codeTool) {
        alert("Please complete all form fields to create a character, or choose a pre-made one!");
      } else {
        var newCharacter: Character = new Character(name, color, track, codeTool);
        var charId = this.characterService.saveCharacter(newCharacter);
        this.router.navigate(['level-one/', charId]);
      }
    } else {
      this.characterService.getCharacterById(charSelect).subscribe(dataLastEmittedFromObserver => {
      this.character = new Character(
        dataLastEmittedFromObserver.name,
        dataLastEmittedFromObserver.track,
        dataLastEmittedFromObserver.tool,
        dataLastEmittedFromObserver.favoriteColor)
      });
      this.router.navigate(['level-one', charSelect]);
    }
  }

}
