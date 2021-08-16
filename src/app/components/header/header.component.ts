import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Today's Todo List";
  showAddTask:boolean = false;
  subscription: Subscription;


  constructor(private router:Router,private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask=value));
   }

  ngOnInit(): void {
  }

  hasRoute(route:string){
    return this.router.url === route;
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  
}
