chrome.runtime.onMessage.addListener(
	function (message, sender, sendResponse) {
		if (message.type == "getToToggle"){
			sendResponse({aux:document.getElementById("AuxCodeToSwitchTo").value, time:document.getElementById("minutesCount").value});
		}
		return true;
	});

// BUTTON LISTENERS
document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('TriggerButton');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getAllInWindow(null, async function (tabs) {
			for (var i = 0; i < tabs.length; i++) {
				if (tabs[i].title === "Amazon Connect Contact Control Panel") {
					chrome.tabs.executeScript(tabs[i].id, {file: "content.js"});
				}
			}
		});

	}, false);
}, false);
document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('BreakButton');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getAllInWindow(null, async function (tabs) {
			for (var i = 0; i < tabs.length; i++) {
				if (tabs[i].title === "Amazon Connect Contact Control Panel") {
					console.log("Injecting Lunch Script");
					chrome.tabs.executeScript(tabs[i].id, {file: "break.js"});
				}
			}
		});
	}, false);
}, false);
document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('LunchButton');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getAllInWindow(null, async function (tabs) {
			for (var i = 0; i < tabs.length; i++) {
				if (tabs[i].title === "Amazon Connect Contact Control Panel") {
					console.log("Injecting Lunch Script");
					chrome.tabs.executeScript(tabs[i].id, {file: "lunch.js"});
				}
			}
		});
	}, false);
}, false);