import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatDateHeader' })
export class FormatDate implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;
        return  moment(value).format('ddd, MMMM DD, YYYY') ;
       
    }

}