//startup.js file
var appConfig = {
    appId: "sampleHeadless",
    appName: "sampleHeadless",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.33.51",
    serverPort: "80",
    secureServerPort: "443",
    isturlbase: "http://kh2400.kitspl.com:8081/services",
    isMFApp: true,
    appKey: "1722df88f7547fb35a34ea2e79b35ff",
    appSecret: "b3741a2a4f26302d9642de307e312556",
    serviceUrl: "http://kh2400.kitspl.com:8081/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://kh2400.kitspl.com:8081/authService/100000002/appconfig",
        "integsvc": {
            "sample": "http://kh2400.kitspl.com:8081/services/sample"
        },
        "appId": "62b830ea-8f44-4b7d-b6bf-715c9e0f17cd",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "sample",
        "reportingsvc": {
            "session": "http://kh2400.kitspl.com:8081/services/IST",
            "custom": "http://kh2400.kitspl.com:8081/services/CMS"
        },
        "baseId": "e34dfbf9-ec50-4ca7-9541-d3acfeaa96de",
        "services_meta": {
            "sample": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2400.kitspl.com:8081/services/sample"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "http://kh2400.kitspl.com:8081/admin/sampleHeadless/MWServlet",
    secureurl: "http://kh2400.kitspl.com:8081/admin/sampleHeadless/MWServlet",
    middlewareContext: "sampleHeadless"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeMVCTemplates();
    initializeUserWidgets();
    Form1Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 81170
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            showstartupform: function() {
                Form1.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								