import { ObewdsTwConfig, ObewdsTwConfigGroups } from '@obewds/obewds-tw-config';
declare type ObewdsTwConfigType = typeof ObewdsTwConfig;
declare type DesignSystemKeys = typeof ObewdsTwConfigGroups[number];
export default function (tw: ObewdsTwConfigType, key: DesignSystemKeys | string): string[];
export {};
