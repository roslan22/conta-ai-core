import { getParagraphsRequest, IParagraphDTO } from '@api';
import { action, observable, runInAction } from 'mobx';
import { ParagraphStore } from './Paragraph.store';
import { UIStore } from './UIStore';

export class ParagraphsStore {
  @observable public paragraphs: ParagraphStore[];
  @observable public initialDataLoaded: boolean;
  private uiStore: UIStore;

  constructor(uiStore: UIStore) {
    runInAction(() => {
      this.paragraphs = [];
      this.initialDataLoaded = false;
      this.uiStore = uiStore;
    });
  }

  @action public async init(contractUuid: string): Promise<void> {
    try {
      const requestResult = await getParagraphsRequest(contractUuid);
      const requestData = requestResult.data;
      this.setData(requestData.paragraphs);
    } catch (error) {
      this.uiStore.addError(error.message);
    }
  }

  @action private setData(dto: IParagraphDTO[]): void {
    this.paragraphs = [];
    dto.forEach((p: IParagraphDTO) => this.addParagraph(p));
    this.initialDataLoaded = true;
  }

  @action private addParagraph(dto: IParagraphDTO): void {
    this.paragraphs.push(new ParagraphStore(dto));
  }
}
