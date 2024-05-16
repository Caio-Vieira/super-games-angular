
import { Component,HostBinding } from '@angular/core';
import { ChildrenOutletContexts} from '@angular/router';
import { slideInAnimation } from '../../animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'supergames';
  @HostBinding('@.disabled')
  public animationsDisabled: boolean = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }


}
