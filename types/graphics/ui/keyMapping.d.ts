declare const mapping: {
    showWalkRope: string[];
    dequeueSpell: string[];
    openInventory: string[];
    ping: string[];
    recenterCamera: string[];
    endTurn: string[];
    spell1: string[];
    spell2: string[];
    spell3: string[];
    spell4: string[];
    spell5: string[];
    spell6: string[];
    spell7: string[];
    spell8: string[];
    spell9: string[];
    spell0: string[];
    cameraUp: string[];
    cameraDown: string[];
    cameraLeft: string[];
    cameraRight: string[];
};
export default mapping;
export declare function fullyUpdateControls(newMapping: any): void;
export declare function keyToHumanReadable(keyboardKeys: string[]): string;
export declare function getKeyCodeMapping(keyCode: string): string | undefined;
