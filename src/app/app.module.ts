import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { CardsServicesComponent } from './cards-services/cards-services.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterAutonomousComponent } from './register-autonomous/register-autonomous.component';
import { ProfileAutonomousComponent } from './profile-autonomous/profile-autonomous.component';
import { PerfilAnaComponent } from './perfil-ana/perfil-ana.component';
import { ChatAnaComponent } from './chat-ana/chat-ana.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    ProfileComponent,
    CardsServicesComponent,
    ProfessionalsComponent,
    RegisterComponent,
    LoginComponent,
    RegisterAutonomousComponent,
    ProfileAutonomousComponent,
    PerfilAnaComponent,
    ChatAnaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
