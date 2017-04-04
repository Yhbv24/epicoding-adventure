import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-suit',
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.css'],
  providers: [CharacterService]
})
export class SuitComponent implements OnInit {
  characterId: string = null;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = (urlParameters['id']);
    });
  }

  reset() {
    this.characterService.updateCharacter(this.characterId, 1, 1, 50);
    this.router.navigate(['']);
  }
}
