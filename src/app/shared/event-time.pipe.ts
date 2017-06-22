import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eventTimeFormat' })
export class EventTimeFormat implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;
        let eventDate : Date = this.getDateFromStr(value);
        let startTime = this.formatAMPM(eventDate);
        let nextHour = new Date(eventDate.setTime(eventDate.getTime()+ (1*60*60*1000)));
       
        return  startTime +"-" + this.formatAMPM(nextHour);
       
    }


    getDateFromStr(dateStr) {
        const [datePart, timePart] = dateStr.split(" ");
        const [year, month, day] = datePart.split("-");
        const [hour, minute, sec] = timePart.split(":");
        return new Date(year, month - 1, day, hour, minute, sec);
    }

    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

}