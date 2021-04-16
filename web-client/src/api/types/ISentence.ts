export interface ISentenceStyles {
  bold: boolean;
  underline: boolean;
  italic: boolean;
  strike: boolean;
  size: number;
}

export interface ISentenceDTO {
  uuid: string;
  text: string;
  style: ISentenceStyles;
}
