import { Component } from '@angular/core';
import { Network } from './api/network';
import { Cache } from './api/cache';
import { Item29 } from './items/item29';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'clean-way-rx';
  network: Network;
  cache: Cache;

  ngOnInit() {

    this.network = new Network();
    this.cache = new Cache();

    const item = new Item29();
    item.itemExample();
  }
}
