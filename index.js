// Code your solution
const findMatching = (drivers, driveName) =>
    drivers.filter(driver =>
       driver.toLowerCase() === driveName.toLowerCase()
        )

const fuzzyMatch = (drivers, names) => {
    return drivers.filter(
        driveName => driveName.slice(0, names.length) === names
    )
}

const matchName = (drivers, string) => {
    return drivers.filter(
        driveName => driveName.name === string
    )
}