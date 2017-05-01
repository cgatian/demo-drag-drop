import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'app/components/services/player.service';
import { Item } from 'app/models/item';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss']
})
export class BackpackComponent implements OnInit {
  items: Item[];

  constructor(private playerService: PlayerService) {
    this.items = [
      {
        type: 'Magic Potion',
        modifiers: {
          magic: 10
        }
      },
      {
        type: 'Health Pack',
        modifiers: {
          health: 5
        }
      },
      {
        type: 'Sandwich', modifiers: {
          awesomeness: 30
        }
      }
    ];

  }

  onConsumeItem(item: Item) {
    this.playerService.consumeItem(item);
  }

  ngOnInit() { }
}

