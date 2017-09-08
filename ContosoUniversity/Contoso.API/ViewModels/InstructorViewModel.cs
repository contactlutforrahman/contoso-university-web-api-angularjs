using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Contoso.API.ViewModels
{
    public class InstructorViewModel
    {
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public DateTime HireDate { get; set; }
        public string Location { get; set; }
        public int CourseId { get; set; }
    }
}