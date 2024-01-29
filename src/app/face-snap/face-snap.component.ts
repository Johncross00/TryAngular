import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  dislikeButton!: string;
  LikeButton!: string;

  ngOnInit(): void {
      this.title = 'Germain';
      this.description = 'My best friend';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
      this.LikeButton = "❤️";
      this.dislikeButton = "👎";
  }

  onLike(){
    if(this.LikeButton === "❤️"){
      this.snaps++;
      this.LikeButton = "💕";
    }else{
      this.snaps--;
      this.LikeButton = "❤️";
    }
  }

  onDislike(){
    if(this.dislikeButton === "👎"){
      this.snaps--;
      this.dislikeButton = "💔";
    }
    else{
      this.snaps++;
      this.dislikeButton = "👎"
    }
  }

}
