import { AppState, AppStateMutations } from './../interfaces/AppStateInterface';
import { inject } from "vue";
import { StoreKeys } from '../InjectionKeys/keys';

export const useAppState = () => {

  const appState = inject<AppState>(StoreKeys.appState, {} as AppState)  ;
  const appMutations = inject<AppStateMutations>(StoreKeys.appStateMutations, {} as AppStateMutations)  ;

  return {
    appState,
    appMutations
  }
}