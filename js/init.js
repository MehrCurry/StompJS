function init() {
	// Define some sections
	var sections = Array(steelseries.Section(0, 25, 'rgba(0, 0, 220, 0.3)'),
			steelseries.Section(25, 50, 'rgba(0, 220, 0, 0.3)'), steelseries
					.Section(50, 75, 'rgba(220, 220, 0, 0.3)'));

	// Define one area
	var areas = Array(steelseries.Section(75, 100, 'rgba(220, 0, 0, 0.3)'));

	// Create one radial gauge
	var radial1 = new steelseries.Radial('canvas1', {
		section : sections,
		area : areas,
		titleString : 'Test',
		unitString : 'Unit',
		pointerType : steelseries.PointerType.TYPE8
	});

	// Create a second radial gauge
	var radial2 = new steelseries.Radial('canvas2', {
		gaugeType : steelseries.GaugeType.TYPE2,
		maxValue : 50,
		threshold : 40,
		section : Array(steelseries.Section(0, 40, 'rgba(0,255,0,0.3)')),
		area : Array(steelseries.Section(40, 50, 'rgba(255,0,0,0.5)')),
		titleString : 'Test',
		unitString : 'Unit',
		frameDesign : steelseries.FrameDesign.CHROME,
		backgroundColor : steelseries.BackgroundColor.LIGHT_GRAY,
		pointerType : steelseries.PointerType.TYPE2,
		pointerColor : steelseries.ColorDef.BLUE,
		lcdColor : steelseries.LcdColor.BLUE2,
		ledColor : steelseries.LedColor.BLUE_LED,
	});

	// Create a radial bargraph gauge
	var radial3 = new steelseries.RadialBargraph('canvas3', {
		gaugeType : steelseries.GaugeType.TYPE3,
		titleString : "Title",
		unitString : "Unit",
		frameDesign : steelseries.FrameDesign.BLACK_METAL,
		backgroundColor : steelseries.BackgroundColor.LIGHT_GRAY,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial4 = new steelseries.Radial('canvas4', {
		titleString : 'Temperatur',
		unitString : '°C',
		minValue: -50,
		maxValue: 50,
		frameDesign : steelseries.FrameDesign.BLACK_METAL,
		backgroundColor : steelseries.BackgroundColor.LIGHT_GRAY,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial5 = new steelseries.Radial('canvas5', {
		titleString : 'Luftdruck',
		unitString : 'hPa',
		minValue: 900,
		maxValue: 1100,
		frameDesign : steelseries.FrameDesign.BLACK_METAL,
		backgroundColor : steelseries.BackgroundColor.LIGHT_GRAY,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial6 = new steelseries.Radial('canvas6', {
		titleString : 'Wind',
		unitString : 'm/s',
		minValue: 0,
		maxValue: 50,
		frameDesign : steelseries.FrameDesign.BLACK_METAL,
		backgroundColor : steelseries.BackgroundColor.LIGHT_GRAY,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var radial7 = new steelseries.Compass('canvas7', {
		titleString : 'Windrichtung',
		unitString : '°',
		frameDesign : steelseries.FrameDesign.BLACK_METAL,
		backgroundColor : steelseries.BackgroundColor.LIGHT_GRAY,
		valueColor : steelseries.ColorDef.YELLOW,
		lcdColor : steelseries.LcdColor.YELLOW,
		ledColor : steelseries.LedColor.YELLOW_LED,
	});

	var dashboard = new Object();
	dashboard["Test1"]=radial1;
	dashboard["Test2"]=radial2;
	dashboard["Test3"]=radial3;
	dashboard["Temperatur"]=radial4;
	dashboard["Luftdruck"]=radial5;
	dashboard["Wind"]=radial6;
	dashboard["Windrichtung"]=radial7;
	
	
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
			id = client.subscribe("/topic/observations", callback);
			// alert("Connected!");
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
                if (radial != undefined && payload.val != undefined && !isNaN(payload.val)) {
                    radial.setValueAnimated(payload.val);
                } else {
                    console.log(payload.radialvalue + " not a number");
                }
			} else {
				alert("got empty message");
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