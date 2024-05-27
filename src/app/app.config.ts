import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), BrowserModule, CommonModule]
};
