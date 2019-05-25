import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contador: number = 0;

  @Output() onSum: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.contador += 1;
  }

  onClick(){
     this.contador += 1;
     this.onSum.emit(this.contador);
  }

}
