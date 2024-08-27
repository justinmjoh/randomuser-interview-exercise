/**
 * Format the date of birth Date object to "MM/DD/YYYY" string
 * uses UTC methods to avoid off-by-1 errors based on locality
 * 
 * @param {*} dob Date
 * @returns formatted "MM/DD/YYYY" DOB string
 */
export function formatDOB(dob) {
    // Use UTC methods to avoid timezone off-by-1 case
    return `${dob.getUTCMonth()+1}/${dob.getUTCDate()}/${dob.getUTCFullYear()}`;
}
  
/**
 * Compares Dates dob and today to check if they have passed, are occurring, or yet to occur
 * within a given year. Returns descriptive string based on comparison status.
 * 
 * @param {*} dob Date of birth Date
 * @param {*} today Comparison Date (intended use is today)
 * @returns Descriptor message of whether birthdat has occurred
 */
export function checkBirthday(dob, today) {
    if (dob.getUTCMonth() > today.getUTCMonth()) {
        return "Has yet to occur";
    } else if (dob.getUTCMonth == today.getUTCMonth && dob.getUTCDate() > today.getUTCDate()) {
        return "Has yet to occur";
    } else if (dob.getUTCMonth() == today.getUTCMonth() && dob.getUTCDate() == today.getUTCDate()) {
        return "Today!";
    } else {
        return "Already happened";
    }
}