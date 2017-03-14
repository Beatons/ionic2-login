import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { FrontPage } from '../pages/front/front';
import { AuthService } from '../providers/auth';
import { NotificationPage } from '../pages/notification/notification';
import { ChatPage } from '../pages/chat/chat';
import { CalendarPage } from '../pages/calendar/calendar';
import { SearchPage } from '../pages/search/search';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    FrontPage,
    NotificationPage,
    ChatPage,
    CalendarPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    FrontPage,
    NotificationPage,
    ChatPage,
    CalendarPage,
    SearchPage
  ],
  providers: [AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}