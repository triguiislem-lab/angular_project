import { Component ,ChangeDetectionStrategy} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberComponent {
  dataSource : any = []=[
    {
      id:1, 
      cin:"12345678",
      name:"John Doe",
      type:"teacher",
      createdAt:"12/12",

    },{
      id:2, 
      cin:"678",
      name:"joey",
      type:"data",
      createdAt:"12/11",
    }
  ]
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','createdAt','actions'];
  

}
