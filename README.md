# Chrome-Extension

1. [Webpage Permission](https://github.com/skborey/Chrome-Extension#webpage-permission) :white_check_mark:
2. [Code10PM](https://github.com/skborey/Chrome-Extension#code10pm) :arrows_counterclockwise:

## Webpage Permission

Advoid user access G-mail or Facebook in usual mode of Chrome, by close tab of Facebook or G-mail then open them in Incognito mode

> API, Keywords

```
chrome.runtime.sendMessage();
```

```
chrome.runtime.onMessage.addListener();
```

```
Message Passing
```

> Process flow

Detect url (Facebook or G-mail) and tab id using content script (content.js) then send to background script (background.js). In background.js will detect the message and close that the tab with id from message then open the Incognito mode with the same url.

> Refrence

- [Message passing](https://developer.chrome.com/apps/messaging)

## Code10PM
