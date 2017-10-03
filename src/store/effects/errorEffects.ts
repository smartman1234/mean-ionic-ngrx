/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   14-04-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 03-10-2017
*/

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from "@ngrx/effects";

import * as Err from '../actions/err.actions';
import * as Auth from '../../pages/login/store/auth.actions';
import * as Items from '../../pages/items/store/items.actions';
import { AlertService } from "../../providers/alert-service/alert-service";

@Injectable()
export class ErrorEffects {

  constructor(
    private action$: Actions,
    private _alert: AlertService
  ) {
  }

  @Effect() handleErrorAction$ = this.action$
    .ofType(
      Auth.AuthActions.ERROR,
      Items.ItemsActions.ERROR
    )
    .map<Action, any>(toPayload)
    .switchMap(err => Observable.of(new Err.ErrorDisplayAction(err)))


  @Effect() hdisplayErrorAction$ = this.action$
      .ofType(Err.ErrorActions.ERROR_DISPLAY)
      .map<Action, any>(toPayload)
      .switchMap((payload:Observable<any>) => this._alert.doDisplayAlert(payload))
      .switchMap((payload:Observable<any>)=>
        (payload)
          ? Observable.of(new Err.ErrorDisplaySuccessAction())
          : Observable.of(new Err.ErrorAction())
      )
      .catch(err=> Observable.of(Err.ErrorActions.ERROR_DISPLAY_FAILED))
}
