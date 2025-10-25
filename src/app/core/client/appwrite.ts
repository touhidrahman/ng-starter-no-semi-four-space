import { Client } from 'appwrite'
import { environment } from '../../../environments/environment'

export const AppwriteClient = new Client()
    .setEndpoint(environment.appwriteEndpoint)
    .setProject(environment.appwriteProjectId)
