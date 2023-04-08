import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  private socket: Socket | undefined;
  constructor() {}
  ngOnInit(): void {
    console.log('working');
    const data = {
      this: 'this is a data',
    };
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('connected to server');
    });
    this.socket.on('message', (data: string) => {
      console.log('received message:', data);
    });
  }
  sendMessage(){
    this.socket?.emit('message',{message:"this is a message"})
  }
}
