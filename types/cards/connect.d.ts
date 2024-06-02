import { Spell } from './index';
import { HasSpace } from '../entity/Type';
declare const spell: Spell;
export declare function getConnectingEntities(source: HasSpace, radius: number, chainsLeft: number, targets: HasSpace[] | undefined, potentialTargets: HasSpace[], filterFn: (x: any) => boolean, //selects which type of entities this can chain to
prediction: boolean, radiusFn?: (chainSource: HasSpace) => number): {
    chainSource: HasSpace;
    entity: HasSpace;
}[];
export declare function getNextConnectingEntities(source: HasSpace, baseRadius: number, chainsLeft: number, potentialTargets: HasSpace[], prediction: boolean, radiusModifierFn?: (chainSource: HasSpace) => number): {
    chainSource: HasSpace;
    entity: HasSpace;
}[];
export default spell;
