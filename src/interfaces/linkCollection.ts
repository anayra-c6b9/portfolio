export interface CustomLink {
    id: Number,
    name: string,
    link: Array<string>
}

export interface CustomLinkCollection extends Array<CustomLink>{}