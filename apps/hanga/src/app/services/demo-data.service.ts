import { Injectable } from '@angular/core';

export interface Show {
  name: string;
  description: string;
  image: string;
  bpm: number;
  genres: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  shows: Show[] = [
    {
      name: 'THIRD EYE HI-FI: INTEC',
      description: 'The beats are heavy, yet intricate, and the basslines are dark and twisted - signature Intec.',
      image: 'https://lh3.googleusercontent.com/BqSS_yynDXDmrawNeZ2c-xQwnaqpmjFCJ1J-gEWjzoB8s4Tc6DrdwRf8Rw_XhYZP1X0upJz2bZwBLnTTaNQo-kQpxBUa2YHb8US3gThsCYZ2IU7ZEVievhEcD-41RK6DEOhypgb4qa0=w2400',
      bpm: 165,
      genres: ['Jungle', 'Oldskool', 'Hardcore']

    },
    {
      name: 'THIRD EYE HI-FI: MONKATRON',
      description: 'The Jungle Monkey. All Junglist Massive. All Junglist Crew.',  
      image: 'https://f4.bcbits.com/img/0024000334_20.jpg',
      bpm: 175,
      genres: ['Neuro', 'DnB', 'Jump-up', 'Jungle']
    }
  ]
}
