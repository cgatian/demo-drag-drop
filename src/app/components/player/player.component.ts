import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'app/components/services/player.service';
import { Item } from 'app/models/item';
import { Observable } from 'rxjs/Observable';
import { Player } from 'app/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  health: number;
  magic: number;
  awesomeness: number;

  // player$: Observable<Player>;

  constructor(private playerService: PlayerService) {

    playerService.player$.subscribe(player => {
      this.health = player.health;
      this.magic = player.magic;
      this.awesomeness = player.awesomeness;
    });

    // this.player$ = playerService.player$;
  }

  // onDroppedItem(item: Item) {
  //   this.playerService.consumeItem(item);
  // }

  ngOnInit() { }
}
