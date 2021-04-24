export class File {
  id?: string;
  fileName?: string;
  fileType?: string;
  fileSize?: number;
  extractedText?: string;
  fileBlob?: string | ArrayBuffer | null;
  dateCreated?: string;

  tags?: string;
  category?: string;
}
