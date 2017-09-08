angular.module("Contoso.University")
.factory("CourseFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveCourse: function (url, course) {
            return ContosoFactory.save(url, course);
        },

        getCourses: function (url) {
            return ContosoFactory.get(url);
        },

        getCourseById: function (url, id) {
            return ContosoFactory.getById(url, id);
        },

        updateCourse: function (url, id, course) {
            return ContosoFactory.update(url, id, course);
        }
    }
}]);