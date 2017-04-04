export class Character {
  points: number = 0;
  level: number = 1;
  techAbility: number = 1;
  networkingAbility: number = 1;
  enthusiasm: number = 100;

  constructor(public name: string, public track: string, public tool: string, public favoriteColor: string)
}
