import { AppState, AppStateMutations } from './../interfaces/AppStateInterface';
import { InjectionKey } from "vue";

export const appStateKey = Symbol() as InjectionKey<AppState>;


export abstract class StoreKeys {
  static readonly appState = Symbol() as InjectionKey<AppState>;
  static readonly appStateMutations = Symbol() as InjectionKey<AppStateMutations>;
} 