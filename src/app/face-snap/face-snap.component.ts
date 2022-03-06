import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Laëticia';
    this.description = 'Ma meilleur amie depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://images.pexels.com/photos/7705852/pexels-photo-7705852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    this.buttonText = "Oh Snap!";
  }
 onSnap() {
   if (this.buttonText === 'Oh Snap!') {
     this.faceSnap.snaps++;
     this.buttonText = 'Oops, unSnap!';
   } else {
     this.faceSnap.snaps--;
     this.buttonText = 'Oh Snap!'
   }
 }
}
