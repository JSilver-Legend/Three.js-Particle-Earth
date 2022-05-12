export const config = {
	urls: {
		globeTexture: '../assets/textures/earth_dark.jpg',
		pointTexture: '../assets/imgs/disc.png'
	},
	sizes: {
		globe: 200,
		globeDotSize: 1.5
	},
	scale: {
		points: 0.025,
		markers: 0.025,
		globeScale: 1.39,
	},
	rotation: {
		globe: 0.001
	},
	colors: {
		globeDotColor: 'rgb(225, 0, 0)',
		globeDotColor1: 'rgb(225, 0, 0)',
		globeDotColor2: 'rgb(0, 225, 0)',
		globeDotColor3: 'rgb(225, 225, 225)',
		globeMarkerColor: 'rgb(143, 216, 216)',
		globeMarkerGlow: 'rgb(255, 255, 255)',
		globeLines: 'rgb(255, 255, 255)',
		globeLinesDots: 'rgb(255, 255, 255)'
	},
	display: {
		points: true,
		map: true,
		lines: true,
		markers: true,
		markerLabel: false,
		markerPoint: false
	},
	dots: {
		total: 30
	}
}
const earth = {
	positions: [],
}

const elements = {
	globe: null,
	atmosphere: null,
	globePoints: null,
	lineDots: [],
	markers: [],
	markerLabel: [],
	markerPoint: [],
	lines: []
}

const textures = {
	markerLabels: []
}

const groups = {
	map: null,
	main: null,
	globe: null,
	lines: null,
	points: null,
	markers: null,
	atmosphere: null,
	lineDots: null,
}

const countries = {
	interval: 20000,
	selected: null,
	index: 0
}

const animations = {
	rotateGlobe: true
}