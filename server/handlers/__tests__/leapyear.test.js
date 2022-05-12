const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test.each([
    [2000, 'true'],
    [2001, 'false'],
    [2002, 'false'],
    [2003, 'false'],
    [2004, 'true'],
])('is %d leap years? %s', async (input,result) => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/leapyear",
        body:{
            n: input
        }
    });
    const response = httpMocks.createResponse();
    await mathHandler.leapYear(request, response);
    expect(response._getJSONData()).toEqual({
        data: result,
        error: null
    });
});
