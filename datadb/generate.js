module.exports = function() {
    const { faker } = require("@faker-js/faker");
    const _ = require("lodash");
    return {
        people: _.times(100, function(n) {
            return {
                id: n,
                name: faker.name.fullName(),
                email: faker.internet.email()
            }

        }      
        )
    }
}