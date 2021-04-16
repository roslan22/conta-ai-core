import { ISentenceDTO, ISentenceStyles } from '@api';
import { observable, runInAction } from 'mobx';

export class SentenceStore {
  @observable public uuid: string;
  @observable public text: string;
  @observable public styles: ISentenceStyles;

  constructor(dto: ISentenceDTO) {
    runInAction(() => {
      this.uuid = dto.uuid;
      this.text = dto.text;
      this.styles = dto.style;
    });
  }
}
