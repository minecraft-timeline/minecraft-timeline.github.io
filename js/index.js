// +++ Constant values ++++++++++++++++++++++++++++++++++++++++++++++++++

const JSON_URL = "https://raw.githubusercontent.com/minecraft-timeline/minecraft-timeline.github.io/master/version_data.json";
const LOGO_PATH = "images/logos";
const WIKI_PATH = "https://minecraft.gamepedia.com/";
const YEAR_PX = 365 * 2;
const UPCOMING_PX = YEAR_PX / 6;
const DAY_MS = 24 * 60 * 60 * 1000;
const YEAR_MS = 365 * DAY_MS;
const LEAP_YEAR_MS = YEAR_MS + DAY_MS;
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// +++ DOM Constants ++++++++++++++++++++++++++++++++++++++++++++++++++++

const iPanelWrapperDOM = id("infopanel-wrapper");
const iPanelCloseDOM = id("infopanel-close");
const iPanelTitleDOM = id("infopanel-title");
const iPanelSubtitleDOM = id("infopanel-subtitle");
const iPanelDateDOM = id("infopanel-date");
const iPanelFunFactDOM = id("infopanel-fun-fact");
const iPanelMainLabelDOM = id("infopanel-main-label");
const iPanelMainFeatsDOM = id("infopanel-main-features");
const iPanelMinorLabelDOM = id("infopanel-minor-label");
const iPanelMinorFeatsDOM = id("infopanel-minor-features");
const iPanelLearnMoreDOM = id("infopanel-learn-more");

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

function make(tagName,classes = undefined, text = undefined, id = undefined) {
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

	let tabsDOM = id("editions_tab");
	let rootDOM = id("editions_root");

	let tabDOMs = [];
	let panelDOMs = [];
	let firstPanelDOM;
	let firstTabDOM;

	for (let i = 0; i<editions.length; i++) {

		console.log("+++++++++++++++++++++++++\nWORKING ON " + editions[i].title + "\n+++++++++++++++++++++++++");

		let tabDOM = make("h2", "edition_tab", editions[i].title, "edition_tab_" + i);

		tabsDOM.appendChild(tabDOM);

		let panelDOM = make("div", "edition_panel", undefined, "edition_panel_" + i);

		hide(panelDOM);

		if (i === 0) {
			firstPanelDOM = panelDOM;
			firstTabDOM = tabDOM;
		}

		tabDOM.addEventListener("click", function () {

			for (let j = 0; j < tabDOMs.length; j++) {
				if (tabDOMs[j] !== tabDOM) {
					hide(panelDOMs[j]);
					tabDOMs[j].classList.remove("selected");
				}
			}

			id("edition_logo").src = LOGO_PATH + "/" + editions[i].logo;
			id("edition_description").innerText = editions[i].description;
			tabDOM.classList.add("selected");

			show(panelDOM);

		});

		tabDOMs.push(tabDOM);
		panelDOMs.push(panelDOM);

		rootDOM.appendChild(panelDOM);
		loadVersions(editions[i], panelDOM);

	}

	if (editions.length > 0) {

		show(firstPanelDOM);
		show(tabsDOM);

		id("edition_logo").src = LOGO_PATH + "/" + editions[0].logo;
		id("edition_description").innerText = editions[0].description;
		firstTabDOM.classList.add("selected");

	}

}


function loadVersions(edition, panelDOM) {

	let versions = edition.versions;
	let upcomings = edition.upcomings;

	// Adds today as a special "version"

	versions.push({
		date: new Date().toISOString().substr(0,10),
		today: true
	});

	// Sorts versions by date

	versions.sort(function (v1, v2) {
		return Date.parse(v1.date) - Date.parse(v2.date);
	});

	// Generate timeline, years and versions

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

			let h1DOM = make("h1", "", firstDate.getFullYear() + i);

			let h2DOM = make("h3", "",
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

			let versionDOM = make("div", "version" + (i%2===0 ? "" : " alt"));

			if (versions[i].first || versions[i].today) {
				if (versions[i].first) {
					versionDOM.classList.add("endpoint");
					versionDOM.classList.add("first");
				}
				else if (versions[i].today) {
					versionDOM.classList.add("endpoint");
					versionDOM.classList.add("today");
					versionDOM.classList.add("nointeract");
				}
				let box = makeBox(versions[i], edition, date);
				box.appendChild(makePreview(versions[i]));
				versionDOM.appendChild(box);
			}
			else {
				versionDOM.appendChild(makePreview(versions[i]));
				versionDOM.classList.add("update-" + versions[i].type);
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

				upcRulerYearDOM.appendChild(make("h2", "", "????"));
				upcRulerYearDOM.appendChild(make("h3", "","Future"));

				upcVersionDOM.appendChild(makePreview(upcomings[i]));
				upcVersionDOM.classList.add("update-" + upcomings[i].type);

				upcVersionDOM.addEventListener("click", function () {
					showInfopanel(upcomings[i]);
				});

				upcYearDOM.appendChild(upcVersionDOM);
				upcTimelineDOM.appendChild(upcYearDOM);
				upcRulerDOM.appendChild(upcRulerYearDOM);

			}

			timelineDOM.appendChild(upcTimelineDOM);
			rulerDOM.appendChild(upcRulerDOM);

		}

		let timelinePanelDOM = make("div", "timeline-panel");

		timelinePanelDOM.appendChild(timelineDOM);

		panelDOM.appendChild(rulerDOM);
		panelDOM.appendChild(timelinePanelDOM);
		panelDOM.appendChild(make("div","ruler"));

	}

}

