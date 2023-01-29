import { Component, Renderer2, ElementRef, AfterViewInit, HostListener,ViewChild  } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent {
backgroundColor: string = 'white';
block_A = [
  [{ number: 'A_A1', occupied: false }, { number: 'A_A2', occupied: true }, { number: 'A_A3', occupied: false }, { number: 'A_A4', occupied: true }],
  [{ number: 'A_B1', occupied: false }, { number: 'A_B2', occupied: true }, { number: 'A_B3', occupied: false }, { number: 'A_B4', occupied: true }],
  [{ number: 'A_C1', occupied: false }, { number: 'A_C2', occupied: true }, { number: 'A_C3', occupied: false }, { number: 'A_C4', occupied: true }]
];

block_B = [
  [{ number: 'B_A1', occupied: false }, { number: 'B_A2', occupied: true }, { number: 'B_A3', occupied: false }, { number: 'B_A4', occupied: true }],
  [{ number: 'B_B1', occupied: false }, { number: 'B_B2', occupied: true }, { number: 'B_B3', occupied: false }, { number: 'B_B4', occupied: true }],
  [{ number: 'B_C1', occupied: false }, { number: 'B_C2', occupied: true }, { number: 'B_C3', occupied: false }, { number: 'B_C4', occupied: true }]
];

block_C = [
  [{ number: 'C_C1', occupied: false }, { number: 'C_C2', occupied: true }, { number: 'C_C3', occupied: false }, { number: 'C_C4', occupied: true }],
  [{ number: 'C_B1', occupied: false }, { number: 'C_B2', occupied: true }, { number: 'C_B3', occupied: false }, { number: 'C_B4', occupied: true }],
  [{ number: 'C_A1', occupied: false }, { number: 'C_A2', occupied: true }, { number: 'C_A3', occupied: false }, { number: 'C_A4', occupied: true }]
];

block_D = [
  [{ number: 'D_C1', occupied: false }, { number: 'D_C2', occupied: true }, { number: 'D_C3', occupied: false }, { number: 'D_C4', occupied: true }],
  [{ number: 'D_B1', occupied: false }, { number: 'D_B2', occupied: true }, { number: 'D_B3', occupied: false }, { number: 'D_B4', occupied: true }],
  [{ number: 'D_A1', occupied: false }, { number: 'D_A2', occupied: true }, { number: 'D_A3', occupied: false }, { number: 'D_A4', occupied: true }]
];

selectedSeat: any;
private clientID=""
private matchID=""


constructor(private wsService: WebsocketService,private renderer: Renderer2, private el: ElementRef,private router: Router,
  private route: ActivatedRoute) {
    this.wsService.receive().subscribe(message =>{
      if(message.method=="connect"){

        this.clientID=message.clientId;
        //const id = this.route.snapshot.paramMap.get('id');
        console.log("connected")
        console.log("client id"+this.clientID)
        // if (!id) {
        //   alert('No id provided');
        // }
        // else{ 
          
        //   }
        this.goToSession();
      };


      if(message.method=="join"){
        console.log(message)
        this.clientID=message.clientId;
        console.log("join")

      };
      if(message.method=="update"){

        console.log("Game state updated");
        if (!message.game.state) return;
          Object.entries(message.game.state).forEach(([key, value]) => {

          if(key!=''){
            console.log("key"+key+"_"+value)
             this.changeColor(key,value);
        }
        });


      };

    });
    
  }

  goToSession(){
    const payLoad = {
      method: 'join',
      clientID: this.clientID,
      matchID:"1a",
    };
    this.wsService.send(payLoad);
    console.log("send join request ")
  }

  clickOnSeat(seat: any) {
    this.selectedSeat = seat;
    console.log(this.selectedSeat);
    const payLoad = {
      method: 'click',
      clientID: this.clientID,
      matchID:"1a",
      color:"red",
      seatID:seat
    };
    this.wsService.send(payLoad);
    console.log("send seat ID")
  }

  changeColor(i: any,color: any) {

    const div = document.getElementById(i);
    this.renderer.setStyle(div, 'background-color', color);
   
  }

}
