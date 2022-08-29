# Chrome-Extension

0. [Basic extension](https://github.com/skborey/Chrome-Extension#basic-extension) :white_check_mark:
1. [Webpage Permission](https://github.com/skborey/Chrome-Extension#webpage-permission) :white_check_mark:
2. [Code10PM](https://github.com/skborey/Chrome-Extension#code10pm) :arrows_counterclockwise:
3. [Daily Tab Color](https://github.com/skborey/Chrome-Extension#daily-tab-color) :arrows_counterclockwise:

## Basic Extension

This include the basic requirement for starting create an extension. This include icon, manifest.json with basic require object, message passing from content script to background script, extension popup.

## Webpage Permission

Advoid user access G-mail or Facebook in usual mode of Chrome, by close tab of Facebook or G-mail then open them in Incognito mode

> ### API, Keywords

```
chrome.runtime.sendMessage();
```

```
chrome.runtime.onMessage.addListener();
```

```
Message Passing
```

> ### Process flow

Detect url (Facebook or G-mail) and tab id using content script (content.js) then send to background script (background.js). In background.js will detect the message and close that the tab with id from message then open the Incognito mode with the same url.

> ### Reference

- [Message passing](https://developer.chrome.com/apps/messaging)

## Code10PM

When 10 pm all tabs on Chrome will be closed. Then start evironment to code - opening inspired items, Youtube with coding song, Webstie to do coding, preventing from using the social media like Facebook.

> ### API, Keywords

```
chrome.alarms.create();
```

```
chrome.alarms.onAlarm.addListener();
```

```
Permission
```

```
Alarm
```

> ### Process flow


> ### Reference

- [Alarm](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/create) to create schedule
- [Content script run on active tab, background script run on whole window](https://stackoverflow.com/questions/31107446/chrome-extension-alarms-create-undefined)


## Daily Tab Color

To open daily work website when open the chrome and group those website to agroup with tile of day and color base on that day. E.g. If today is monday, those websites are under group name "Monday" with group color of `yellow`.