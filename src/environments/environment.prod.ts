import { AppConfig } from '@core/config/app-config'

export const environment: AppConfig = {
    production: true,
    sanity: {
        projectId: '<#< sanity.projectId >#>',
        dataset: 'production',
        useCdn: true,
    },
    web: {
        url: '<#< deployments.web.url >#>',
    },
}
