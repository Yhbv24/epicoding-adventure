import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-call-in-sick',
  templateUrl: './call-in-sick.component.html',
  styleUrls: ['./call-in-sick.component.css'],
  providers: [CharacterService]
})
export class CallInSickComponent implements OnInit {
  characterId: string = null;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = (urlParameters['id']);
    });
  }

  levelFiveQuiet() {
    this.characterService.updateCharacter(this.characterId, 6, 30, 80);
    this.router.navigate(['win', this.characterId]);
  }

  levelFiveLoud() {
    this.characterService.updateCharacter(this.characterId, 6, 20, 10);
    this.router.navigate(['lose', this.characterId]);
  }

}
