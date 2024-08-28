import { sortByFirstName, sortByLastName, sortByDOB } from "@/app/sorting";

const testSortMethodStandard = {
    "field":"",
    "order":1
} // field is left as empty to ensure sorting method does not branch on user-specified descriptor, order is 1 (ascending)

const testDataSmall = [
    {
        "name":{"title":"Mr","first":"Gene","last":"Tucker"},
        "location":{"street":{"number":6417,"name":"Plum St"},"city":"Elk Grove","state":"Nebraska","country":"United States","postcode":45523,"coordinates":{"latitude":"-51.7171","longitude":"-0.9521"},"timezone":{"offset":"+3:30","description":"Tehran"}},
        "dob":{"date":"1958-08-17T04:21:21.827Z","age":66}},
    {
        "name":{"title":"Ms","first":"Annie","last":"Miles"},
        "location":{"street":{"number":4346,"name":"Depaul Dr"},"city":"Minneapolis","state":"Oregon","country":"United States","postcode":64794,"coordinates":{"latitude":"-49.0989","longitude":"-33.0359"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},
        "dob":{"date":"1949-01-11T20:34:25.316Z","age":75}
    }
];

test("Sorts 2 user correctly by first name", () => {
    testDataSmall.sort(sortByFirstName(testSortMethodStandard));
    expect(testDataSmall[0].name.first).toBe("Annie");
});

test("Sorts 2 user correctly by last name", () => {
    testDataSmall.sort(sortByLastName(testSortMethodStandard));
    expect(testDataSmall[0].name.first).toBe("Annie");
});

test("Sorts 2 user correctly by DOB", () => {
    testDataSmall.sort(sortByDOB(testSortMethodStandard));
    expect(testDataSmall[0].name.first).toBe("Annie");
});