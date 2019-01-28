// --- Constant values ----------------------------------------

const JSON_URL = "https://raw.githubusercontent.com/minecraft-timeline/minecraft-timeline.github.io/master/version_data.json";
const YEAR_HEIGHT_PX = 600;

// --- Helper functions ---------------------------------------

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

function hide(element) {
	element.classList.add("hidden");
}

function show(element) {
	element.classList.remove("hidden");
}

// --- Worker functions ---------------------------------------

function loadEditions(editions) {

	let tabsDOM = id("editions_tab");
	let rootDOM = id("editions_root");

	for (let i = 0; i<editions.length; i++) {
		let tabDOM = document.createElement("span");
		tabDOM.appendChild(document.createTextNode(editions[i].title));
		tabDOM.id = "edition_panel_" + i;
		tabsDOM.appendChild(tabDOM);
		let panelDOM = document.createElement("div");
		if (i !== 0)
			hide(panelDOM);
		rootDOM.appendChild(panelDOM);
		loadVersions(editions[i].versions, panelDOM);
	}
}

function loadVersions(versions, panelDOM) {

	versions.sort(function (v1, v2) {
		return Date.parse(v1.date) - Date.parse(v2.date);
	});

	let lastTimeMs = Date.parse(versions[versions.length-1].date);
	let firstTimeMs = Date.parse(versions[0].date);
	let totalTimeMs = versions.length > 1 ? lastTimeMs - firstTimeMs : 0;
	let height = (totalTimeMs/31536000000) * YEAR_HEIGHT_PX;

	console.log(height);

	let timelineDOM = document.createElement("div");
	timelineDOM.classList.add("timeline");
	timelineDOM.style.height = Math.floor(height) + "px";

	panelDOM.appendChild(timelineDOM);

	for (let i = 0; i < versions.length; i++) {
		let versionDOM = document.createElement("div");
		versionDOM.classList.add("version");
		versionDOM.style.top = Math.floor(((Date.parse(versions[i].date) - firstTimeMs)/31536000000) * YEAR_HEIGHT_PX) + "px";
		timelineDOM.appendChild(versionDOM);
	}

}

// --- Main ---------------------------------------------------

ajaxGET(JSON_URL, function (data, status) {
	if (status === 200) {
		hide(id("gizmo_loading"));

		let json;
		try {
			json = JSON.parse(data);
		}
		catch (e) {
			show(id("gizmo_old"));
		}
		finally {
			loadEditions(json.editions);
		}

	}
	else {
		alert('Fatal error: could not load version data. Error code: ' + xhr.status);
	}
});