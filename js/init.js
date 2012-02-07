var radial1;
var radial2;
var radial3;
var radial4;
var radial5;
var radial6;
var radial7;
var radial8;
var radial9;
var radial10;
var radial11;
var radial12;

var defaultDesign=steelseries.FrameDesign.GLOSSY_METAL;
var defaultBackgroundColor=steelseries.BackgroundColor.LIGHT_GRAY;

function init() {

	var display = new steelseries.DisplaySingle('displaySingle' , {
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
	});

	var led1 = new steelseries.Led('led1' , {
		ledColor : steelseries.LedColor.RED_LED
	});

	var led2 = new steelseries.Led('led2' , {
		ledColor : steelseries.LedColor.YELLOW_LED
	});

	var led3 = new steelseries.Led('led3' , {
		ledColor : steelseries.LedColor.GREEN_LED
	});
	var led4 = new steelseries.Led('led4' , {
		ledColor : steelseries.LedColor.BLUE_LED
	});

	var led5 = new steelseries.Led('led5' , {
		ledColor : steelseries.LedColor.ORANGE_LED
	});

	// Define some sections
	var sections = Array(steelseries.Section(0, 25, 'rgba(0, 0, 220, 0.3)'),
			steelseries.Section(25, 50, 'rgba(0, 220, 0, 0.3)'), steelseries
					.Section(50, 75, 'rgba(220, 220, 0, 0.3)'));

	// Define one area
	var areas = Array(steelseries.Section(75, 100, 'rgba(220, 0, 0, 0.3)'));

	// Create one radial gauge
	radial1 = new steelseries.Clock('canvas1', {
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
	});

	// Create a second radial gauge
	radial2 = new steelseries.Radial('canvas2', {
		gaugeType : steelseries.GaugeType.TYPE2,
		maxValue : 50,
		threshold : 40,
		thresholdVisible: false,
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
	radial3 = new steelseries.RadialBargraph('canvas3', {
		gaugeType : steelseries.GaugeType.TYPE3,
		maxValue : 60,
		titleString : "Sekunden",
		unitString : "",
		thresholdVisible: false,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial4 = new steelseries.Radial('canvas4', {
		titleString : 'Temperatur',
		unitString : '°C',
		minValue: -50,
		maxValue: 50,
		thresholdVisible: false,
		minMeasuredValueVisible: true,
		maxMeasuredValueVisible: true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial5 = new steelseries.Radial('canvas5', {
		titleString : 'Taupunkt',
		unitString : '°C',
		minValue: -50,
		maxValue: 50,
		thresholdVisible: false,
		minMeasuredValueVisible: true,
		maxMeasuredValueVisible: true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial6 = new steelseries.Radial('canvas6', {
		titleString : 'Luftdruck',
		unitString : 'hPa',
		minValue: 930,
		maxValue: 1070,
		thresholdVisible: false,
		minMeasuredValueVisible: true,
		maxMeasuredValueVisible: true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial7 = new steelseries.Radial('canvas7', {
		titleString : 'Wind',
		unitString : 'm/s',
		minValue: 0,
		maxValue: 50,
		thresholdVisible: false,
		minMeasuredValueVisible: true,
		maxMeasuredValueVisible: true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial8 = new steelseries.Compass('canvas8', {
		titleString : 'Windrichtung',
		unitString : '°',
		thresholdVisible: false,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial9 = new steelseries.Radial('canvas9', {
		titleString : 'Sicht',
		unitString : 'km',
		minValue: 0,
		maxValue: 20,
		thresholdVisible: false,
		minMeasuredValueVisible: true,
		maxMeasuredValueVisible: true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	radial10 = new steelseries.Radial('canvas10', {
		titleString : 'Durchsatz',
		unitString : 'msg/s',
		minValue: 0,
		maxValue: 20,
		thresholdVisible: false,
		minMeasuredValueVisible: true,
		maxMeasuredValueVisible: true,
		frameDesign : defaultDesign,
		backgroundColor : defaultBackgroundColor,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var dashboard = new Object();
	dashboard["Test1"]=radial1;
	dashboard["Test2"]=radial2;
	dashboard["Test3"]=radial3;
	dashboard["EDDH.Temperatur"]=radial4;
	dashboard["EDDH.Taupunkt"]=radial5;
	dashboard["EDDH.Luftdruck"]=radial6;
	dashboard["EDDH.Wind"]=radial7;
	dashboard["EDDH.Windrichtung"]=radial8;
	dashboard["EDDH.Sicht"]=radial9;
	dashboard["MessagesPerMinute"]=radial10;


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
			client.send("/queue/test", {priority: 9}, "Hello, Stomp");
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
                radial=dashboard[payload.key];
                if (radial != undefined && payload.value != undefined && !isNaN(payload.value)) {
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
//		client.disconnect(function() {
//			alert("See you next time!");
//		});
		radial2.setValueAnimated(70);
	}

}
function resetMinMax(gauge) {
	gauge.resetMinMeasuredValue();
	gauge.resetMaxMeasuredValue();
}

function resetAllMinMax() {
	resetMinMax(radial4);
	resetMinMax(radial5);
	resetMinMax(radial6);
	resetMinMax(radial7);
	resetMinMax(radial8);
	resetMinMax(radial9);
	return false;
}