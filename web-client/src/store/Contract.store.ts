import { IContractDTO } from '@api';
import { observable, runInAction } from 'mobx';

export class ContractStore {
  @observable public uuid: string;
  @observable public dateCreated: string;
  @observable public fileName: string;
  @observable public isTemplate: boolean;
  @observable public name: string;
  @observable public about: string;
  @observable public amountOfIssues: number;
  @observable public amountOfNeutral: number;
  @observable public amountOfRight: number;
  @observable public initialDataLoaded: boolean;

  constructor(dto: IContractDTO) {
    runInAction(() => {
      this.uuid = dto.uuid;
      this.fileName = dto.filename;
      this.isTemplate = dto.is_template;
      this.dateCreated = dto.date_created;
      this.name = 'Contract name';
      this.about =
        'Here will be small text about contract in general. Maybe could be some highlights etc. Here will be small text about contract in general. Maybe could be some highlights etc.';
      this.amountOfIssues = 30;
      this.amountOfNeutral = 80;
      this.amountOfRight = 60;
      this.initialDataLoaded = false;
    });
  }
}
