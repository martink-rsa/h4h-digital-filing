export class File {
  id?: string;
  name?: string;
  fileType?: string;
  size?: number;
  extractedText?: string;
  fileBlob?: string | ArrayBuffer | null;

  tags: Array<any> = []; // TODO: Define tags
  categories: Array<any> = []; // TODO: Define categories
}
