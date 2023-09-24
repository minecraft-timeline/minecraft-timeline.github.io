// +++ Constant values ++++++++++++++++++++++++++++++++++++++++++++++++++

const JSON_URL = "../version_data.json";
const LOGO_PATH = "images/logos";
const ICON_VERSION_PATH = "images/icons/timeline/";
const WIKI_PATH = "https://minecraft.wiki/w/";
const YEAR_PX = 365 * 3;
const UPCOMING_PX = YEAR_PX / 6;
const DAY_MS = 24 * 60 * 60 * 1000;
const YEAR_MS = 365 * DAY_MS;
const LEAP_YEAR_MS = YEAR_MS + DAY_MS;
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// +++ DOM Constants ++++++++++++++++++++++++++++++++++++++++++++++++++++

const infoWrapperDOM = id("infopanel-wrapper");
const infoCloseDOM = id("infopanel-close");
const infoTitleDOM = id("infopanel-title");
const infoIconDOM = id("infopanel-icon");
const infoSubtitleDOM = id("infopanel-subtitle");
const infoDateDOM = id("infopanel-date");
const infoFunFactDOM = id("infopanel-fun-fact");
const infoMainLabelDOM = id("infopanel-main-label");
const infoMainFeatsDOM = id("infopanel-main-features");
const infoMinorLabelDOM = id("infopanel-minor-label");
const infoMinorFeatsDOM = id("infopanel-minor-features");
const infoLearnMoreDOM = id("infopanel-learn-more");
const infoScrollerDOM = id("infopanel-scroller");
const infoVideoLinkWrapperDOM = id("infopanel-video-link-wrapper");
const infoVideoLinkDOM = id("infopanel-video-link");
const infoVideoWrapperDOM = id("infopanel-video-wrapper");
const infoLongDescriptionDOM = id("infopanel-long-description");

const navDOM = id("nav");
const navShowDOM = id("button-nav-show");
const navHideDOM = id("button-nav-hide");

const buttonMajorDOM = id("button-toggle-major");
const buttonMinorDOM = id("button-toggle-minor");
const buttonEventsDOM = id("button-toggle-events");
const buttonMemoriesDOM = id("button-toggle-memories");

// +++ Data Variables +++++++++++++++++++++++++++++++++++++++++++++++++++

let editionsWithDOMs = [];

let showMajor = true;
let showMinor = false;
let showEvents = true;
let showMemories = false;

let originalMajorText = "Major Updates";
let originalMinorText = "Minor Updates";
let originalEventsText = "Events";
let originalMemoriesText = "Memories";

let player;

// +++ Helper Functions +++++++++++++++++++++++++++++++++++++++++++++++++

function ajaxGET(requestStr,done) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', requestStr);
	xhr.onload = function() {
		done(xhr.responseText, xhr.status);
	};
	xhr.send();
}

function id(id) {
	return document.getElementById(id);
}

function make(tagName,classes, text, id) {

	let dom = document.createElement(tagName);
	if (classes !== undefined) {
		if (typeof classes === "string" && classes.length > 0) {
			classes = classes.trim().split(" ");
		}
		if (typeof classes === "object") {
			for (let i = 0; i < classes.length; i++) {
				dom.classList.add(classes[i]);
			}
		}
	}
	if (text !== undefined) {
		dom.appendChild(textNode(text));
	}
	if (id !== undefined) {
		dom.id = id;
	}
	return dom;
}

function destroyChildren(element) {
	while (element.lastChild) {
		element.removeChild(element.lastChild);
	}
}

function textNode(text) {
	return document.createTextNode(text);
}

function hide(element) {
	element.classList.add("hidden");
}

function show(element) {
	element.classList.remove("hidden");
}

let lockedBody = false;
let lastScroll = 0;

function lockBody() {
	lockedBody = true;
	lastScroll = document.documentElement.scrollTop;
	document.body.style.top = (-lastScroll) + "px";
	document.body.classList.add("locked");
}

