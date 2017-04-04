import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vomit',
  templateUrl: './vomit.component.html',
  styleUrls: ['./vomit.component.css'],
  providers: [CharacterService]
})
export class VomitComponent implements OnInit {
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
