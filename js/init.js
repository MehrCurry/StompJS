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

	// Let's set some values...
	radial1.setValueAnimated(70);
	radial2.setValueAnimated(41);
	radial3.setValueAnimated(70);

	var url = "ws://localhost:61614/stomp";
	var client = Stomp.client(url);

	client.connect(login, passcode, connect_callback, error_callback);

	error_callback = function(error) {
		// display the error's message header:
		alert(error.headers.message);
	};

	connect_callback = function() {
		alert("Connected!");
	};

	id = client.subscribe("/topic/observations", callback);

	callback = function(message) {
		// called when the client receives a Stomp message from the server
		if (message.body) {
			alert("got message with body " + message.body)
		} else {
			alert("got empty message");
		}
	}

	client.disconnect(function() {
		alert("See you next time!");
	})

}