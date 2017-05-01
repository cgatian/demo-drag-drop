import { Injectable } from '@angular/core';
import { Item } from 'app/models/item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from 'app/models/player';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {

  get player$(): Observable<Player> {
    return this.player.asObservable();
  }

  private player: BehaviorSubject<Player>;

  constructor() {
    this.player = new BehaviorSubject(new Player());
  }

  consumeItem(item: Item) {
    const currentPlayerState = Object.assign({}, this.player.getValue());
    if (item.modifiers.health) {
      currentPlayerState.health += item.modifiers.health;
    }
    if (item.modifiers.magic) {
      currentPlayerState.magic += item.modifiers.magic;
    }
    if (item.modifiers.awesomeness) {
      currentPlayerState.awesomeness += item.modifiers.awesomeness;
    }
    this.player.next(currentPlayerState);
  }
}
