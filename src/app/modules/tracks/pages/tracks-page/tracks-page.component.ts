import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

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
    this.loadDataAll()
  }

  loadDataAll(): void {
    this.tracksServices.getAllTracks$()  //Canciones en small
      .subscribe((Response: TrackModel[]) => {
        this.tracksTrending = Response
      })

    this.tracksServices.getAllRandom$() //CAnciones en big
      .subscribe((Response: TrackModel[]) => {
        this.tracksRandom = Response
      })
  }

  ngOnDestroy(): void {
    //No es necesaria la desuscripcion en las suscripciones httpClient, la desuscripcion es automatica
  }

}
