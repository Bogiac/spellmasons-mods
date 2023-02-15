import Underworld from '../../Underworld';
import { Overworld } from '../../Overworld';
export declare const keyDown: {
    showWalkRope: boolean;
    cameraUp: boolean;
    cameraLeft: boolean;
    cameraDown: boolean;
    cameraRight: boolean;
};
export declare function keydownListener(overworld: Overworld, event: KeyboardEvent): void;
export declare function keyupListener(overworld: Overworld, event: KeyboardEvent): void;
export declare function endTurnBtnListener(overworld: Overworld, e: MouseEvent): boolean;
export declare function useMousePosition(underworld: Underworld, e?: MouseEvent): void;
export declare function contextmenuHandler(overworld: Overworld, e: MouseEvent): void;
export declare function mouseDownHandler(overworld: Overworld, e: MouseEvent): void;
export declare function mouseUpHandler(overworld: Overworld, e: MouseEvent): void;
export declare function mouseOverHandler(_overworld: Overworld, e: MouseEvent): void;
export declare function onWindowBlur(_overworld: Overworld): void;
export declare function clickHandler(overworld: Overworld, e: MouseEvent): void;
export declare function triggerAdminCommand(label: string, clientId: string, payload: any): void;
export declare function registerAdminContextMenuOptions(overworld: Overworld): void;
