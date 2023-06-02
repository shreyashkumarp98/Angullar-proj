import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";


export const aboutRoutes:Routes=[

    {path:'', component:AboutComponent}
]

export default RouterModule.forChild(aboutRoutes)