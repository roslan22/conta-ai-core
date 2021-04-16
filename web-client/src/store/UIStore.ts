import { action, observable, runInAction } from 'mobx';

export class UIStore {
  @observable public requestErrors: string[];
  @observable public paragraphsRefs: React.RefObject<HTMLDivElement>[];
  @observable public insightsRefs: React.RefObject<HTMLDivElement>[];

  constructor() {
    runInAction(() => {
      this.requestErrors = [];
      this.paragraphsRefs = [];
      this.insightsRefs = [];
    });
  }

  @action public addError(errorText: string): void {
    this.requestErrors.push(errorText);
  }

  @action public removeError(indexToRemove: number): void {
    this.requestErrors = this.requestErrors.slice().splice(indexToRemove, 1);
  }

  @action public addParagraphRef(ref: React.RefObject<HTMLDivElement>): void {
    this.paragraphsRefs.push(ref);
  }

  @action public addInsightRef(ref: React.RefObject<HTMLDivElement>): void {
    this.insightsRefs.push(ref);
  }
}
