angular.module("Contoso.University")
.factory("InstructorFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveInstructor: function (url, instructor) {
            return ContosoFactory.save(url, instructor);
        },

        getInstructors: function (url) {
            return ContosoFactory.get(url);
        },

        getInstructorById: function (url, id) {
            return ContosoFactory.getById(url, id);
        },

        updateInstructor: function (url, id, instructor) {
            return ContosoFactory.update(url, id, instructor);
        },

        deleteInstructor: function (url, id) {
            return ContosoFactory.delete(url, id);
        }
    }
}]);