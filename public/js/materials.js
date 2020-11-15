// Colors
const WHITE = 0xFFFFFF;	
const SKY_LIGHT_COLOR = 0xB1E1FF; 		// light blue
const GROUND_LIGHT_COLOR = 0xB97A20;  	// brownish orange
const PLAYER_1_COLOR = 0xADD8F3;		// sky blue
const PLAYER_2_COLOR = 0xCBBAD2;		// lavendar
const BUILDING_COLOR = 0xEEEEEE;		// white
const CLIFF_COLOR = 0x916291;			
const GRASS_COLOR = 0x387342;			
const DOME_COLOR = 0x2090D5;			

// Materials
const buildingMaterial = new THREE.MeshLambertMaterial({color: BUILDING_COLOR});
const cliffMaterial = new THREE.MeshLambertMaterial({color: CLIFF_COLOR});
const grassMaterial = new THREE.MeshLambertMaterial({color: GRASS_COLOR});
const pawnOneMaterial = new THREE.MeshLambertMaterial({color: PLAYER_1_COLOR});
const pawnTwoMaterial = new THREE.MeshLambertMaterial({color: PLAYER_2_COLOR});
const domeMaterial = new THREE.MeshBasicMaterial({color: DOME_COLOR});

// Geometry
const coneHeight = 0.7;
const coneGeometry = new THREE.ConeGeometry(0.3, coneHeight);
const domeGeometry = new THREE.SphereGeometry(.4, 15, 15, 0, Math.PI * 2, Math.PI / 4, Math.PI);
