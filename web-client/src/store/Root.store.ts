import { observable, runInAction } from 'mobx';
import { ContractsStore } from './Contracts.store';
import { ParagraphsStore } from './Paragraphs.store';
import { UIStore } from './UIStore';
import { UsersStore } from './Users.store';
import { IStores } from './utils/IStores';

export class RootStore implements IStores {
  @observable public contractsStore: ContractsStore;
  @observable public uiStore: UIStore;
  @observable public usersStore: UsersStore;
  @observable public paragraphsStore: ParagraphsStore;

  constructor() {
    runInAction(() => {
      this.uiStore = new UIStore();
      this.contractsStore = new ContractsStore(this.uiStore);
      this.usersStore = new UsersStore(this.uiStore);
      this.paragraphsStore = new ParagraphsStore(this.uiStore);
    });
  }
}
