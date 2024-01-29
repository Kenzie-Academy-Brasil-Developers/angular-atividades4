import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

export const routes: Routes = [
    {
        path: "", component: HomePageComponent
    }, 
    {
        path: "post/:id", component: PostPageComponent
    }
];
