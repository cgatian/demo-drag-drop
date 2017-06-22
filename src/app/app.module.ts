import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Components
import { BackpackComponent } from './components/backpack/backpack.component';
import { PlayerComponent } from './components/player/player.component';

// Services
import { PlayerService } from 'app/components/services/player.service';

// Directives
import { DragDirective } from './directives/drag.directive';
import { DropDirective } from './directives/drop.directive';

// import { EnhancementPackModule } from './enhancement-pack/enhancement-pack.module';

@NgModule({
  declarations: [
    AppComponent,
    BackpackComponent,
    PlayerComponent,
    DragDirective,
    DropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // EnhancementPackModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
