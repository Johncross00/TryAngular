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

  ngOnInit(): void {
      this.title = 'Germain';
      this.description = 'My best friend';
      this.createdDate = new Date();
      this.snaps = 6;
  }

}
