import { Component, OnInit } from '@angular/core';
import { NftInterface } from 'src/app/interface/nft.interface';
import { NftService } from '../../service/nft.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  nftList: NftInterface[] = [];

  constructor(private service: NftService) {}

  ngOnInit(): void {
    this.service.getAllNfts().subscribe(data => {
      this.nftList = data;
    })
  }
}
