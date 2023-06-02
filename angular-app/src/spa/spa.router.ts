import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./pages/pagenotfound.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactListComponent } from "./pages/contacts/contactlist.component";
import { ShowComponent } from "./pages/show.component";
import { AuthGuard } from "./services/guards/auth.guard";
import { LoadGuard } from "./services/guards/load.guard";


const customRoutes:Routes=[
    {path: '', component: LoginComponent},
    {path: 'home', 
    component: HomeComponent},
    {path: 'contacts', canActivate:[AuthGuard], component: ContactListComponent},
    {path: 'show/:selected', component:ShowComponent },
    {path: 'about', canLoad:[LoadGuard] ,loadChildren: () => import('./about/about.module')
                    .then(m=>m.AboutModule)},
    {path:'**', component: PageNotFoundComponent},
    
]


export const SPARouterModule=RouterModule.forRoot(customRoutes)