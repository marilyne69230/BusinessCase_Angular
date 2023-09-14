import { Component, OnInit } from '@angular/core';
import { EthService } from '../../service/eth.service';
import { EthInterface } from 'src/app/interface/eth.interface';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent implements OnInit {

  ethList: EthInterface[] = [];

  constructor(private service: EthService) {}

  ngOnInit(): void {
    this.service.getAllEths().subscribe(data => {
      this.ethList = data;
    })
  }
}
