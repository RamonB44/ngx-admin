import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { NbAuthJWTToken, NbAuthService, NbAuthResult, NbAuthRefreshableToken } from '@nebular/auth';

@Injectable()
export class WebSocketIO {
  private socket;
  private token: string;


  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.token = token.getValue();

        }

      });

    this.socket = io('http://localhost:3001', {
      // reconnectionAttempts : 5,
      reconnectionDelay: 20000,
      // reconnectionDelayMax: 5000,
      // timeout: 5000,
      // timeout: 20000,
      reconnection: true,
      transports: ['websocket', 'polling'],
      withCredentials: true,
      extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        // add any other headers you need to sendS
      },
      auth: {
        token: this.token,
      },

    });

    this.socket.on('connect_error', () => {
      this.authService.refreshToken('email', { token: this.token }).toPromise().then((result: NbAuthResult) => {
        this.socket.auth.token = result.getToken().toString();
        return result.getToken();
      });
    });
  }
  // emite un mensaje al evento
  sendMessage(event: string, msg: string) {
    this.socket.emit(event, { message: msg });
  }
  // captura el mensaje de un evento
  onHandleMessage(event: string) {
    return new Observable(observer => {
      this.socket.on(event, msg => {
        observer.next(msg);
      });
    });
  }

}
