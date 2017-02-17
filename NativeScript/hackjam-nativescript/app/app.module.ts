import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {AppComponent} from "./app.component";
import {RoomListComponent} from "./room.list.component";
import ChatService from "./chat.service";
import {NativeScriptRouterModule, NativeScriptFormsModule} from "nativescript-angular";
import {ProfileComponent} from "./profile.component";
import {MessagesComponent} from "./messages.component";


export const routes = [
  {path: "", component: RoomListComponent},
  {path: "profile", component: ProfileComponent},
  {path: "messages/:id", component: MessagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    ProfileComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ChatService]
})
export class AppModule {
}
