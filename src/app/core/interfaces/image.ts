interface ImageBase {
    ext: string
    hash: string
    height: number
    mime: string
    name: string
    size: number
    url: string
    width: number
}

export interface Image extends ImageBase {
    alternativeText: string
    caption: string
    createdAt: Date
    formats: ImageThumbnailConfig
    id: string
    provider: string
    related: string[]
    updatedAt: Date
    url: string
}

export interface ImageThumbnail extends ImageBase {
    path: string
}

export interface ImageThumbnailConfig {
    thumbnail: ImageThumbnail
    small: ImageThumbnail
}
