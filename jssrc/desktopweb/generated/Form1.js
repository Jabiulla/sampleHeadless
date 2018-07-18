function addWidgetsForm1() {
    Form1.setDefaultUnit(kony.flex.DP);
    var btn2 = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "height": "50dp",
        "id": "btn2",
        "isVisible": true,
        "left": "190dp",
        "onClick": AS_Button_ca1c997662004c5f92797e16c55812c4,
        "skin": "defBtnNormal",
        "text": "Button",
        "top": "117dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form1.add(btn2);
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
        "retainScrollPosition": false
    });
};