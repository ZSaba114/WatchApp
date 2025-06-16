import { Component, Input, inject } from '@angular/core';
import { MoviesService, imagesBaseUrl } from '../../services/movies.service';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { Actor } from '../../models/credit';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MoviesScrollerComponent } from '../../components/movies-scroller/movies-scroller.component';
import { VideoComponent } from '../../components/video/video.component';
import { Video } from '../../models/video';


@Component({
  selector: 'app-show-movie',
  standalone: true,
  imports: [AsyncPipe, DatePipe, CurrencyPipe, CommonModule, MoviesScrollerComponent, VideoComponent, InfiniteScrollModule,NavbarComponent, FooterComponent ],
  templateUrl: './show-movie.component.html',
  styleUrl: './show-movie.component.scss'
})
export class ShowMovieComponent {

  @Input() movieId: string = '';
  private moviesService = inject(MoviesService);
  public movieObs$! : Observable<Movie>;
  public movieCastObs$!: Observable<Actor[]>; 
  public movieVideosObs$! : Observable<Video[]>;
  public similarMoviesObs$!: Observable<Movie[]>;
  public imagesBaseUrl = imagesBaseUrl;
  private activatedRouter = inject(ActivatedRoute);
  public showVideo = false;

  ngOnInit(){

    this.activatedRouter.params.pipe(map((p)=> p['movieId'])).subscribe((id)=>{
      console.log(id);
      this.movieObs$ = this.moviesService.fetchMovieById(id); 
      this.movieCastObs$ = this.moviesService.fetchMovieCast(id);
      this.movieVideosObs$ = this.moviesService.fetchMovieVideos(id);
      this.similarMoviesObs$ = this.moviesService.fetchSimilarMovies(id);

    })
  }

  openVideo(){
    this.showVideo = true;
  }
  closeVideo(){
    this.showVideo = false;
  }

  trackByActorId(index: number, actor: { id: number }): number {
  return actor.id;
}

}
