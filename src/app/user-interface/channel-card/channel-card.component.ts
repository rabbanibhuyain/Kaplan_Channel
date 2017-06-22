import {Component, Input, OnInit} from '@angular/core';
import {IChannelModel} from '../../model/ichannel.model';
import {EventTimeFormat} from '../../shared/event-time.pipe';

@Component({
  selector: 'kp-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.css']
})
export class ChannelCardComponent implements OnInit {

  @Input() cardData: IChannelModel;

  constructor() { }

  ngOnInit() {
    //this.addOneHours(this.cardData.time);
  }

  addOneHours(argDate){
    console.log(argDate);
  }

}
