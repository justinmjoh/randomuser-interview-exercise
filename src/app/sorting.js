export function sortByFirstName(sortMethod) {
    return (a, b) => {
        // Multiply return value by order to set ascending / descending
        if (a.name.first < b.name.first) {
            return -1 * sortMethod.order;
        } else if (a.name.first > b.name.first) {
            return 1 * sortMethod.order;
        } else {
            return 0;
        }
    }
}

export function sortByLastName(sortMethod) {
    return (a,b) => {
        // Multiply return value by order to set ascending / descending
        if (a.name.last < b.name.last) {
            return -1 * sortMethod.order;
        } else if (a.name.last > b.name.last) {
            return 1 * sortMethod.order;
        } else {
            return 0;
        }
    }
}

export function sortByDOB(sortMethod) {
    return (a,b) => {
        // Construct temporary Date objects for comparison
        const dateA = new Date(a.dob.date);
        const dateB = new Date(b.dob.date);

        // Multiply return value by order to set ascending / descending
        if (dateA < dateB) {
            return -1 * sortMethod.order;
        } else if (dateA > dateB) {
            return 1 * sortMethod.order;
        } else {
            return 0;
        }
    }
}