const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

jest.mock("../../../storage/models/math.model", () => {
    return {
        leapYear: jest.fn()
    };
})

test("[mock] year returned always true", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/leapyear",
        body: {
            n:2002
        },
    });
    const response = httpMocks.createResponse();
    mathModel.leapYear.mockResolvedValue('true')
    await mathHandler.leapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 'true',
        error: null
    });
});