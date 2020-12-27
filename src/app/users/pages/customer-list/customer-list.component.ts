import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  data = EXAMPLE_DATA;
  columns = ['name','surname','phone','customerAction'];

  constructor() { }

  ngOnInit(): void {
  }

}


export interface UserListTableItem {
  id: number;
  name: string;
  surname: string;
  phone: string;
  position: string
  section: string
  identifier: string;
}


const EXAMPLE_DATA: UserListTableItem[] = [
  { id: 1, name: "Ania", surname: "Polak", phone: "+ 48 508 812 984", position: "rekrutacja", section: "HR", identifier: 'A5B2C323' },
  { id: 2, name: "Hania", surname: "Kowalska", phone: "+ 48 508 221 121", position: "programista", section: "HR", identifier: 'A322C4D4' },
  { id: 3, name: "Marek", surname: "Kowalski", phone: "+ 48 666 311 984", position: "programista", section: "programista", identifier: 'A1B2C3D4' },
  { id: 4, name: "Tomek", surname: "Nowak", phone: "+ 48 508 686 984", position: "rekrutacja", section: "HR", identifier: 'A9B2C3D4' },
  { id: 5, name: "Wacław", surname: "Marek", phone: "+ 48 508 551 984", position: "programista", section: "programista", identifier: 'A1B2224' },
  { id: 6, name: "Cezary", surname: "Nowakowski", phone: "+ 48 543 812 222", position: "rekrutacja", section: "HR", identifier: 'A8B2C354' },
  { id: 7, name: "Magda", surname: "Piekna", phone: "+ 48 508 590 222", position: "rekrutacja", section: "HR", identifier: 'A7B5C3D4' },
  { id: 8, name: "Kasia", surname: "Asia", phone: "+ 48 508 688 111", position: "rekrutacja", section: "HR", identifier: 'A7B2C364' },
  { id: 9, name: "Ania", surname: "Polak", phone: "+ 48 508 812 984", position: "rekrutacja", section: "HR", identifier: 'A5B2C323' },
  { id: 10, name: "Hania", surname: "Kowalska", phone: "+ 48 508 221 121", position: "programista", section: "HR", identifier: 'A322C4D4' },
  { id: 11, name: "Marek", surname: "Kowalski", phone: "+ 48 666 311 984", position: "programista", section: "programista", identifier: 'A1B2C3D4' },
  { id: 12, name: "Tomek", surname: "Nowak", phone: "+ 48 508 686 984", position: "rekrutacja", section: "HR", identifier: 'A9B2C3D4' },
  { id: 13, name: "Wacław", surname: "Marek", phone: "+ 48 508 551 984", position: "programista", section: "programista", identifier: 'A1B2224' },
  { id: 14, name: "Cezary", surname: "Nowakowski", phone: "+ 48 543 812 222", position: "rekrutacja", section: "HR", identifier: 'A8B2C354' },
  { id: 15, name: "Magda", surname: "Piekna", phone: "+ 48 508 590 222", position: "rekrutacja", section: "HR", identifier: 'A7B5C3D4' },
  { id: 16, name: "Kasia", surname: "Asia", phone: "+ 48 508 688 111", position: "rekrutacja", section: "HR", identifier: 'A7B2C364' },
  { id: 17, name: "Ania", surname: "Polak", phone: "+ 48 508 812 984", position: "rekrutacja", section: "HR", identifier: 'A5B2C323' },
  { id: 18, name: "Hania", surname: "Kowalska", phone: "+ 48 508 221 121", position: "programista", section: "HR", identifier: 'A322C4D4' },
  { id: 19, name: "Marek", surname: "Kowalski", phone: "+ 48 666 311 984", position: "programista", section: "programista", identifier: 'A1B2C3D4' },
  { id: 20, name: "Tomek", surname: "Nowak", phone: "+ 48 508 686 984", position: "rekrutacja", section: "HR", identifier: 'A9B2C3D4' },
  { id: 5, name: "Wacław", surname: "Marek", phone: "+ 48 508 551 984", position: "programista", section: "programista", identifier: 'A1B2224' },
  { id: 6, name: "Cezary", surname: "Nowakowski", phone: "+ 48 543 812 222", position: "rekrutacja", section: "HR", identifier: 'A8B2C354' },
  { id: 7, name: "Magda", surname: "Piekna", phone: "+ 48 508 590 222", position: "rekrutacja", section: "HR", identifier: 'A7B5C3D4' },
  { id: 8, name: "Kasia", surname: "Asia", phone: "+ 48 508 688 111", position: "rekrutacja", section: "HR", identifier: 'A7B2C364' },
  { id: 1, name: "Ania", surname: "Polak", phone: "+ 48 508 812 984", position: "rekrutacja", section: "HR", identifier: 'A5B2C323' },
  { id: 2, name: "Hania", surname: "Kowalska", phone: "+ 48 508 221 121", position: "programista", section: "HR", identifier: 'A322C4D4' },
  { id: 3, name: "Marek", surname: "Kowalski", phone: "+ 48 666 311 984", position: "programista", section: "programista", identifier: 'A1B2C3D4' },
  { id: 4, name: "Tomek", surname: "Nowak", phone: "+ 48 508 686 984", position: "rekrutacja", section: "HR", identifier: 'A9B2C3D4' },
  { id: 5, name: "Wacław", surname: "Marek", phone: "+ 48 508 551 984", position: "programista", section: "programista", identifier: 'A1B2224' },
  { id: 6, name: "Cezary", surname: "Nowakowski", phone: "+ 48 543 812 222", position: "rekrutacja", section: "HR", identifier: 'A8B2C354' },
  { id: 7, name: "Magda", surname: "Piekna", phone: "+ 48 508 590 222", position: "rekrutacja", section: "HR", identifier: 'A7B5C3D4' },
  { id: 8, name: "Kasia", surname: "Asia", phone: "+ 48 508 688 111", position: "rekrutacja", section: "HR", identifier: 'A7B2C364' },
  { id: 1, name: "Ania", surname: "Polak", phone: "+ 48 508 812 984", position: "rekrutacja", section: "HR", identifier: 'A5B2C323' },
  { id: 2, name: "Hania", surname: "Kowalska", phone: "+ 48 508 221 121", position: "programista", section: "HR", identifier: 'A322C4D4' },
  { id: 3, name: "Marek", surname: "Kowalski", phone: "+ 48 666 311 984", position: "programista", section: "programista", identifier: 'A1B2C3D4' },
  { id: 4, name: "Tomek", surname: "Nowak", phone: "+ 48 508 686 984", position: "rekrutacja", section: "HR", identifier: 'A9B2C3D4' },
  { id: 5, name: "Wacław", surname: "Marek", phone: "+ 48 508 551 984", position: "programista", section: "programista", identifier: 'A1B2224' },
  { id: 6, name: "Cezary", surname: "Nowakowski", phone: "+ 48 543 812 222", position: "rekrutacja", section: "HR", identifier: 'A8B2C354' },
  { id: 7, name: "Magda", surname: "Piekna", phone: "+ 48 508 590 222", position: "rekrutacja", section: "HR", identifier: 'A7B5C3D4' },
  { id: 8, name: "Kasia", surname: "Asia", phone: "+ 48 508 688 111", position: "rekrutacja", section: "HR", identifier: 'A7B2C364' },
];
