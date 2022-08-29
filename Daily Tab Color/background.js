const myTabUrls = [
  "https://mail.google.com",
  "https://calendar.google.com",
  "https://outlook.office.com"
]

const groupOptionsByDay = [
  { title: "Sunday", color: "red"},
  {title: "Monday", color: "yellow"},
  {title: "Tuseday", color: "pink"},
  {title: "Wednesday", color: "green"},
  {title: "Thursday", color: "orange"},
  {title: "Friday", color: "blue"},
  {title: "Saturday", color: "purple"}
]

chrome.runtime.onStartup.addListener( async () => {
  
  // Open all tabs
  const tabIds = [];
  for (const url of myTabUrls) {
    const tab = await chrome.tabs.create({url});
    tabIds.push(tab.id);
  }

  // Create a group
  const groupId = await chrome.tabs.group({ tabIds });

  // Update group style
  await chrome.tabGroups.update(
    groupId,
    groupOptionsByDay[new Date().getDay()]
  )
})