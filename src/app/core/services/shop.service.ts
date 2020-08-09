import { Shop } from './../models/shop';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shops: Shop[] = [
    {
      id: '123123',
      logo: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg',
      name: 'Wanchan',
      address: 'No 123 Street F Q.HH Jkl C.Abc Fgh VN',
      phoneNumber: '0123456789',
      stars: 3,
      latitude: 1111111111111,
      longitude: 111111111,
      banner: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg',
      openTime: { hours: 7, minutes: 0 },
      closeTime : { hours: 23, minutes: 0 },
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters<b>, as opposed to using</b> \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
    {
      id: '123124',
      logo: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg',
      name: 'Pet Health',
      address: 'No 123 Street F Q.HH Jkl C.Abc Fgh VN',
      phoneNumber: '0123456789',
      stars: 4,
      latitude: 1111111111111,
      longitude: 111111111,
      banner: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg',
      openTime: { hours: 7, minutes: 0 },
      closeTime : { hours: 23, minutes: 0 },
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters<b>, as opposed to using</b> \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
    {
      id: '123125',
      logo: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg',
      name: 'Mew Shop',
      address: 'No 123 Street F Q.HH Jkl C.Abc Fgh VN',
      phoneNumber: '0123456789',
      stars: 5,
      latitude: 1111111111111,
      longitude: 111111111,
      banner: 'https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg',
      openTime: { hours: 7, minutes: 0 },
      closeTime : { hours: 23, minutes: 0 },
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters<b>, as opposed to using</b> \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
  ]

  constructor() { }

  public getRecommendedShops(): Observable<Shop[]> {
    return of(this.shops).pipe(delay(500));
  }
}
