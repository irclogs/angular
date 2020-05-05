import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Channel, Message } from '../models';

interface ChannelListResponse {
  rows: [{value:number, key:[string]}]
}

// TODO: should go in environment
const dbUrl = new URL('https://irc.softver.org.mk/');


@Injectable({
  providedIn: 'root'
})
export class CouchService {

  constructor(private http: HttpClient) { }

  getChannelList(): Observable<Channel[]> {
    const url = new URL('ddoc/_view/channel', dbUrl).toString();
    const params = new HttpParams()
            .set("update_seq", "true")
            .set("reduce", "true")
            .set("group_level","1");
    return this.http.get<ChannelListResponse>(url, { params }).pipe(
        map((res:ChannelListResponse) =>
          res.rows
            .map(row => ({name: row.key[0], weight: row.value}))
        )
    )
  }

  // TODO
  getPage(channel:string, since:string): Observable<Message[]> {
    return of([dummyMsg(channel)]);
  }

  getFeed(channel:string): Observable<Message> {
    return of(dummyMsg(channel));
  }
}

function dummyMsg(channel: string) {
  return {
    _id: "dummy",
    _rev: "dummy",
    sender: "dummy",
    channel: channel,
    message: "dummy",
    timestamp: 1
  };
}
