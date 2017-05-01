import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'app/components/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  health: number;
  magic: number;
  awesomeness: number;

  constructor(playerService: PlayerService) {
    playerService.player$.subscribe(player => {
      this.health = player.health;
      this.magic = player.magic;
      this.awesomeness = player.awesomeness;
    });
  }

  ngOnInit() { }
}
