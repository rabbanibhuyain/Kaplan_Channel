import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChannelInterfaceComponent } from './user-interface/channel-interface/channel-interface.component';
import { ChannelCardComponent } from './user-interface/channel-card/channel-card.component';
import {ChannelInterfaceService} from './user-interface/channel-interface/channel-interface.service';
import {FormatDate} from './shared/format-date.pipe';
import {EventTimeFormat} from './shared/event-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChannelInterfaceComponent,
    ChannelCardComponent,
    FormatDate,
    EventTimeFormat
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChannelInterfaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
