import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';

const routes: Routes = [
  {path: "profile", component: UserProfileComponent},
  {path: "settings", component: UserSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
