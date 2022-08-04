import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() icon: string;
  @Input() type: string = "text";
  @Input() hint: string = "";
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() readonly: boolean = false;
  @Input() errorMessages: { [key: string]: string } = {};
  @Input() fc: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
