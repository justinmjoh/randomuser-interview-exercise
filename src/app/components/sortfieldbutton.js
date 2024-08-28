/**
 * State managed button that drives sorting operations and uses
 * directional arrows to imply current (ascending / descending) order
 * of dataset
 * 
 * @param {*} sortendMethod  Metadata for sorting state (field, order)
 * @param {*} sortAction State controller for metadata
 * @param {*} field Field to sort on (handle in outside sorting algorithm)
 * @returns JSX
 */
export function SortFieldButton({sortMethod, sortAction, field, children}) {
    let style = "";
    let arrow = "\u2195"; // Initial bidirectional arrow
    if (sortMethod != null && sortMethod.field == field) {
        style = "underline" // Darken to imply current sorting field
        if (sortMethod.order == 1) {
            arrow = "\u2193"; // Set arrow to point down (ascending)
        } else if (sortMethod.order == -1) {
            arrow = "\u2191"; // Set arrow to point up (descendig)
        }
    }

    return (
        <button className={style} type="button" onClick={() => sortAction(field)}>
            {children}{arrow}
        </button>
    );
}