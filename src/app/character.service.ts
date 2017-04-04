import { Injectable } from '@angular/core';
import { Character } from './character';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;
  character;

  constructor(private angularFire: AngularFire) {
    this.characters = angularFire.database.list('characters');
  }

  getCharacters() {
    return this.characters;
  }

  saveCharacter(currentCharacter: Character) {
    this.characters.push(currentCharacter);
  }

  getCharacterById(characterKey: any) {
    return this.angularFire.database.object('/characters/' + characterKey);
  }

}
