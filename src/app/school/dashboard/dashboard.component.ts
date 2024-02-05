import { Component, OnInit } from '@angular/core';
import { RootService } from '../../root.service';
import { DashboardService } from './dashboard.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{


  posts: Post[] = []

  constructor(private rootService: RootService, private dashboardService: DashboardService){}

  ngOnInit(): void {
    this.rootService.currentComponent = 'DASHBOARD'
    this.getContent()
  }

  getContent(){
    this.dashboardService.getAllContent().subscribe({
      next: (response) =>{
        response.forEach(post => {
          this.posts.push(post)
        })
        this.posts.forEach(post => {
          this.dashboardService.loadImageForDashboardContent(post.post_id, post.category).subscribe(image => {
            post.post_image = image;
          })

        })
      }, error: () => {

      }})
  }

}
