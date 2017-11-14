cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "readRFID.readRFID",
        "file": "plugins/readRFID/www/readRFID.js",
        "pluginId": "readRFID",
        "clobbers": [
            "cordova.plugins.readRFID"
        ]
    },
    {
        "id": "VoiceToText.TransformVoiceToText",
        "file": "plugins/VoiceToText/www/TransformVoiceToText.js",
        "pluginId": "VoiceToText",
        "clobbers": [
            "cordova.plugins.TransformVoiceToText"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "readRFID": "1.0.0",
    "VoiceToText": "1.0.0"
};
// BOTTOM OF METADATA
});