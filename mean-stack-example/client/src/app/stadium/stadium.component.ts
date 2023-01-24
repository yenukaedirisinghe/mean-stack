import { Component } from '@angular/core';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent {
block_A = [
  [{ number: 'A1', occupied: false }, { number: 'A2', occupied: true }, { number: 'A3', occupied: false }, { number: 'A4', occupied: true }],
  [{ number: 'B1', occupied: false }, { number: 'B2', occupied: true }, { number: 'B3', occupied: false }, { number: 'B4', occupied: true }],
  [{ number: 'C1', occupied: false }, { number: 'C2', occupied: true }, { number: 'C3', occupied: false }, { number: 'C4', occupied: true }]
];

block_B = [
  [{ number: 'A1', occupied: false }, { number: 'A2', occupied: true }, { number: 'A3', occupied: false }, { number: 'A4', occupied: true }],
  [{ number: 'B1', occupied: false }, { number: 'B2', occupied: true }, { number: 'B3', occupied: false }, { number: 'B4', occupied: true }],
  [{ number: 'C1', occupied: false }, { number: 'C2', occupied: true }, { number: 'C3', occupied: false }, { number: 'C4', occupied: true }]
];

block_C = [
  [{ number: 'C1', occupied: false }, { number: 'C2', occupied: true }, { number: 'C3', occupied: false }, { number: 'C4', occupied: true }],
  [{ number: 'B1', occupied: false }, { number: 'B2', occupied: true }, { number: 'B3', occupied: false }, { number: 'B4', occupied: true }],
  [{ number: 'A1', occupied: false }, { number: 'A2', occupied: true }, { number: 'A3', occupied: false }, { number: 'A4', occupied: true }]
];

block_D = [
  [{ number: 'C1', occupied: false }, { number: 'C2', occupied: true }, { number: 'C3', occupied: false }, { number: 'C4', occupied: true }],
  [{ number: 'B1', occupied: false }, { number: 'B2', occupied: true }, { number: 'B3', occupied: false }, { number: 'B4', occupied: true }],
  [{ number: 'A1', occupied: false }, { number: 'A2', occupied: true }, { number: 'A3', occupied: false }, { number: 'A4', occupied: true }]
];

selectedSeat: any;

selectblock_A(seat: any) {
  this.selectedSeat = seat;
}

selectblock_B(seat: any) {
  this.selectedSeat = seat;
}

selectblock_C(seat: any) {
  this.selectedSeat = seat;
}

selectblock_D(seat: any) {
  this.selectedSeat = seat;
}


}
