import { getUsersRequest, IUserDTO } from '@api';
import { action, observable, runInAction } from 'mobx';
import { UIStore } from './UIStore';
import { UserStore } from './User.store';

export class UsersStore {
  @observable public users: UserStore[];
  @observable public initialDataLoaded: boolean;
  private uiStore: UIStore;

  constructor(uiStore: UIStore) {
    runInAction(() => {
      this.users = [];
      this.initialDataLoaded = false;
      this.uiStore = uiStore;
    });
  }

  @action public async init(): Promise<void> {
    try {
      const requestResult = await getUsersRequest();
      const requestData = requestResult.data;
      this.setData(requestData.users);
    } catch (error) {
      this.uiStore.addError(error.message);
    }
  }

  @action private setData(dto: IUserDTO[]): void {
    this.users = [];
    dto.forEach((u: IUserDTO) => this.addUser(u));
    this.initialDataLoaded = true;
  }

  @action private addUser(dto: IUserDTO): void {
    this.users.push(new UserStore(dto));
  }

  public getUser(uuid: string): UserStore | null {
    const store = this.users.find((u) => u.uuid === uuid);
    return store ? store : null;
  }
}
