import { AppConfig } from '@core/config/app-config'

export const environment: AppConfig = {
    production: false,
    sanity: {
        projectId: '<#< sanity.projectId >#>',
        dataset: 'development',
        useCdn: true,
    },
    web: {
        url: '<#< deployments.web.url >#>',
    },
}
