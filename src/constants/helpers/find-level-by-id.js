const findLevelById = (levels, id) => {
    return levels.find(level => level.id.toString() === id)
}

export default findLevelById