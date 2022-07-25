export interface Desc {
    subtitle: string;
    is_chippy: boolean;
    bg_url: string;
    is_next: boolean;
}

export default interface NovelModel {
    episode: string;
    title: string;
    prefix_url: string;
    desc: Desc[];
}