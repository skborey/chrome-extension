# Chrome-Extension

1. [Webpage Permission](https://github.com/skborey/Chrome-Extension#webpage-permission) :white_check_mark:
2. [Code10PM](https://github.com/skborey/Chrome-Extension#code10pm) :arrows_counterclockwise:

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