function unlockBody() {
	if (lockedBody) {
		document.body.classList.remove("locked");
		document.documentElement.scrollTop = lastScroll;
		lockedBody = false;
	}
}

function msOfYear(realDateMs) {
	let realDate = new Date(realDateMs);
	let start = new Date(realDate.getFullYear(), 0, 1);
	return realDate.getTime() - start.getTime();
}

function isLeapYear(year) {
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function parseUTC(str) {

	if (str.length === 10) {
		return Date.parse(str + "T00:00");
	}
	else if (str.length === 16 || str.length === 19) {
		return Date.parse(str);
	}
	else {
		return Date.parse(undefined);
	}

}

// +++ Worker functions +++++++++++++++++++++++++++++++++++++++++++++++++

function loadEditions(editions) {

	let tabListDOM = id("editions-tab-list");
	let rootDOM = id("editions-root");
	let emptyMessageDOM = id("message-nothing");

	let tabDOMs = [];
	let panelDOMs = [];
	let firstPanelDOM;
	let firstTabDOM;

	for (let i = 0; i<editions.length; i++) {

		let tabDOM = make("h2", "edition-tab", editions[i].title, "edition-tab-" + i);
		tabListDOM.appendChild(tabDOM);

		tabDOMs.push(tabDOM);

		let panelDOM = undefined;

		if (editions[i].versions.length + editions[i].upcomings.length > 0) {

			panelDOM = make("div", "edition-panel hidden", undefined, "edition-panel_" + i);
			panelDOMs.push(panelDOM);
			rootDOM.appendChild(panelDOM);

			loadVersions(editions[i], panelDOM);

		}
		else {
			tabDOM.classList.add("empty");
		}

		if (i === 0) {
			firstPanelDOM = panelDOM;
			firstTabDOM = tabDOM;
		}

		tabDOM.addEventListener("click", function () {

			hide(emptyMessageDOM);

			for (let j = 0; j < tabDOMs.length; j++) {
				if (tabDOMs[j] !== tabDOM) {
					if (panelDOMs[j]){
						hide(panelDOMs[j]);
					}
					tabDOMs[j].classList.remove("selected");
				}
			}

			id("edition-logo").src = LOGO_PATH + "/" + editions[i].logo;
			id("edition_description").innerText = editions[i].description;
			tabDOM.classList.add("selected");

			if (editions[i].versions.length + editions[i].upcomings.length > 0) {

				show(panelDOM);
				offsetBackground(editions[i]);

			}
			else {
				show(emptyMessageDOM);
			}

		});

		editions[i].tabDOM = tabDOM;
		editions[i].panelDOM = panelDOM;

		editionsWithDOMs.push(editions[i]);

	}

	if (editions.length > 0) {

		if (firstPanelDOM !== undefined) {
			show(firstPanelDOM);
			offsetBackground(editions[0]);
		}
		else {
			show(emptyMessageDOM);
		}

		show(tabListDOM);
		show(id("header"));
		show(id("footer"));

		id("edition-logo").src = LOGO_PATH + "/" + editions[0].logo;
		id("edition_description").innerText = editions[0].description;
		firstTabDOM.classList.add("selected");

	}

	updateVersionDisplays();

}

function offsetBackground(editionWithDOM) {

	// Interesting hack I made. This aligns one of the backgrounds of a panel with a 32x32 grid.

	let offset = (-(32-editionWithDOM.panelDOM.getBoundingClientRect().height%32))+"px";
	let position = `left 0 bottom ${offset}, left 0 top 0, left 0 top 0`;

	console.log(editionWithDOM.rulerDOM);

	editionWithDOM.panelDOM.style.backgroundPosition = position;
	editionWithDOM.rulerDOM.style.backgroundPosition = position;
	editionWithDOM.fakeRulerDOM.style.backgroundPosition = position;

}

function loadVersions(edition, panelDOM) {

	let versions = edition.versions;
	let upcomings = edition.upcomings;

	// Adds today as a special "version"

	versions.push({
		date: new Date().toISOString().substr(0,10),
		today: true
	});

	// Sorts timeline by date

	versions.sort(function (v1, v2) {
		return Date.parse(v1.date) - Date.parse(v2.date);
	});

	// Generate timeline, years and timeline

	if (versions.length > 0) {

		versions[0].first = true;

		let firstTimeMs = parseUTC(versions[0].date);
		let lastTimeMs = parseUTC(versions[versions.length-1].date);

		let firstDate = new Date(firstTimeMs);
		let lastDate = new Date(lastTimeMs);

		let yearAmount = lastDate.getFullYear() - firstDate.getFullYear();

		let rulerDOM = make("div", "ruler");
		let timelineDOM = make("div", "timeline");

		let yearDOMs = [];

		for (let i = 0; i <= yearAmount; i++) {

			let tlYearDOM = make("div", "year");
			let rulerYearDOM = make("div", "year");

			let multi = 1;

			if (i === 0) {
				multi = (YEAR_MS - msOfYear(firstTimeMs)) / YEAR_MS;
			}

			else if (i === yearAmount) {
				multi = (msOfYear(lastTimeMs)) / YEAR_MS;
			}

			else if (isLeapYear(firstDate.getFullYear() + i)) {
				multi = LEAP_YEAR_MS/YEAR_MS;
			}

			tlYearDOM.style.height = (multi * YEAR_PX) + "px";
			rulerYearDOM.style.height = (multi * YEAR_PX) + "px";

			let h1DOM = make("h1", "number", firstDate.getFullYear() + i);

			let h2DOM = make("h3", "number-ago",
				(lastDate.getFullYear() - firstDate.getFullYear() - i !== 0) ?
				(lastDate.getFullYear() - firstDate.getFullYear() - i) + " y ago" :
				"Now"
			);

			rulerYearDOM.appendChild(h1DOM);
			rulerYearDOM.appendChild(h2DOM);

			yearDOMs[firstDate.getFullYear() + i] = tlYearDOM;

			timelineDOM.appendChild(tlYearDOM);
			rulerDOM.appendChild(rulerYearDOM);

		}

		for (let i = 0; i < versions.length; i++) {

			let date = new Date(parseUTC(versions[i].date));

			let yearLength = (isLeapYear(date.getFullYear()) ? LEAP_YEAR_MS : YEAR_MS);
			let timeOfYear = msOfYear(date.getTime());

			let versionDOM = make("div", "version");

			if (versions[i].first || versions[i].today) {
				if (versions[i].first) {
					versionDOM.classList.add("endpoint");
					versionDOM.classList.add("first");

					let previewDOM = makePreview(versions[i]);

					versionDOM.appendChild(previewDOM);
					versions[i].previewDOM = previewDOM;
				}
				else if (versions[i].today) {
					versionDOM.classList.add("endpoint");
					versionDOM.classList.add("today");
					versionDOM.classList.add("nointeract");
				}
				let box = makeBox(versions[i], edition, date);
				versionDOM.appendChild(box);
			}
			else {
				let previewDOM = makePreview(versions[i]);
				versionDOM.appendChild(previewDOM);

				versionDOM.classList.add("update-" + versions[i].type);
				versions[i].previewDOM = previewDOM;
			}

			if (date.getFullYear() === firstDate.getFullYear() || date.getFullYear() === lastDate.getFullYear()) {
				if (date.getFullYear() === firstDate.getFullYear()) {

					let firstTimeOfYear = msOfYear(firstTimeMs);
					let multi = ((timeOfYear/yearLength)-(firstTimeOfYear/yearLength))/(1-(firstTimeOfYear/yearLength));
					versionDOM.style.top = (multi * 100) + "%";

				}
				else {

					let lastTimeOfYear = msOfYear(lastTimeMs);
					let multi = timeOfYear / lastTimeOfYear;
					versionDOM.style.top = (multi * 100) + "%";

				}
			} else {
				let multi = timeOfYear/yearLength;
				versionDOM.style.top = (multi * 100) + "%";
			}

			if (!versions[i].today) {
				versionDOM.addEventListener("click", function () {
					showInfopanel(versions[i]);
				});
			}

			yearDOMs[date.getFullYear()].appendChild(versionDOM);

			versions[i].versionDOM = versionDOM;

		}

		if (upcomings.length > 0) {
			let upcTimelineDOM = make("div", "upcoming-timeline");
			let upcRulerDOM = make("div", "upcoming-ruler");

			for (let i = 0; i < upcomings.length; i++) {

				let upcYearDOM = make("div", "year");
				upcYearDOM.style.height = UPCOMING_PX + "px";

				let upcVersionDOM = make("div", "version"+ (i%2 === 0 ? "" : " alt"));
				upcVersionDOM.style.top = "50%";

				let upcRulerYearDOM = make("div", "year");

				upcRulerYearDOM.style.height = UPCOMING_PX + "px";

				upcRulerYearDOM.appendChild(make("h2", "number", "????"));
				upcRulerYearDOM.appendChild(make("h3", "number-ago","Future"));

				let previewDOM = makePreview(upcomings[i]);

				upcVersionDOM.appendChild(previewDOM);
				upcVersionDOM.classList.add("update-" + upcomings[i].type);

				upcVersionDOM.addEventListener("click", function () {
					showInfopanel(upcomings[i]);
				});

				upcYearDOM.appendChild(upcVersionDOM);
				upcTimelineDOM.appendChild(upcYearDOM);
				upcRulerDOM.appendChild(upcRulerYearDOM);

				upcomings[i].versionDOM = upcVersionDOM;
				upcomings[i].previewDOM = previewDOM;

			}

			timelineDOM.appendChild(upcTimelineDOM);
			rulerDOM.appendChild(upcRulerDOM);

		}

		let timelinePanelDOM = make("div", "timeline-panel");

		timelinePanelDOM.appendChild(timelineDOM);

		panelDOM.appendChild(rulerDOM);
		panelDOM.appendChild(timelinePanelDOM);

		let fakeRulerDOM = make("div","ruler");

		panelDOM.appendChild(fakeRulerDOM);

		edition.rulerDOM = rulerDOM;
		edition.fakeRulerDOM = fakeRulerDOM;

	}

}

function makePreview(version) {

	let previewDOM = make("div", "preview");

	if (version.icon !== undefined) {
		let icon = make("img");
		icon.src = ICON_VERSION_PATH + version.icon;
		previewDOM.appendChild(icon);
	}

	let hasTitle = version.title !== undefined;
	let hasSubtitle = version.subtitle !== undefined;
	let hasDesc = version.description !== undefined;

	if (hasTitle || hasSubtitle || hasDesc) {
		let textBoxDOM = make("div", "text-box");
		if (hasTitle) {
			textBoxDOM.appendChild(make("h2", "title", version.title));
		}
		if (hasSubtitle) {
			textBoxDOM.appendChild(make("h2", "subtitle", version.subtitle));
		}
		if (hasDesc) {
			textBoxDOM.appendChild(make("h2", "description", version.description));
		}
		previewDOM.appendChild(textBoxDOM);
	}

	return previewDOM;
	
}

function makeBox(version, edition, date) {

	if (version.first) {

		let text1 = make("h1", "",edition.firstMessage);
		let text2 = make("h1", "", MONTH_NAMES[date.getMonth()] + " " + date.getFullYear());
		let box = make("div", "box");

		let content = make("div", "content");

		content.appendChild(text1);
		content.appendChild(text2);

		box.appendChild(content);

		return box;

	}

	if (version.today) {

		let text1 = make("h1", "","Today");
		let text2 = make("h1", "", MONTH_NAMES[date.getMonth()] + " " + date.getFullYear());
		let box = make("div", "box");

		let content = make("div", "content");

		content.appendChild(text1);
		content.appendChild(text2);

		box.appendChild(content);

		return box;

	}
}

// +++ User Interaction Functions +++++++++++++++++++++++++++++++++++++++

function showInfopanel(version) {

	let hasIcon = version.icon !== undefined;
	let hasTitle = version.title !== undefined;
	let hasSubtitle = version.subtitle !== undefined;
	let hasDate = version.date !== undefined;
	let hasPossibleDate = version.possibleDate !== undefined;
	let hasFunFact = version.funFact !== undefined;
	let hasMainFeat = version.mainFeatures !== undefined;
	let hasMinorFeat = version.minorFeatures !== undefined;
	let hasLearnMore = version.learnMore !== undefined;
	let hasVideo = version.video !== undefined;
	let hasLongDesc = version.longDescription !== undefined;

	if (hasTitle) {
		infoTitleDOM.innerText = version.title;
	}
	else if (hasSubtitle) {
		infoTitleDOM.innerText = version.subtitle;
	}
	else {
		infoTitleDOM.innerText = "Unknown Update";
	}

	if (hasIcon) {
		show(infoIconDOM);
		infoIconDOM.src = ICON_VERSION_PATH + version.icon;
	}
	else {
		hide(infoIconDOM);
	}

	if (hasSubtitle && hasTitle) {
		infoSubtitleDOM.innerText = version.subtitle + (hasDate || hasPossibleDate ? " • " : "");
	}
	else {
		infoSubtitleDOM.innerText = "";
	}

	if (hasDate && !hasPossibleDate) {
		let date = new Date(parseUTC(version.date));
		infoDateDOM.innerText = MONTH_NAMES[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
	}
	else if (hasPossibleDate) {
		infoDateDOM.innerText = version.possibleDate;
	}
	else {
		infoDateDOM.innerText = "";
	}

	if (hasFunFact) {
		show(infoFunFactDOM);
		infoFunFactDOM.innerText = version.funFact;
	}
	else {
		hide(infoFunFactDOM);
	}

	if (hasMainFeat) {
		show(infoMainLabelDOM);
		destroyChildren(infoMainFeatsDOM);

		for (let i = 0; i < version.mainFeatures.length; i++) {

			infoMainFeatsDOM.appendChild(make("li", "", version.mainFeatures[i].text));

		}

	}
	else {
		hide(infoMainLabelDOM);
		destroyChildren(infoMainFeatsDOM);
	}

	if (hasMinorFeat) {
		show(infoMinorLabelDOM);
		destroyChildren(infoMinorFeatsDOM);

		for (let i = 0; i < version.minorFeatures.length; i++) {

			infoMinorFeatsDOM.appendChild(make("li", "", version.minorFeatures[i].text));

		}

	}
	else {
		hide(infoMinorLabelDOM);
		destroyChildren(infoMinorFeatsDOM);
	}

	if (hasLearnMore) {
		show(infoLearnMoreDOM);
		infoLearnMoreDOM.href = version.learnMore.startsWith("#") ? WIKI_PATH + version.learnMore.substring(1,version.learnMore.length) : version.learnMore;

		switch (version.type) {
			case "minor":
			case "major":
				infoLearnMoreDOM.innerText = "Learn more about this update";
				break;
			case "event":
				infoLearnMoreDOM.innerText = "Learn more about this event";
				break;
			case "memory":
				infoLearnMoreDOM.innerText = "Learn more about this memory";
				break
		}

	}
	else {
		hide(infoLearnMoreDOM);
	}
	
	if (hasVideo) {

		infoVideoLinkDOM.href = "https://www.youtube.com/watch?v=" + version.video;
		infoVideoLinkDOM.src = "https://www.youtube.com/embed/" + version.video;

		player.cueVideoById(version.video);

		show(infoVideoWrapperDOM);
		show(infoVideoLinkWrapperDOM);
	} 
	else {
		hide(infoVideoWrapperDOM);
		hide(infoVideoLinkWrapperDOM)
	}

	if (hasLongDesc) {

		destroyChildren(infoLongDescriptionDOM);
		let desc = typeof (version.longDescription) === "string" ? [version.longDescription] : version.longDescription;

		for (let i = 0; i < desc.length; i++) {

			infoLongDescriptionDOM.appendChild(make("p",undefined,desc[i]));

		}

	}
	else {
		destroyChildren(infoLongDescriptionDOM);
	}

	show(infoWrapperDOM);
	infoScrollerDOM.scrollTop = 0;
	lockBody();
	hideNav();

}

function hideInfopanel() {
	player.pauseVideo();
	hide(infoWrapperDOM);
	unlockBody();
}

function showNav() {
	navDOM.style.width = "300px";
	navDOM.style.borderWidth = "2px";
}

function hideNav() {
	navDOM.style.width = "0";
	navDOM.style.borderWidth = "0";
}

function updateVersionDisplays() {

	buttonMajorDOM.innerText = originalMajorText + (showMajor ? ": ON" : ": OFF");
	buttonMinorDOM.innerText = originalMinorText + (showMinor ? ": ON" : ": OFF");
	buttonEventsDOM.innerText = originalEventsText + (showEvents ? ": ON" : ": OFF");
	buttonMemoriesDOM.innerText = originalMemoriesText + (showMemories ? ": ON" : ": OFF");

	for (let i = 0; i < editionsWithDOMs.length; i++) {

		let alt = false;
		let edition = editionsWithDOMs[i];

		let totalVersions = edition.versions.concat(edition.upcomings);

		for (let j = 0; j < totalVersions.length; j++) {

			let version = totalVersions[j];

			if (!version.today) {

				if ((version.type === "major" && showMajor)
					|| (version.type === "minor" && showMinor)
					|| (version.type === "event" && showEvents)
					|| (version.type === "memory" && showMemories)) {

					version.versionDOM.classList.remove("alt");

					if (version.first) {
						version.previewDOM.classList.remove("hidden");
					}
					else {
						version.versionDOM.classList.remove("hidden");
					}

					if (alt)
						version.versionDOM.classList.add("alt");

					alt = !alt;

				}
				else {

					if (version.first) {
						version.previewDOM.classList.add("hidden");
					}
					else {
						version.versionDOM.classList.add("hidden");
					}

				}

			}

		}

	}

}

// +++ Main +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let youtubeLoader = make("script");
youtubeLoader.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(youtubeLoader, firstScriptTag);

let tooLong = true;

ajaxGET(JSON_URL, function (data, status) {

	if (status === 200) {

		let json;

		if (JSON.parse) {
			show(id("message-building"));
			json = JSON.parse(data);
			loadEditions(json.editions);
		}
		else {
			show(id("message-old"));
		}

	}
	else {
		tooLong = false;
		id("message-error-code").innerText = "Error code: " + status;
		show(id("message-error"));
	}

	tooLong = false;

	hide(id("message-loading"));
	hide(id("message-building"));
	hide(id("message-toolong"));

});

function onYouTubeIframeAPIReady() {

	player = new YT.Player('infopanel-video',{playerVars: { 'autoplay': 0}});

}

setTimeout(function () {

	if (tooLong) {
		show(id("message-toolong"));
	}

}, 10000);

document.addEventListener("keydown", function keyDownTextField(e) {

	if (e.key === "Escape" || e.key === "e") {
		hideInfopanel();
	}

}, false);

infoCloseDOM.addEventListener("click", hideInfopanel);

navShowDOM.addEventListener("click", showNav);

navHideDOM.addEventListener("click", hideNav);

buttonMajorDOM.addEventListener("click", function(){
	showMajor = !showMajor;
	updateVersionDisplays();
});

buttonMinorDOM.addEventListener("click", function(){
	showMinor = !showMinor;
	updateVersionDisplays();
});

buttonEventsDOM.addEventListener("click", function(){
	showEvents = !showEvents;
	updateVersionDisplays();
});

buttonMemoriesDOM.addEventListener("click", function(){
	showMemories = !showMemories;
	updateVersionDisplays();
});
