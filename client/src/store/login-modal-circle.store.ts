import {observable} from 'mobx';

export class LoginModalCircleStore {
  @observable
  isDeploy: boolean = false;

  @observable
  bgColor: string = 'transparent';
}
