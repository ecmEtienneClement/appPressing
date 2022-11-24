import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

//TODO [NGRX DOC] INTERFACE NGRX POUR MON ETAT ROUTER
export interface IRouterState {
  url: string;
  params: Params;
  queryParams: Params;
}


//TODO [NGRX DOC] MODIFICATION DE MON ETAT NGRX
export class CustomRouterStateSerializer
  implements RouterStateSerializer<IRouterState>
{
  serialize(routerState: RouterStateSnapshot): IRouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
