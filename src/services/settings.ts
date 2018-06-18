export class SettingsService {

  private altBackgroundState: boolean = false;

  isAltBackgroundStatus(): boolean {
    return this.altBackgroundState;
  }

  setaAltBackgroundStatus(state: boolean) {
    return this.altBackgroundState = state;
  }

}
