import { getContractsRequest, IContractDTO } from '@api';
import { action, observable, runInAction } from 'mobx';
import { ContractStore } from './Contract.store';
import { UIStore } from './UIStore';

export class ContractsStore {
  @observable public contracts: ContractStore[];
  @observable public initialDataLoaded: boolean;
  private uiStore: UIStore;

  constructor(uiStore: UIStore) {
    runInAction(() => {
      this.contracts = [];
      this.initialDataLoaded = false;
      this.uiStore = uiStore;
    });
  }

  @action public async init(userUuid: string): Promise<void> {
    try {
      const requestResult = await getContractsRequest(userUuid);
      this.setData(requestResult.data.contracts);
    } catch (error) {
      this.uiStore.addError(error.message);
    }
  }

  @action private setData(dto: IContractDTO[]): void {
    this.contracts = [];
    dto.forEach((c) => this.addContract(c));
    this.initialDataLoaded = true;
  }

  @action private addContract(dto: IContractDTO): void {
    this.contracts.push(new ContractStore(dto));
  }

  public getContract(uuid: string): ContractStore | null {
    const store = this.contracts.find((s) => s.uuid === uuid);
    return store ? store : null;
  }
}
