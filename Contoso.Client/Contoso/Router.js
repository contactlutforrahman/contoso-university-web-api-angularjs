angular.module("Contoso.University")
    .config(["$urlRouterProvider", "$stateProvider", "$locationProvider", "$ocLazyLoadProvider", function ($urlRouterProvider, $stateProvider, $locationProvider, $ocLazyLoadProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "Contoso/Views/Home.html",
            controller: "HomeController",
        })

        .state("home.students", {
            url: "students",
            title: "Student Lists",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Students/List.html",
                    controller: "StudentController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/StudentController.js", "Contoso/Factories/StudentFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

        .state("home.CreateStudent", {
            url: "create-student",
            title: "Create Student",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Students/Create.html",
                    controller: "StudentController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/StudentController.js", "Contoso/Factories/StudentFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

            .state("home.editStudent", {
                url: "edit-student/{studentId}",
                title: "Edit Student",
                views: {
                    'subcontents': {
                        templateUrl: "Contoso/Views/Students/Edit.html",
                        controller: "StudentController",
                        resolve: {
                            deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                                return $ocLazyLoad.load(["Contoso/Controllers/StudentController.js", "Contoso/Factories/StudentFactory.js", "Contoso/Factories/ContosoFactory.js"])
                            }]
                        }
                    }
                }
            })

        .state("home.courses", {
            url: "courses",
            title: "Course Lists",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Courses/List.html",
                    controller: "CourseController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/CourseController.js", "Contoso/Factories/CourseFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

        .state("home.createCourse", {
            url: "create-course",
            title: "Create Course",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Courses/Create.html",
                    controller: "CourseController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/CourseController.js", "Contoso/Factories/CourseFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

        .state("home.instructors", {
            url: "instructors",
            title: "Instructor Lists",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Instructors/List.html",
                    controller: "InstructorController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/InstructorController.js", "Contoso/Factories/InstructorFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

        .state("home.createInstructor", {
            url: "create-instructor",
            title: "Create Instructor",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Instructors/Create.html",
                    controller: "InstructorController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/InstructorController.js", "Contoso/Factories/InstructorFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

        .state("home.departments", {
            url: "departments",
            title: "Department Lists",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Departments/List.html",
                    controller: "DepartmentController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/DepartmentController.js", "Contoso/Factories/DepartmentFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })



        .state("home.createDepartment", {
            url: "create-department",
            title: "Create Department",
            views: {
                'subcontents': {
                    templateUrl: "Contoso/Views/Departments/Create.html",
                    controller: "DepartmentController",
                    resolve: {
                        deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load(["Contoso/Controllers/DepartmentController.js", "Contoso/Factories/DepartmentFactory.js", "Contoso/Factories/ContosoFactory.js"])
                        }]
                    }
                }
            }
        })

        $locationProvider.html5Mode(true);

    }]);