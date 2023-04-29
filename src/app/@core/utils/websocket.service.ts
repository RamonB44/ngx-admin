import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthResult, NbAuthOAuth2Token , NbAuthOAuth2JWTToken, NbTokenService, NbAuthToken} from '@nebular/auth';
// import { tap } from 'rxjs/operators';
@Injectable()
export class WebSocketIO {
  private socket;
  private token;


  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthOAuth2JWTToken) => {

        if (token.isValid()) {
          this.token = token.getPayload()
        }
      });

    this.socket = io('http://localhost:3001', {
      // reconnectionAttempts : 5,
      // reconnectionDelay: 20000,
      // reconnectionDelayMax: 5000,
      // timeout: 5000,
      // timeout: 20000,
      autoConnect: true,
      reconnection: true,
      transports: ['websocket'],
      withCredentials: true,
      extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        // add any other headers you need to sendS
      },
      auth: {
        token: this.token.refreshToken,
      },

    });

    this.socket.on('connect_error', (err) => {
      console.log(err.message); // prints the message associated with the error
      // this.authService.refreshToken('email', { token: {
      //   access_token : this.token,
      //   refreshToken : this.refreshToken,
      // } }).toPromise().then((result: NbAuthResult) => {
      //   this.socket.auth.token = result.getToken().toString();
      //   return result.getToken();
      // });

      // this.authService.isAuthenticatedOrRefresh().toPromise().then((authenticated: Boolean) => {
      //   if (!authenticated) { // false
      //     // Si no se recupera la conexion se cierra el socket
      //     console.log("Unauthenticated")
      //     return;
      //   }else{
      //     console.log("Authenticated")
      //     return;
      //   }

      // })
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
