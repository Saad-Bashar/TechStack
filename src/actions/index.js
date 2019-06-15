export const selectLibrary = id => {
	return {
		type: 'select_library',
		payload: id,
	};
};

export const deleteLibrary = () => {
	return {
		type: 'select_library',
	};
};
