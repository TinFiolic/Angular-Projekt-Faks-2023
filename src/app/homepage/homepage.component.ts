import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedCalendarDate : string = "";
  selectedCalendarDateEvents : any[] = [];
  calendarEvents : any[] = [];


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    events: this.calendarEvents,
    locale: 'hr',
    firstDay: 1,
    selectable: true,
    selectMirror: true,
    dateClick: this.handleDateClick.bind(this),
    eventColor:'#F1441E',
    eventBorderColor:'#803109',
    eventTextColor:'#ffffff'
  };

  handleDateClick(dateClickEvent){
    $("#modal_bg").fadeIn();

    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(dateClickEvent.dateStr, 'dd.MM.YYYY')
    this.selectedCalendarDate = formattedDate;
    
    (Object.keys(this.calendarEvents) as (keyof typeof this.calendarEvents)[]).forEach((key, index) => {
      if(this.calendarEvents[key].date == dateClickEvent.dateStr) {
        this.selectedCalendarDateEvents.push(this.calendarEvents[key]);
      }
    });

    this.selectedCalendarDateEvents.sort((a, b) => a.time.localeCompare(b.time));
  }


  constructor() { }

  ngOnInit(): void {
    $("#modal_bg").fadeOut(0);
    $("#modal_bg").click(function() {
      $("#modal_bg").fadeOut();
    });

    this.getUsers();
  }

  async getUsers() {
    axios.get('https://pious2023-backed.onrender.com/schedule/account/' + localStorage.getItem("userId"))
    .then(response => {
      this.calendarEvents = response.data;
      console.log('Calendar events:', this.calendarEvents);
      this.calendarOptions.events = response.data;
    })
    .catch(error => {
      console.error('Error getting calendar events:', error);
    });
  }
}
