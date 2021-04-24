import Dexie from "dexie";
import Fuse from "fuse.js";
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
    keyword: string = "",
    tags: Array<any> = [],
    categories: Array<any> = [],
    name?: string,
    fileType?: string
  ): Promise<Array<Document>> {
    // TODO: Maybe query db high level before doing Fuze/Fuzzy search

    const docs = await this.db.documents.toArray();

    if (!keyword) return docs;

    const options = {
      includeScore: true,
      keys: ["name", "extractedText", "tags", "categories"],
    };
    const fuse = new Fuse(docs, options);
    const result = fuse.search<Document>(keyword);
    return result.map((obj) => obj.item);
  }
}

// Single instance
const documentService = new DocumentService();

export { documentService };
