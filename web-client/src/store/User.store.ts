import { IUserDTO } from '@api';
import { action, observable, runInAction } from 'mobx';

export class UserStore {
  public uuid: string;
  @observable public email: string;
  @observable public userName: string;
  @observable public initialDataLoaded: boolean;

  constructor(dto: IUserDTO) {
    runInAction(() => {
      this.initialDataLoaded = false;
    });

    this.setData(dto);
  }

  @action private setData(dto: IUserDTO): void {
    this.uuid = dto.uuid;
    this.email = dto.email;
    this.userName = dto.username;
    this.initialDataLoaded = true;
  }
}
