import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgIf, NgFor } from '@angular/common'; 
import { Movie } from '../../models/movie';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [AsyncPipe, DatePipe, NgIf, NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  @Input() dataObs!: Observable<Movie[]>;
  @Input() imagesBaseUrl = '';
  public slideIndex = 0;

  ngOnInit(){
    setInterval(()=>{
      
      if(this.slideIndex < 19){
        this.slideIndex++;
      }
      else {
        this.slideIndex = 0;
      }
    } , 5000);
  }

  slideLeft(){

    if(this.slideIndex <= 0 ){
      return
    }
    this.slideIndex--;
    
  }

  slideRight(){
    if(this.slideIndex >= 19 ){
      return
    }
    this.slideIndex++;
  }
  
  trackByMovieId(index: number, movie: Movie): number {
    return movie.id;
  }
  
}
