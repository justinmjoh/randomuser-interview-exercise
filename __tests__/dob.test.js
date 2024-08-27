import { formatDOB, checkBirthday } from "../src/app/dob";

test("Formats Date January 1, 2000 to 1/1/2000", ()=> {
    expect(formatDOB(new Date(2000, 0, 1))).toBe("1/1/2000");
});

test("Correctly shows birthday has passed", () => {
    const birtday = new Date(2000, 0, 1); // Born January 1, 2000 
    const today  = new Date(2001, 0, 2); // Today is 1 day after birthday (different year)
    expect(checkBirthday(birtday, today)).toBe("Already happened");
});

test("Correctly shows birthday is today", () => {
    const birtday = new Date(2000, 0, 2); // Born January 2, 2000 
    const today  = new Date(2001, 0, 2); // Today is birthday (different year)
    expect(checkBirthday(birtday, today)).toBe("Today!");
});

test("Correctly shows birthday is yet to happen", () => {
    const birtday = new Date(2000, 0, 2); // Born January 2, 2000 
    const today  = new Date(2001, 0, 1); // Today day before birthday (different year)
    expect(checkBirthday(birtday, today)).toBe("Has yet to occur");
});