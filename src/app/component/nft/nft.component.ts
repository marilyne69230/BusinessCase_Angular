import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { NftInterface } from 'src/app/interface/nft.interface';
import { NftService } from '../../service/nft.service';
import { CategoryInterface } from '../../interface/category.interface';
import { CategoryService } from 'src/app/service/category.service';
import { UserInterface } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  nft!: NftInterface;
  nftList: NftInterface[] = [];

  user: UserInterface | undefined;
  userList: UserInterface[] = [];

  category!: CategoryInterface;
  categoryList: CategoryInterface[] = [];

  constructor(
    private nftService: NftService,
    private userService: UserService,
    private categoryService: CategoryService
    ) {}

  ngOnInit(): void {
    this.nftService.getAllNfts().subscribe(data => {
      this.nftList = data;
      console.log(this.nftList)
    })
    this.categoryService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    })
    this.oneUser(70);
  }

  // Récuperer 1 nft
  oneNft(id:number){
    this.nftService.getOneNft(id).subscribe(data => {
      this.nft = data;
    })
  }

  // FONCTION POUR LES LIKES
  onAddLike(id:number) {
    this.nftService.likeNft(id).subscribe(data => {
      this.nft = data;
    })
    // récupérer tous les nfts une fois likés
    this.nftService.getAllNfts().subscribe(data => {
      this.nftList = data;
    })
  }

  // Récupérer 1 user
  oneUser(id:number){
    this.userService.getOneUser(id).subscribe(data => {
      this.user = data;
      return this.user;
    })
  }

  // Récupérer tous les utilisateurs
  allUser(){
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    })
  }

  // Fonction pour afficher les nfts d'une catégorie
  onChange(val:any){
    console.log(val.target.value);
  }

  afficheDonnes() {
    this.categoryService.getOneCategory
  }

}
