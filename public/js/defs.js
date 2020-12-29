// Players
const PLAYER_BLUE   = "blue";
const PLAYER_PURPLE = "purple";

// Object types
const OBJECT_TYPE_BUILDING = "building";
const OBJECT_TYPE_DOME = "dome";
const OBJECT_TYPE_PAWN_BLUE_F = "blue_f";
const OBJECT_TYPE_PAWN_BLUE_M = "blue_m";
const OBJECT_TYPE_PAWN_PURPLE_F = "purple_f";
const OBJECT_TYPE_PAWN_PURPLE_M = "purple_m";

function objectTypeIsPawn(objectType) {
	switch (objectType) {
		case OBJECT_TYPE_PAWN_BLUE_F: return true;
		case OBJECT_TYPE_PAWN_BLUE_M: return true;
		case OBJECT_TYPE_PAWN_PURPLE_F: return true;
		case OBJECT_TYPE_PAWN_PURPLE_M: return true;
	}
	return false;
}

function objectTypeToPawnPlayer(objectType) {
	switch (objectType) {
		case OBJECT_TYPE_PAWN_BLUE_F: return PLAYER_BLUE;
		case OBJECT_TYPE_PAWN_BLUE_M: return PLAYER_BLUE;
		case OBJECT_TYPE_PAWN_PURPLE_F: return PLAYER_PURPLE;
		case OBJECT_TYPE_PAWN_PURPLE_M: return PLAYER_PURPLE;
	}
	assert(false);
}

function isValidObjectType(objectType) {
	if (typeof objectType !== "string") return false;
	switch (objectType) {
		case OBJECT_TYPE_BUILDING:
		case OBJECT_TYPE_DOME:
		case OBJECT_TYPE_PAWN_BLUE_F:
		case OBJECT_TYPE_PAWN_BLUE_M:
		case OBJECT_TYPE_PAWN_PURPLE_F:
		case OBJECT_TYPE_PAWN_PURPLE_M:
			return true;
	}
	return false;
}

function isValidCoordinates(x, y, height) {
	if (!Number.isInteger(x)) return false;
	if (!Number.isInteger(y)) return false;
	if (!Number.isInteger(height)) return false;
	if (!(-2 <= x && x <= 2)) return false;
	if (!(-2 <= y && y <= 2)) return false;
	if (!(0 <= height && height <= 4)) return false;
	return true;
}
