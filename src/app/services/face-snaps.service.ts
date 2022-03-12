import{ Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  faceSnaps:FaceSnap[] =
      [
        {
          id:1,
          title: 'Laëticia',
          description: 'Ma meilleur amie depuis tout petit !',
          imageUrl: 'https://images.pexels.com/photos/7705852/pexels-photo-7705852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          createdDate: new Date(),
          snaps: 140,
          location: 'Montigny'
        },
        {
          id:2,
          title: 'Benjamin',
          description: 'Un ami de toute épreuve',
          imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
          id:3,
          title: 'Médéric',
          description: 'L\'alsacien',
          imageUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEb-M9dYahphg/profile-displayphoto-shrink_200_200/0/1634478273983?e=1652313600&v=beta&t=u0gfhwwpoHTbLaCiFQGZcCdIs2UsQgyRYpq6YzOKwJ8',
          createdDate: new Date(),
          snaps: 0
        }
      ];
      getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
      }
      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'):void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}