function makePreview(version) {

	let previewDOM = make("div", "preview");

	if (version.icon !== undefined) {
		let icon = make("img");
		icon.src = version.icon;
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

	let hasTitle = version.title !== undefined;
	let hasSubtitle = version.subtitle !== undefined;
	let hasDate = version.date !== undefined;
	let hasPossibleDate = version.possibleDate !== undefined;
	let hasFunFact = version.funFact !== undefined;
	let hasMainFeat = version.mainFeatures !== undefined;
	let hasMinorFeat = version.minorFeatures !== undefined;
	let hasLearnMore = version.learnMore !== undefined;


	if (hasTitle) {
		iPanelTitleDOM.innerText = version.title;
	}
	else if (hasSubtitle) {
		iPanelTitleDOM.innerText = version.subtitle;
	}
	else {
		iPanelTitleDOM.innerText = "Unknown Update";
	}

	if (hasSubtitle && hasTitle) {
		iPanelSubtitleDOM.innerText = version.subtitle + (hasDate || hasPossibleDate ? " • " : "");
	}
	else {
		iPanelSubtitleDOM.innerText = "";
	}

	if (hasDate) {
		let date = new Date(parseUTC(version.date));
		iPanelDateDOM.innerText = MONTH_NAMES[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
	}
	else if (hasPossibleDate) {
		iPanelDateDOM.innerText = version.possibleDate;
	}
	else {
		iPanelDateDOM.innerText = "";
	}

	if (hasFunFact) {
		show(iPanelFunFactDOM);
		iPanelFunFactDOM.innerText = version.funFact;
	}
	else {
		hide(iPanelFunFactDOM);
	}

	if (hasMainFeat) {
		show(iPanelMainLabelDOM);
		destroyChildren(iPanelMainFeatsDOM);

		for (let i = 0; i < version.mainFeatures.length; i++) {

			iPanelMainFeatsDOM.appendChild(make("li", "", version.mainFeatures[i].text));

		}

	}
	else {
		hide(iPanelMainLabelDOM);
		destroyChildren(iPanelMainFeatsDOM);
	}

	if (hasMinorFeat) {
		show(iPanelMinorLabelDOM);
		destroyChildren(iPanelMinorFeatsDOM);

		for (let i = 0; i < version.minorFeatures.length; i++) {

			iPanelMinorFeatsDOM.appendChild(make("li", "", version.minorFeatures[i].text));

		}

	}
	else {
		hide(iPanelMinorLabelDOM);
		destroyChildren(iPanelMinorFeatsDOM);
	}

	if (hasLearnMore) {
		show(iPanelLearnMoreDOM);
		iPanelLearnMoreDOM.href = version.learnMore.startsWith("#") ? WIKI_PATH + version.learnMore.substring(1,version.learnMore.length) : version.learnMore;
	}
	else {
		hide(iPanelLearnMoreDOM);
	}

	show(iPanelWrapperDOM);
}

function hideInfopanel() {
	hide(iPanelWrapperDOM);
}

// +++ Main +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

ajaxGET(JSON_URL, function (data, status) {

	if (status === 200) {

		let json;

		if (JSON.parse) {
			json = JSON.parse(data);
			loadEditions(json.editions);
		}
		else {
			show(id("gizmo_old"));
		}

		hide(id("gizmo_loading"));

	}
	else {
		alert('Fatal error: could not load version data. Error code: ' + xhr.status);
	}
});

document.addEventListener("keydown", function keyDownTextField(e) {

	if (e.key === "Escape" || e.key === "e") {
		hideInfopanel();
	}

}, false);

iPanelCloseDOM.addEventListener("click", hideInfopanel);