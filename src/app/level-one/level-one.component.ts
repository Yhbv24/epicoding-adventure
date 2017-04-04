import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css'],
  providers: [CharacterService]
})
export class LevelOneComponent implements OnInit {
  characterId: string = null;


  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = (urlParameters['id']);
    });
  }

  levelOneJobChoice() {
    this.characterService.updateCharacter(this.characterId);
    this.router.navigate(['desperate', this.characterId]);
  }
}
