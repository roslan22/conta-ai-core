import { IInsightDTO } from './IInsights';
import { ISentenceDTO } from './ISentence';

export interface IParagraphStyles {
  bold: boolean;
  underline: boolean;
  italic: boolean;
  strike: boolean;
  size: number;
}

export interface IParagraphDTO {
  paragraph_uuid: string;
  paragraph_style: IParagraphStyles;
  sentences: ISentenceDTO[];
  advice: string;
  insights: IInsightDTO[];
}

export type TParagraphsDTOMap = { [id: string]: IParagraphDTO };
