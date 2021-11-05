import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { FavoriteService } from '@modules/favorites/services/favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  dataTracks: Array<TrackModel> = []

  constructor(private favoriteSercice: FavoriteService) { }

  ngOnInit(): void {
    this.loadAllData()
  }

  loadAllData(): void {
    this.favoriteSercice.getAllTracks$()
      .subscribe((Response: TrackModel[]) => {
        this.dataTracks = Response
      })
  }

}
