import { ProfileAutonomousComponent } from './profile-autonomous/profile-autonomous.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsServicesComponent } from './cards-services/cards-services.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAutonomousComponent } from './register-autonomous/register-autonomous.component';
import { PerfilAnaComponent } from './perfil-ana/perfil-ana.component';
import { ChatAnaComponent } from './chat-ana/chat-ana.component';

const routes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch:'full'},
  {path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'services', component: CardsServicesComponent},
  {path: 'professionals', component: ProfessionalsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile-autonomous', component: ProfileAutonomousComponent},
  {path: 'register-autonomous', component: RegisterAutonomousComponent},
  {path: 'perfil-ana', component: PerfilAnaComponent},
  {path: 'chat-ana', component: ChatAnaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
