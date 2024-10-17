import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// declare var bootstrap: any; // Ensure Bootstrap is globally available

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  // Define properties to hold medicine data
  medicines = [
    {
      id: 1,
      name: "Benzonatate",
      price: 220,
      code: "MED001"
    },
    {
      id: 2,
      name: "Benadryl",
      price: 150,
      code: "MED002"
    },
    {
      id: 3,
      name: "Paracetamol",
      price: 10,
      code: "MED003"
    }
  ];
  
  injections = [
    {
      id: 1,
      name: "Benzonatate Injection",
      price: 30,
      code: "INJ001"
    },
    {
      id: 2,
      name: "Benadryl Injection",
      price: 80,
      code: "INJ002"
    },
    {
      id: 3,
      name: "Paracetamol Injection",
      price: 60,
      code: "INJ003"
    }
  ];
  
  Syrupts = [
    {
      id: 1,
      name: "Benzonatate Syrupt",
      price: 250,
      code: "SYP001"
    },
    {
      id: 2,
      name: "Dry Cough Syrupt",
      price: 180,
      code: "SYP002"
    },
    {
      id: 3,
      name: "Paracetamol Syrupt",
      price: 104,
      code: "SYP003"
    }
  ];
  
  PainReliefs = [
    {
      id: 1,
      name: "Benzonatate PainRelief",
      price: 20,
      code: "PRE001"
    },
    {
      id: 2,
      name: "Benadryl PainRelief",
      price: 50,
      code: "PRE002"
    },
    {
      id: 3,
      name: "Paracetamol PainRelief",
      price: 12,
      code: "PRE003"
    }
  ];

  selectedProduct: any = null;
  QuantityValue: number
  cartItems: any[] = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content: any, product: any) {
    this.selectedProduct = product;
    this.modalService.open(content);
  }

  addToCart(quantity: number) {
    this.QuantityValue = quantity;
    const cartItem = {
      price: this.selectedProduct.price,
      quantity: this.QuantityValue,
      name: this.selectedProduct.name,
      code: this.selectedProduct.code
    };
    this.cartItems.push(cartItem); 
    console.log(this.cartItems);
   
  }
}