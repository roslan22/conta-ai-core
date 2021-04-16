import { IInsightDTO, IParagraphDTO, IParagraphStyles, ISentenceDTO } from '@api';
import { action, observable, runInAction } from 'mobx';
import { SentenceStore } from './Sentence.store';

export class ParagraphStore {
  @observable public uuid: string;
  @observable public styles: IParagraphStyles;
  @observable public sentences: SentenceStore[];
  @observable public advice: string;
  @observable public insights: IInsightDTO[];

  constructor(dto: IParagraphDTO) {
    runInAction(() => {
      this.uuid = dto.paragraph_uuid;
      this.styles = dto.paragraph_style;
      this.sentences = [];
      this.advice = dto.advice;
      this.insights = dto.insights;
    });

    this.addSentences(dto.sentences);
  }

  private addSentences(sentences: ISentenceDTO[]): void {
    sentences.forEach((s) => this.addSentence(s));
  }

  @action private addSentence(dto: ISentenceDTO): void {
    this.sentences.push(new SentenceStore(dto));
  }
}
