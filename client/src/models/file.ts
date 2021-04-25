export class File {
  _id?: string; // Backend ID, if exists, means its background synced
  id?: string; // Frontend ID (indexeddb), this should always exist
  fileName?: string;
  fileType?: string;
  fileSize?: number;
  extractedText?: string;
  fileBlob?: string | ArrayBuffer | null;
  dateCreated?: string;

  patientId?: string;

  tags?: string;
  category?: string;
}
