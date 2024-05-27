import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[] | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.userService.getUser(username).subscribe({
        next: (user) => {
          this.user = user;
          this.loadRepos(username);
        },
        error: (error) => {
          console.error('Erro ao buscar usuário:', error);
        }
      });
    }
  }

  loadRepos(username: string): void {
    this.userService.getUserRepos(username).subscribe({
      next: (repos) => {
        this.repos = repos;
      },
      error: (error) => {
        console.error('Erro ao buscar repositórios:', error);
      }
    });
  }
}