import { QRCodeReader } from '@barn/zxing';

import { BrowserCodeReader } from './browser-code-reader';

export class BrowserQRCodeReader extends BrowserCodeReader {
    public constructor(timeBetweenScansMillis: number = 500) {
        super(new QRCodeReader(), timeBetweenScansMillis);
    }
}
