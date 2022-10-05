import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Shared_Classes&types/category';
import { DiscountOffers } from '../Shared_Classes&types/discountOffers';
import { IProduct } from '../Shared_Classes&types/product'
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form= new FormGroup({
    name:new FormControl(""),
    price:new FormControl(""),
    img:new FormControl("")
  })

  Discount: DiscountOffers = DiscountOffers.three

  StoreName: string = "Online Store"

  StoreLogo: string = "../../assets/logo.jpg"

  ProductList: IProduct[] = []

  CategoryList: ICategory[] = []

  ClientName: string = ""

  IsPurshased: boolean = true

  constructor() {
    this.ProductList = [
      {
        id: 1,
        name: "IPhone",
        quantity: 33,
        price: 14000,
        img: "../../assets/61l9ppRIiqL._AC_SL1500_.jpg"
      },
      {
        id: 2,
        name: "Samsong",
        quantity: 4500,
        price: 6000,
        img: "../../assets/51QaC1yXdhL._AC_SL1000_.jpg"
      },
      {
        id: 3,
        name: "IPhone",
        quantity: 30,
        price: 13000,
        img: "../../assets/6135J1TQCuL._AC_SL1500_.jpg"
      },
      {
        id: 4,
        name: "IPhone",
        quantity: 33,
        price: 16000,
        img: "./../assets/iPhone_13_Pro_ALP_1.webp"
      }
    ]

    this.CategoryList = [
      {
        id: 11,
        name: "IPhone"
      },
      {
        id: 22,
        name: "IPad"
      },
      {
        id: 33,
        name: "Tablete"
      },
      {
        id: 44,
        name: "Devices"
      }
    ]
  }

  ngOnInit(): void {
  }


  ToShow = false;

  Show() {
    if (this.Discount == DiscountOffers.one)
      this.ToShow = false
    else
      this.ToShow = true

  }

  handelClick(val:any){
    console.log(val)
    this.ClientName = val;
  }

}
