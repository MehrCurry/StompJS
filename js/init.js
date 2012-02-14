var defaultDesign = steelseries.FrameDesign.GLOSSY_METAL;
var defaultBackgroundColor = steelseries.BackgroundColor.LIGHT_GRAY;
var defaultLcdColor = steelseries.LcdColor.GREEN;
var defaultLedColor = steelseries.LedColor.GREEN;
var defaultKnobType = steelseries.KnobType.METAL_KNOW;
var defaultKnobStyle = steelseries.KnobStyle.SILVER;

var dashboard = new Object();

var instrumentMapping = new Object();

String.prototype.format = function() {
	var formatted = this;
	for (arg in arguments) {
		formatted = formatted.replace("{" + arg + "}", arguments[arg]);
	}
	return formatted;
};

function init() {
	for ( var item = 1; item <= 8; item++) {
		var canv = document.createElement("canvas");
		canv.setAttribute('width', 20);
		canv.setAttribute('height', 20);

		canv.setAttribute('id', 'led' + item);
		document.body.appendChild(canv);
	}
	var br = document.createElement("br");
	document.body.appendChild(br);

	var table = document.createElement("table");
	document.body.appendChild(table);
	var row;

	for ( var item = 0; item < 24; item++) {
		if ((item % 8) == 0) {
			row = document.createElement("tr");
			table.appendChild(row);
		}
		var canv = document.createElement("canvas");
		var td = document.createElement("td");
		canv.setAttribute('width', 200);
		canv.setAttribute('height', 200);

		var id = 'radial' + item;
		canv.setAttribute('id', id);
		td.appendChild(canv);
		row.appendChild(td);
		var radial = new steelseries.Radial(id, {
			maxValue : 100,
			threshold : 100,
			thresholdVisible : false,
			frameDesign : defaultDesign,
			backgroundColor : defaultBackgroundColor,
			lcdColor : defaultLcdColor,
			ledColor : defaultLedColor,
			knobType : defaultKnobType,
			knobStyle : defaultKnobStyle
		});
		dashboard[id] = radial;
	}

	for ( var item = 0; item < 8; item++) {
		if ((item % 4) == 0) {
			row = document.createElement("tr");
			table.appendChild(row);
		}
		var canv = document.createElement("canvas");
		var td = document.createElement("td");
		td.colSpan = "2";
		canv.setAttribute('width', 400);
		canv.setAttribute('height', 140);

		var id = 'bar' + item;
		canv.setAttribute('id', id);
		td.appendChild(canv);
		row.appendChild(td);
		var bar = new steelseries.LinearBargraph(id, {
			width : 400,
			height : 140,
			maxValue : 100,
			threshold : 100,
			thresholdVisible : false,
			frameDesign : defaultDesign,
			backgroundColor : defaultBackgroundColor,
			lcdColor : defaultLcdColor,
			ledColor : defaultLedColor,
		});
		dashboard[id] = bar;
	}

	var display = new steelseries.DisplaySingle('displaySingle', {
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
	});

	var led1 = new steelseries.Led('led1', {
		ledColor : steelseries.LedColor.RED_LED
	});

	var led2 = new steelseries.Led('led2', {
		ledColor : steelseries.LedColor.YELLOW_LED
	});

	var led3 = new steelseries.Led('led3', {
		ledColor : steelseries.LedColor.GREEN_LED
	});
	var led4 = new steelseries.Led('led4', {
		ledColor : steelseries.LedColor.BLUE_LED
	});

	var led5 = new steelseries.Led('led5', {
		ledColor : steelseries.LedColor.ORANGE_LED
	});

	// Define some sections
	var sections = Array(steelseries.Section(0, 25, 'rgba(0, 0, 220, 0.3)'),
			steelseries.Section(25, 50, 'rgba(0, 220, 0, 0.3)'), steelseries
					.Section(50, 75, 'rgba(220, 220, 0, 0.3)'));

	// Define one area
	var areas = Array(steelseries.Section(75, 100, 'rgba(220, 0, 0, 0.3)'));

	// Create one radial gauge
	var radial1 = new steelseries.Clock('canvas1', {
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
	});

	// Create a second radial gauge
	var radial2 = new steelseries.Radial('canvas2', {
		gaugeType : steelseries.GaugeType.TYPE2,
		maxValue : 50,
		threshold : 40,
		thresholdVisible : false,
		section : Array(steelseries.Section(0, 40, 'rgba(0,255,0,0.3)')),
		area : Array(steelseries.Section(40, 50, 'rgba(255,0,0,0.5)')),
		titleString : 'Test',
		unitString : 'Unit',
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		pointerType : steelseries.PointerType.TYPE2,
		pointerColor : steelseries.ColorDef.BLUE,
		lcdColor : steelseries.LcdColor.BLUE2,
		ledColor : steelseries.LedColor.BLUE_LED,
	});

	// Create a radial bargraph gauge
	var radial3 = new steelseries.RadialBargraph('canvas3', {
		gaugeType : steelseries.GaugeType.TYPE3,
		maxValue : 60,
		titleString : "Sekunden",
		unitString : "",
		thresholdVisible : false,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial4 = new steelseries.Radial('canvas4', {
		titleString : 'Temperatur',
		unitString : '°C',
		minValue : -50,
		maxValue : 50,
		thresholdVisible : false,
		minMeasuredValueVisible : true,
		maxMeasuredValueVisible : true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial5 = new steelseries.Radial('canvas5', {
		titleString : 'Taupunkt',
		unitString : '°C',
		minValue : -50,
		maxValue : 50,
		thresholdVisible : false,
		minMeasuredValueVisible : true,
		maxMeasuredValueVisible : true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial6 = new steelseries.Radial('canvas6', {
		titleString : 'Luftdruck',
		unitString : 'hPa',
		minValue : 930,
		maxValue : 1070,
		thresholdVisible : false,
		minMeasuredValueVisible : true,
		maxMeasuredValueVisible : true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial7 = new steelseries.Radial('canvas7', {
		titleString : 'Wind',
		unitString : 'm/s',
		minValue : 0,
		maxValue : 50,
		thresholdVisible : false,
		minMeasuredValueVisible : true,
		maxMeasuredValueVisible : true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial8 = new steelseries.Compass('canvas8', {
		titleString : 'Windrichtung',
		unitString : '°',
		thresholdVisible : false,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial9 = new steelseries.Radial('canvas9', {
		titleString : 'Sicht',
		unitString : 'km',
		minValue : 0,
		maxValue : 20,
		thresholdVisible : false,
		minMeasuredValueVisible : true,
		maxMeasuredValueVisible : true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial10 = new steelseries.Radial('canvas10', {
		titleString : 'Durchsatz',
		unitString : 'msg/s',
		minValue : 0,
		maxValue : 20,
		thresholdVisible : false,
		minMeasuredValueVisible : true,
		maxMeasuredValueVisible : true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	instrumentMapping['sekunden'] = 'radial10';
	instrumentMapping['EDDH.TEMPERATUR'] = 'radial0';
	instrumentMapping['EDDH.WIND'] = 'radial1';
	instrumentMapping['EDDH.SICHT'] = 'radial2';
	instrumentMapping['Messages.DURCHSATZ'] = 'bar5';
	instrumentMapping['EDDH.LUFTDRUCK'] = 'radial3';

	dashboard["Test1"] = radial1;
	dashboard["Test2"] = radial2;
	dashboard["Test3"] = radial3;
	dashboard["EDDH.TEMPERATUR"] = radial4;
	dashboard["EDDH.TAUPUNKT"] = radial5;
	dashboard["EDDH.LUFTDRUCK"] = radial6;
	dashboard["EDDH.WIND"] = radial7;
	dashboard["EDDH.WINDRICHTUNG"] = radial8;
	dashboard["EDDH.SICHT"] = radial9;
	dashboard["Messages.DURCHSATZ"] = radial10;

	var url = "ws://localhost:61614/stomp";
	var client = Stomp.client(url);
	var login = "";
	var passcode = "";

	radial2.setValueAnimated(20);

	try {
		error_callback = function(error) {
			// display the error's message header:
			alert(error.headers.message);
		};

		connect_callback = function() {
			client.send("/queue/test", {
				priority : 9
			}, "Hello, Stomp");
			id = client.subscribe("/topic/observationsWeb", callback);
			led1.setLedOnOff(true);
		};

		client.connect(login, passcode, connect_callback, error_callback);
		radial2.setValueAnimated(30);

		callback = function(message) {
			// called when the client receives a Stomp message from the server
			if (message.body) {
				// alert("got message with body " + message.body);
				var data = message.body;
				var payload = jQuery.parseJSON(data);
				if (payload["de.gzockoll.prototype.camel.InstrumentConfiguration"] != undefined) {
					configureInstrument(payload["de.gzockoll.prototype.camel.InstrumentConfiguration"]);
				}
				radial = dashboard[instrumentMapping[payload.key]];
				if (radial != undefined && payload.value != undefined
						&& !isNaN(payload.value)) {
					radial.setValueAnimated(payload.value);
				} else {
					console.log(payload.radialvalue + " not a number");
				}
			} else {
				// display.setText("got empty message")
			}
		};

		radial2.setValueAnimated(40);
	}

	catch (e) {

		alert("Fehler: " + e);

	}

	finally {
		// client.disconnect(function() {
		// alert("See you next time!");
		// });
		radial2.setValueAnimated(70);
	}

}
function resetMinMax(gauge) {
	gauge.resetMinMeasuredValue();
	gauge.resetMaxMeasuredValue();
}

function resetAllMinMax() {
	return false;
}

function configureInstrument(config) {
	try {
		instrument = dashboard[instrumentMapping[config.name]];
		if (instrument != null) {
			if (config.title != null)
				instrument.setTitleString(config.title);
			if (config.unit != null)
				instrument.setUnitString(config.unit);
			if (config.max != undefined)
				instrument.setMaxValue(config.max.$);
			if (config.min != undefined)
				instrument.setMinValue(config.min.$);
			instrument.setArea(convertToSection(config.areas["de.gzockoll.prototype.camel.ColoredRange"]));
			instrument.setSection(convertToSection(config.sections["de.gzockoll.prototype.camel.ColoredRange"]));
		}
	} catch (e) {
		// alert("Fehler: " + e);
	}
}

function convertToSection(ranges) {
	var areas = Array();
	for ( var i = 0; i < ranges.length; i++) {
		var a = ranges[i];
		var section = new steelseries.Section(parseInt(a.range.min.$),
				parseInt(a.range.max.$), "rgba({0},{1},{2},{3})".format(
						a.rgba.red, a.rgba.green, a.rgba.blue,
						a.rgba.alpha/256.0))
		areas.push(section);
	}
	return areas;

}

function configureAreas(instrument,ranges) {

}