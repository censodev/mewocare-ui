import { Time } from '@angular/common';

export interface Shop {
    id: string;
    logo: string;
    name: string;
    address: string;
    phoneNumber: string;
    stars: 0 | 1 | 2 | 3 | 4 | 5;
    latitude: number;
    longitude: number;
    banner: string;
    openTime?: Time;
    closeTime?: Time;
    description?: string;
}