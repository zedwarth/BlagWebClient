import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './reducers/post.reducer';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    StoreModule.forFeature('post', fromPost.reducer)
  ],
  declarations: []
})
export class ContentModule { }
