import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedCalendarDate : string = "";
  selectedCalendarDateEvents : any[] = [];
  calendarEvents : any[] = [
    { title: 'Programiranje u C-u', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '12:00 do 14:00', date: '2023-03-20' },
    { title: 'Uvod u UNIX', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '12:00 do 16:', description: 'ddddd', date: '2023-03-20' },
    { title: 'Programiranje u Pythonu', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '13:30 do 17:00', date: '2023-03-21' },
    { title: 'Predavanje o tome i tome', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '10:30 do 18:00', date: '2023-03-21' },
    { title: 'Prezentacija o svemu', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '11:00 do 17:30', date: '2023-03-21' },
    { title: 'Isto neki predmet', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '10:30 do 19:30', date: '2023-03-21' },
    { title: 'Ovo je drugi predmet', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '12:00 do 14:30', date: '2023-03-21' },
    { title: 'Ovo je predmet', profesor: 'dr. sc. Davor Cafuta', location: 'Trg Žrtava Fašizma 2, učionica 234', time: '12:30 do 13:00', date: '2023-03-21' }
  ];

  notifications : any[] = [
    { course: 'Programiranje u C-u', author: 'dr. sc. Davor Cafuta', fromDateTime: '23.02.2023.', toDateTime: '27.02.2023.', header: 'Sad cemo programirati!', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen' },
    { course: 'Programiranje u C-u', author: 'dr. sc. Davor Cafuta', fromDateTime: '23.02.2023.', toDateTime: '27.02.2023.', header: 'Sad cemo programirati!', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen' },
    { course: 'Programiranje u C-u', author: 'dr. sc. Davor Cafuta', fromDateTime: '23.02.2023.', toDateTime: '27.02.2023.', header: 'Sad cemo programirati!', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen' },
    { course: 'Programiranje u C-u', author: 'dr. sc. Davor Cafuta', fromDateTime: '23.02.2023.', toDateTime: '27.02.2023.', header: 'Sad cemo programirati!', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen' },
    { course: 'Programiranje u C-u', author: 'dr. sc. Davor Cafuta', fromDateTime: '23.02.2023.', toDateTime: '27.02.2023.', header: 'Sad cemo programirati!', description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen' }
  ];


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
  }
}
