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

  saveCharacter(currentCharacter: any) {
    var savedCharacter = this.characters.push(currentCharacter);
    return savedCharacter.key;
  }

  getCharacterById(charId: string) {
    return this.angularFire.database.object('/characters/' + charId);
  }

  updateCharacter(characterId, nextLevel, networkingAb, enthus) {
    var savedCharacter = this.getCharacterById(characterId);
    savedCharacter.update({
      level: nextLevel,
      networkingAbility: networkingAb,
      enthusiasm: enthus
    });
  }

}
