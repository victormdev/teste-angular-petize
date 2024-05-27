import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile/:username', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }