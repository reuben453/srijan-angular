import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

// import { AuthComponent }    from './auth.component';
import { LoginComponent }    from './login.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginComponent}
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
