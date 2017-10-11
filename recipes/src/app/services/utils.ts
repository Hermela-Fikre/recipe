import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    public getTimeString(minutes: number) {
        let span = minutes > 1 ? 'mins' : 'min';

        if (minutes >= 60) {
            minutes = minutes / 60;

            span = minutes > 1 ? 'hours' : 'hour';
        }

        return minutes + ' ' + span;
    }
}