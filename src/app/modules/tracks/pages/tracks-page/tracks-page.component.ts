import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private tracksServices: TracksService) { }

  ngOnInit(): void {
    const observer1$ = this.tracksServices.dataTracksTrending$.subscribe(
      Response => {
        this.tracksTrending = Response
      }
    )
    const observer2$ = this.tracksServices.dataTracksRandom$.subscribe(
      Response => {
        this.tracksRandom = [...this.tracksRandom, ...Response]
      }
    )
    this.listObservers$ = [observer1$, observer2$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
