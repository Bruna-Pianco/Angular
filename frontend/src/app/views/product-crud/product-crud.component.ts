import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  /*atributo = "teste"*/

  constructor(private router: Router) { }

  ngOnInit(): void {
  

  }
   
   navegateToProductCreate(): void{
     this.router.navigate(['/products/create'])
   }

  /*FazerAlgo(): void {
    console.log("Fazendo algo!")
  }*/
}
