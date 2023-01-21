import { Component } from '@angular/core';

@Component({
  selector: 'app-stadium',
  template: `
  <div class="stadium">
  <div class="pitch"></div>

    <div class="block-A" id="block_A">
      <div *ngFor="let row of block_A"> 
        <button *ngFor="let seat of row" [ngClass]="{'occupied': seat.occupied}" (click)="selectblock_A(block_A)">
          {{ seat.number }}
        </button> 
      </div>
      <br>
    </div>

    <div class="block-B" id="block_B">
      <div *ngFor="let row of block_B"> 
        <button *ngFor="let seat of row" [ngClass]="{'occupied': seat.occupied}" (click)="selectblock_B(block_B)">
          {{ seat.number }}
        </button> 
      </div>
    </div>

    <div class="block-C" id="block_C">
      <div *ngFor="let row of block_C"> 
        <button *ngFor="let seat of row" [ngClass]="{'occupied': seat.occupied}" (click)="selectblock_C(block_C)">
          {{ seat.number }}
        </button> 
      </div>
    </div>


    <div class="block-D" id="block_D">
      <div *ngFor="let row of block_D"> 
        <button *ngFor="let seat of row" [ngClass]="{'occupied': seat.occupied}" (click)="selectblock_D(block_D)">
          {{ seat.number }}
        </button> 
      </div>
    </div>


  </div>

  





  `,
  styles: [`.stadium {
    width: 600px;
    height: 600px;
    border-radius: 300px;
    overflow: hidden;
    position: relative;
    background-color:yellow;
  }
  
  .pitch {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    overflow: hidden;
    position: relative;
    background-color:green;
    margin: 150px;
  }
  
  .block-A {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 13px;
    left: 100px;
    transform: skewY(-15deg);
  }


  .block-B {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 133px;
    left: 364px;
    transform: skewY(15deg);
  }

  .block-C {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 495px;
    left: 89px;
    transform: skewY(15deg);
  }


  .block-D {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 374px;
    left: 365px;
    transform: skewY(-15deg);
  }


  `
  ]
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
