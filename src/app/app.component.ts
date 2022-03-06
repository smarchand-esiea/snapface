import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Laëticia',
      'Ma meilleur amie depuis tout petit !',
      'https://images.pexels.com/photos/7705852/pexels-photo-7705852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      new Date(),
      0
    );
  }
}
