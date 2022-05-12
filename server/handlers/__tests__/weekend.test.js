const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test.each([
    ['2022-05-08', 'true'],
    ['2022-05-09', 'false'],
    ['2022-05-10', 'false'],
    ['2022-05-11', 'false'],
    ['2022-05-12', 'false'],
])(`is %s weekend? %s`, async (input,result) => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/weekend",
        body:{
            n: input
        }
    });
    const response = httpMocks.createResponse();
    await mathHandler.weekend(request, response);
    expect(response._getJSONData()).toEqual({
        data: result,
        error: null
    });
});

