import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css'],
  providers: [CharacterService]
})
export class JeansComponent implements OnInit {
  characterId: string = null;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = (urlParameters['id']);
    });
  }

  levelThreeBackAway() {
    this.characterService.updateCharacter(this.characterId, 2, -10, 30);
    this.router.navigate(['vomit', this.characterId]);
  }

  levelThreeWinChoice() {
    this.characterService.updateCharacter(this.characterId, 4, 20, 70);
    this.router.navigate(['getJob', this.characterId]);
  }

  levelThreeHug() {
    this.characterService.updateCharacter(this.characterId, 4, 15, 30);
    this.router.navigate(['getJob', this.characterId]);
  }

}
