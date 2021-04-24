import Dexie from "dexie";
import { Document } from "../models/document";

class DocumentService {
  db: any = new Dexie("h4h-digital-filing");

  constructor() {
    this.db.version(1).stores({
      documents:
        "++id, name, fileType, size, extractedText, fileBlob, tags, categories",
    });
  }

  addDocument(document: Document) {
    this.db.documents.add(document);
  }

  async findDocuments(
    tags: Array<any> = [],
    categories: Array<any> = [],
    name?: string,
    fileType?: string
  ): Promise<Array<Document>> {
    // TODO: Maybe query db high level before doing Fuze/Fuzzy search

    const docs = await this.db.documents.toArray();

    /*.each((doc: Document) => {
      return {
        id: doc.id,
        name: doc.name,
        fileType: doc.fileType,
        size: doc.size,
        tags: doc.tags,
        categories: doc.categories,
      };
    });*/
    return docs;
  }
}

// Single instance
const documentService = new DocumentService();

export { documentService };
