import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-desperate',
  templateUrl: './desperate.component.html',
  styleUrls: ['./desperate.component.css'],
  providers: [CharacterService]
})
export class DesperateComponent implements OnInit {
  characterId: string = null;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = (urlParameters['id']);
    });
  }

  levelTwoHawaiianChoice() {
    this.characterService.updateCharacter(this.characterId, 2, -10, 30);
    this.router.navigate(['vomit', this.characterId]);
  }

  levelTwoJeansChoice() {
    this.characterService.updateCharacter(this.characterId, 3, 15, 60);
    this.router.navigate(['jeans', this.characterId]);
  }

  levelTwoSuitChoice() {
    this.characterService.updateCharacter(this.characterId, 3, 10, 35);
    this.router.navigate(['suit', this.characterId]);
  }

}
