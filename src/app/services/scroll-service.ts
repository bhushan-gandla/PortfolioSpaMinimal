import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ScrollService {
private myData: string = 'Hellod  World!';

getData() {
    return this.myData;
}
}
