import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatDateHeader' })
export class FormatDate implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;
//let initialDate : Date = this.getDateFromStr(value);
        let initialDate =  moment(value);
      
        return  moment().format('ddd, MMMM DD, YYYY') ;
       
    }


    getDateFromStr(dateStr) {
        const [datePart, timePart] = dateStr.split(" ");
        const [year, month, day] = datePart.split("-");
        const [hour, minute, sec] = timePart.split(":");
        return new Date(year, month - 1, day, hour, minute, sec);
    }

}