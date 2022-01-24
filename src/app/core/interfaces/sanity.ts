export interface SanityType {
    _type: string
}
export interface Reference {
    _ref: string
    _type: 'reference'
}

export interface Asset {
    url: string
    _ref: string
    _rev: string
    _type: 'sanity.imageAsset' | 'reference'
}

export interface Banner extends SanityType {
    title: string
    subtitle: string
    headingHAlignment: 'start' | 'end' | 'center'
    headingVAlignment: 'start' | 'end' | 'center'
    image: ImageRef
    ctas: Cta[]
    description: (Block | Figure | EmbedHtml)[]
}

export interface BlockMark extends SanityType {
    text: string
    _type: 'span'
}

export interface Block extends SanityType {
    style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'normal'
    children: BlockMark[]
    html: string
    code: string
}

export interface EmbedHtml extends SanityType {
    html: string
}

export interface Figure extends SanityType {
    asset: Reference
}

export interface ImageRef {
    alt: string
    asset: Reference
}

export interface LoadedImage {
    alt: string
    asset: Asset
}

export interface Page {
    _type: 'page'
    title: string
    description: string
    backgroundImage: LoadedImage
    openGraphImage: LoadedImage
    content: SanityType[]
}

export interface Route {
    _id: string
    slug: Slug
    title: string
    order: number
}

export interface SiteConfig {
    _type: 'site-config'
    mainNavigation: Route[]
    footerNavigation: Route[]
    footerText: Block[]
    title: string
    logo: LoadedImage
    favicon: LoadedImage
    url: string
    socialMediaLinks: Tag[]
    copyrightDate: Date
    copyrightText: string
    primaryColor: string
    accentColor: string
    addShoppingCardIcon: boolean
}

export interface Slug {
    current: string
}

export interface Tag extends SanityType {
    title: string
    href: string
    image: LoadedImage
}

export interface Card extends SanityType {
    title: string
    subtitle: string
    image: ImageRef
    text: (Block | Figure | EmbedHtml)[]
    ctas: Cta[]
    tags: Tag[]
}

export interface Cta extends SanityType {
    title: string
    link: string
    route: Reference
}
