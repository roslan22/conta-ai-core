import { TParagraphsDTOMap } from './IParagraphs';

export interface IContractDTO {
  uuid: string;
  date_created: string;
  filename: string;
  is_template: boolean;
  paragraphs: TParagraphsDTOMap;
}
