import { Component, OnInit } from '@angular/core';
import{Iproduct} from './products'

@Component({
  selector: 'products-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{

 pageTitle: String='Product List';
 imgWidth:number=70;
 imgMargin:number=2;
 showImage:boolean = true;

_listFilter:string;
get listFilter():string{
  return this._listFilter;
}
set listFilter(value:string){
   this._listFilter=value;
   this.filteredProducts=this.listFilter? this.performFilter(this.listFilter) : this.products;
}

 filteredProducts:Iproduct[];
 products:Iproduct[]=[
   {
     "productId":2,
     "productName":"Vegitarian Salad",
     "productCode":"PVS-0001",
     "releaseDate":"March 18,2018",
     "description":" Healthy vegitarain Salad specially desined for weight loss ",
     "price":119.99,
     "starRating":4.2,
     "imageUrl":"https://toriavey.com/images/2012/05/Grilled-Vegetable-Salad-Main.jpg"
   },{
    "productId":5,
    "productName":"Chicken Salad",
    "productCode":"PNS-0100",
    "releaseDate":"June 18,2018",
    "description":" Healthy Chicken Salad specially desined for weight loss ",
    "price":149.99,
    "starRating":4.5,
    "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_UJEkyqueLX_YQPKWWNbRiA8QsmdN5SC64b71HuTd7290aTL"
   }
 ];
construstor(){
  this.filteredProducts = this.products;
  this._listFilter = 'sala';
}
 toggleImage():void{
   this.showImage= !this.showImage;
 }
 performFilter(filterBy: string): Iproduct[] {
  filterBy=filterBy.toLowerCase();

  return this.products.filter((IndividualProduct:Iproduct)=>
    IndividualProduct.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
}
 ngOnInit():void{
 }
}
