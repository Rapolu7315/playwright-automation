export class DeviceConfig {

    static readonly DESKTOP = {
        viewport: { width: 1920, height: 1080 },
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'
    };

    static readonly MOBILE = {
        viewport: { width: 390, height: 844 },
        userAgent:
            'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
        isMobile: true,
        hasTouch: true
    };

}