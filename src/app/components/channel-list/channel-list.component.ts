import { Component, OnInit } from '@angular/core';
import { CouchService } from '../../services/couch.service';
import { Channel } from '../../models';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  channels: Channel[] = [];

  constructor(private couch:CouchService) { }

  ngOnInit(): void {
    this.couch.getChannelList().subscribe(channels => this.channels = channels);
  }

}
