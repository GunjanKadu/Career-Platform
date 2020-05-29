import { Component, OnInit, Input } from '@angular/core';
import { IState } from '../../redux/types/authenticationTypes';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  @Input("user") user: IState;
  constructor() { }

  ngOnInit(): void {
  }

}
