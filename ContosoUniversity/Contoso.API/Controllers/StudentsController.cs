using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Contoso.Core.Domain;
using Contoso.Data.Context;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;

namespace Contoso.API.Controllers
{
    public class StudentsController : ApiController
    {
        private ContosoUniversityContext db = new ContosoUniversityContext();

        private SqlCommand cmd;
        private DataSet ds;
        private DataTable dt;
        private SqlDataAdapter da;

        // GET: api/Students
        public IHttpActionResult GetStudents()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["ContosoUniversityContext"].ConnectionString;
            SqlDataReader reader;

            List<Student> students = new List<Student>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand sqlCommand = new SqlCommand("Select * from Student", connection);
                reader = sqlCommand.ExecuteReader();

                while (reader.Read())
                {
                    var student = new Student();
                    student.Id = Convert.ToInt32(reader["Id"]);
                    student.LastName = reader["LastName"].ToString();
                    student.FirstMidName = reader["FirstName"].ToString();
                    student.EnrollmentDate = Convert.ToDateTime(reader["EnrollmentDate"]);
                    students.Add(student);
                }
            }
            
            //var students = await db.Students.ToListAsync();
            return Ok(students);
        }

        // GET: api/Students/5
        [ResponseType(typeof(Student))]
        public IHttpActionResult GetStudent(int id)
        {
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudent(int id, Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != student.Id)
            {
                return BadRequest();
            }

            db.Entry(student).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Students
        [ResponseType(typeof(Student))]
        public IHttpActionResult PostStudent(Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Students.Add(student);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [ResponseType(typeof(Student))]
        public IHttpActionResult DeleteStudent(int id)
        {
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            db.Students.Remove(student);
            db.SaveChanges();

            return Ok(student);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentExists(int id)
        {
            return db.Students.Count(e => e.Id == id) > 0;
        }
    }
}