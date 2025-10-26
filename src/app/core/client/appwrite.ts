import { Client, Databases, TablesDB } from 'appwrite'
import { environment } from '../../../environments/environment'

export const AppwriteClient = new Client()
    .setEndpoint(environment.appwriteEndpoint)
    .setProject(environment.appwriteProjectId)
    .setDevKey(environment.appwriteApiKey)

export const AppwriteTableClientConst = new TablesDB(AppwriteClient)

export class AppwriteTableClient<T> {
    private tableClient = new Databases(AppwriteClient)
    private databaseId = '68fc777b00005ac6fa2d'

    constructor(private tableId: string) {}

    async createDocument(data: T) {
        return this.tableClient.createDocument(
            this.databaseId,
            this.tableId,
            crypto.randomUUID(),
            data as Record<string, unknown>,
        )
    }

    async getDocuments() {
        const response = await this.tableClient.listDocuments(
            this.databaseId,
            this.tableId,
        )
        return response.documents as T[]
    }

    async getDocument(documentId: string) {
        const response = await this.tableClient.getDocument(
            this.databaseId,
            this.tableId,
            documentId,
        )
        return response as T
    }
}
