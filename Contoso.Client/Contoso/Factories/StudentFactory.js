angular.module("Contoso.University")
.factory("StudentFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveStudent: function (url, student) {
            return ContosoFactory.save(url, student);
        },

        getStudents: function (url) {
            return ContosoFactory.get(url);
        },

        getStudentById: function (url, id) {
            return ContosoFactory.getById(url, id);
        },

        updateStudent: function (url, id, student) {
            return ContosoFactory.update(url, id, student);
        },

        deleteStudent: function (url, id) {
            return ContosoFactory.delete(url, id);
        }
    }
}]);