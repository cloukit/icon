import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitStoryModule, CloukitStoryService } from '@cloukit/story';
import { CloukitIconModule } from '../index';
import { DemoComponent } from './demo.component';
import demoStoriesSource from '../assets/demoStoriesSource.json';
import { Story00Component } from './stories/story-00-single-layer-icons';
import { Story01Component } from './stories/story-01-different-sizes';
import { Story02Component } from './stories/story-02-stacked-multi-layer-icons';
import { Story03Component } from './stories/story-03-masked-multi-layer-icons';
import { Story04Component } from './stories/story-04-transformed-icons';

@NgModule({
  declarations: [
    DemoComponent,
    Story00Component,
    Story01Component,
    Story02Component,
    Story03Component,
    Story04Component,
  ],
  exports: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    CloukitIconModule,
    CloukitStoryModule,
  ],
  providers: [ ],
  bootstrap: [ ],
})
export class DemoModule {
  constructor(private cloukitStoryService: CloukitStoryService) {
    //
    // REGISTER STORY SOURCES
    //
    const keys = Object.keys(demoStoriesSource);
    for (let i=0; i<keys.length; i++) {
      this.cloukitStoryService.addSource(keys[i], demoStoriesSource[keys[i]]);
    }
  }
}
