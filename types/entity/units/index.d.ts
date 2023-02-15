import type * as Unit from '../Unit';
import type { UnitSubType } from '../../types/commonTypes';
interface ConstructorInfo {
    description: Localizable;
    image: string;
    subtype: UnitSubType;
}
export declare type UnitAction = {
    (self: Unit.IUnit, attackTargets: Unit.IUnit[], underworld: Underworld, canAttackTarget: boolean): Promise<void>;
};
export interface UnitSource {
    id: string;
    info: ConstructorInfo;
    init?: (unit: Unit.IUnit, underworld: Underworld) => void;
    action: UnitAction;
    getUnitAttackTargets: (unit: Unit.IUnit, underworld: Underworld) => Unit.IUnit[];
    unitProps: Partial<Unit.IUnit>;
    spawnParams?: SpawnParams;
    animations: Unit.UnitAnimations;
    sfx: Unit.UnitSFX;
}
interface SpawnParams {
    probability: number;
    budgetCost: number;
    unavailableUntilLevelIndex: number;
}
import Underworld from '../../Underworld';
import { Localizable } from '../../localization';
export declare function registerUnits(): void;
export declare const allUnits: {
    [id: string]: UnitSource;
};
export {};
