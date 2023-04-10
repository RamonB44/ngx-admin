import { Component, OnInit } from '@angular/core';
import { WebSocketIO } from '../../@core/services/websocket.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private ws: WebSocketIO) {
  }

  ngOnInit() {
    this.ws.sendMessage('message', 'hola mundo');
  }

}

