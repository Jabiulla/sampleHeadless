//startup.js file
kony.print = function() {
    return;
};
var globalhttpheaders = {};
var appConfig = {
    appId: "sampleHeadless",
    appName: "sampleHeadless",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.33.51",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "sampleHeadless",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://cse.konycloud.com/sampleHeadless/MWServlet",
    secureurl: "https://cse.konycloud.com/sampleHeadless/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
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
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 81170
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            Form1.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();