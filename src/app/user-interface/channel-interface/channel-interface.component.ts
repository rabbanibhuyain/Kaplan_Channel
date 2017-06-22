import { Component, OnInit } from '@angular/core';
import { IChannelModel } from '../../model/ichannel.model';
import { ChannelInterfaceService } from './channel-interface.service';
import * as _ from 'lodash';
import { forEach } from "@angular/router/src/utils/collection";
import {FormatDate} from '../../shared/format-date.pipe';

@Component({
  selector: 'kp-channel-interface',
  templateUrl: './channel-interface.component.html',
  styleUrls: ['./channel-interface.component.css']
})
export class ChannelInterfaceComponent implements OnInit {

  groupedData = new Array();

  constructor(private chanleService: ChannelInterfaceService) { }

  ngOnInit() {
      let channelData: IChannelModel[];
      let groupedByMonth;
    this.chanleService.getChannelData().subscribe(
      data => {
        channelData = data;
        //sort the data
        channelData.sort((d1, d2) => {
          function parseDate(dateStr) {
            const [datePart, timePart] = dateStr.split(" ");
            const [year, month, day] = datePart.split("-");
            return new Date(year, month - 1, day);
          }
          return parseDate(d1.time).valueOf() - parseDate(d2.time).valueOf();
        });
       
       //Group the data based on Date
        groupedByMonth = _.groupBy(channelData, item => item.time.substring(0, 10));

        //Convert grouped Object to Array for *ngFor
        for (var keys in groupedByMonth) {
          this.groupedData.push(groupedByMonth[keys]);
        }
      });


  }


}
