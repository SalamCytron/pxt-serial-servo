/**
 * Custom blocks for controlling bus servos
 */
//% weight=100 color=#0fbc11 icon="\uf085"
namespace busServo {
    let initialized = false;

    /**
     * Initialize the bus servo communication
     * @param tx the pin connected to the servo's signal wire, eg: SerialPin.P0
     */
    //% block="initialize bus servo on pin %tx"
    export function init(tx: SerialPin): void {
        serial.redirect(tx, SerialPin.P1, BaudRate.BaudRate115200);
        initialized = true;
    }

    /**
     * Send a command to the bus servo
     * @param id the ID of the servo (0-254)
     * @param position the target position (500-2500)
     * @param time the time to reach the position in ms
     */
    //% block="move servo |ID %id |to position %position |in %time ms"
    //% id.min=0 id.max=254
    //% position.min=500 position.max=2500
    //% time.min=0 time.max=9999
    export function moveServo(id: number, position: number, time: number): void {
        if (!initialized) {
            return;
        }
        let command = `#${padNumber(id, 3)}P${padNumber(position, 4)}T${padNumber(time, 4)}!`;
        serial.writeString(command);
    }

    /**
     * Helper function to pad numbers with leading zeros
     */
    function padNumber(num: number, width: number): string {
        let numString = num.toString();
        while (numString.length < width) {
            numString = "0" + numString;
        }
        return numString;
    }
}
