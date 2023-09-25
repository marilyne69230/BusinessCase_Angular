import { Component, OnInit } from '@angular/core';
import { NftInterface } from 'src/app/interface/nft.interface';
import { NftService } from '../../service/nft.service';
import { CategoryInterface } from '../../interface/category.interface';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  nftList: NftInterface[] = [];

  categoryList: CategoryInterface[] = [];

  constructor(
    private nftService: NftService,
    private categoryService: CategoryService
    ) {}

  ngOnInit(): void {
    this.nftService.getAllNfts().subscribe(data => {
      this.nftList = data;
    })
    this.categoryService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    })
    console.log(this.nftList);
  }

  // onSelected(category:string){
  //   if(category == "Histoire"){
  //     this.categoryList = this.nftList
  //   }
  }
