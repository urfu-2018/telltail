import Adventure = require('models/Adventure');
import Hashing = require('models/Hashing');

export interface IPageMeta {
    charset: string;
    description: string;
}

export interface IAdventureDataArr {
    adventures: Adventure[];
    meta?: IPageMeta;
    title?: string;
    staticBasePath?: string;
}

export interface IAdventureData {
    id: number;
    numberAction: string;
    title: string;
    description: string;
    hashings: Hashing[];
}

export interface IActionData {
    adventure: string;
    action: string;
    nextAction: string;
}

export interface IHashingData {
    title: string;
    hash: string;
    hashEN: string;
}

export interface IHashingTranslate {
    en: string;
    ru: string;
}
