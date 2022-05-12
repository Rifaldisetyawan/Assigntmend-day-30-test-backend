const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");


jest.mock("../../../storage/models/math.model", () => {
    return {
        weekend: jest.fn()
    };
})

test("[mock]except weekend is return true", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/weekend",
        body: {
            n:'2022-05-12'
        },
    });
    const response = httpMocks.createResponse();
    mathModel.weekend.mockResolvedValue('true')
    await mathHandler.weekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 'true',
        error: null
    });
});