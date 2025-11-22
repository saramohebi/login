import { Routes } from '@angular/router';
import { PublicTemplate } from './+public/public-template/public-template';
import { Aboutmepage } from './+public/aboutmepage/aboutmepage';
import { Educationpage } from './+public/educationpage/educationpage';
import { Skillspage } from './+public/skillspage/skillspage';
import { Languagepage } from './+public/languagepage/languagepage';
import { Careerhistorypage } from './+public/careerhistorypage/careerhistorypage';
import { Officialspage } from './+public/officialspage/officialspage';
import { Loginpage } from './+public/loginpage/loginpage';
import { Contactpage } from './+public/contactpage/contactpage';
import { PrivateTemplate } from './+private/private-template/private-template';
import { Dashboard } from './+private/dashboard/dashboard';
import { Resumemanagementpage } from './+private/resumemanagementpage/resumemanagementpage';
import { Examplepage } from './+private/examplepage/examplepage';
import { Messageboxpage } from './+private/messageboxpage/messageboxpage';

export const routes: Routes = [
    
    {path:'public',component:PublicTemplate,children:[
        {path:'aboutme',component:Aboutmepage},
        {path:'education',component:Educationpage},
        {path:'skills',component:Skillspage},
        {path:'language',component:Languagepage},
        {path:'careerhistory',component:Careerhistorypage},
        {path:'officials',component:Officialspage},
        {path:'login',component:Loginpage},
        {path:'contactus',component:Contactpage},
        {path:'',redirectTo:'aboutme',pathMatch:'full'},
        {path:'**',redirectTo:'aboutme'},
    ]},
    {path:'private',component:PrivateTemplate,children:[
        {path:'dashboard',component:Dashboard},
        {path:'resumemanagement',component:Resumemanagementpage},
        {path:'example',component:Examplepage},
        {path:'messages',component:Messageboxpage},
        {path:'',redirectTo:'dashboard',pathMatch:'full'},
        {path:'**',redirectTo:'/error',pathMatch:'full'},
    ]},
    {path:'error',component:Aboutmepage},
    {path:'',redirectTo:'public',pathMatch:'full'},
    {path:'**',redirectTo:'public'}
];
