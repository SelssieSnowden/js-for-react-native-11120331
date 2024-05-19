function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

module.exports = {
    createUserProfiles
};