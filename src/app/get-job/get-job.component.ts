import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-get-job',
  templateUrl: './get-job.component.html',
  styleUrls: ['./get-job.component.css'],
  providers: [CharacterService]
})
export class GetJobComponent implements OnInit {
  characterId: string = null;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = (urlParameters['id']);
    });
  }

  levelFourCake() {
    this.characterService.updateCharacter(this.characterId, 5, 20, 35);
    this.router.navigate(['get-fired', this.characterId]);
  }

  levelFourPTO() {
    this.characterService.updateCharacter(this.characterId, 5, 30, 80);
    this.router.navigate(['call-in-sick', this.characterId]);
  }

}
