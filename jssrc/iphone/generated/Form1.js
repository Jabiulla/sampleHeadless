function addWidgetsForm1() {
    Form1.setDefaultUnit(kony.flex.DP);
    var btnAlert = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "height": "50dp",
        "id": "btnAlert",
        "isVisible": true,
        "left": "60dp",
        "onClick": AS_Button_i5a2b4559723467bb3e13db8a13dad88,
        "skin": "defBtnNormal",
        "text": "Button",
        "top": "279dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    Form1.add(btnAlert);
};

function Form1Globals() {
    Form1 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm1,
        "enabledForIdleTimeout": false,
        "id": "Form1",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};