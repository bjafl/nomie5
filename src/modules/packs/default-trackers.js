export default {
	label: `Nomie Starter Pack`,
	trackers: {
		mood: {
			tag: 'mood',
			type: 'range',
			color: '#FF3D00',
			math: 'mean',
			ignore_zeros: true,
			uom: 'num',
			emoji: '😶',
			default: '5',
			max: '10',
			min: '1',
			label: 'Mood',
			board: 'Mood',
		},
		sleep: {
			tag: 'sleep',
			type: 'timer',
			color: '#546E7A',
			math: 'sum',
			ignore_zeros: true,
			uom: 'timer',
			emoji: '🌓',
			label: 'Sleep',
		},
		sleep_quality: {
			tag: 'sleep_quality',
			type: 'range',
			color: '#546E7A',
			math: 'mean',
			ignore_zeros: true,
			uom: 'percent',
			emoji: '🌚',
			default: '60',
			max: '100',
			min: '10',
			one_tap: false,
			label: 'Sleep Quality',
		},
		water: {
			tag: 'water',
			type: 'value',
			color: '#0693E3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'oz',
			emoji: '💧',
			default: '12',
			max: '10',
			min: '1',
			label: 'Drank Water',
		},
		alcohol: {
			tag: 'alcohol',
			type: 'value',
			color: '#0693E3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'oz',
			emoji: '🍻',
			default: '12',
			label: 'Alcohol',
		},
		sex: {
			tag: 'sex',
			type: 'tick',
			color: '#EB144C',
			math: 'sum',
			ignore_zeros: false,
			uom: 'num',
			emoji: '🛌',
			one_tap: true,
			label: 'Sex',
		},
		pooped: {
			tag: 'pooped',
			type: 'tick',
			color: '#EB144C',
			math: 'sum',
			ignore_zeros: false,
			uom: 'num',
			emoji: '💩',
			one_tap: true,
			label: 'Pooped',
		},
		meditate: {
			tag: 'meditate',
			type: 'timer',
			color: '#369DD3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'timer',
			emoji: '🧘‍♀️',
			default: null,
			score: '3',
			score_calc: null,
			goal: null,
			one_tap: false,
			reminders: [],
			label: 'Meditate',
		},
		period_flow: {
			tag: 'period_flow',
			type: 'range',
			color: '#369DD3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'num',
			emoji: '🌸',
			default: null,
			max: '5',
			min: '0',
			score: null,
			score_calc: null,
			goal: null,
			one_tap: false,
			label: 'Period Flow',
		},
		good_deed: {
			tag: 'good_deed',
			type: 'tick',
			color: '#369DD3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'num',
			emoji: '🙌',
			default: null,
			score: '3',
			score_calc: null,
			goal: null,
			one_tap: true,
			label: 'Good Deed',
		},
		soda: {
			tag: 'soda',
			type: 'value',
			color: '#369DD3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'fluidounce',
			emoji: '🥤',
			default: '12',
			score: '-1',
			score_calc: null,
			goal: null,
			one_tap: false,
			label: 'Soda',
		},
		social: {
			tag: 'social',
			type: 'tick',
			color: '#369DD3',
			math: 'sum',
			ignore_zeros: false,
			uom: 'num',
			emoji: '👥',
			default: null,
			score: '1',
			score_calc: null,
			goal: null,
			one_tap: true,
			label: 'Was Social',
		},
	},
};

// meditation: {
// 	tag: 'meditation',
// 	type: 'timer',
// 	color: '#bd2da1',
// 	math: 'sum',
// 	ignore_zeros: false,
// 	uom: 'timer',
// 	emoji: '🧠',
// 	label: 'Meditate',
// 	board: 'Mood',
// },
