namespace Contoso.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ContosoMigration : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Enrollment", "CourseId", "dbo.Course");
            DropForeignKey("dbo.CourseInstructor", "CourseId", "dbo.Course");
            DropPrimaryKey("dbo.Course");
            AlterColumn("dbo.Course", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Course", "Id");
            AddForeignKey("dbo.Enrollment", "CourseId", "dbo.Course", "Id", cascadeDelete: true);
            AddForeignKey("dbo.CourseInstructor", "CourseId", "dbo.Course", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CourseInstructor", "CourseId", "dbo.Course");
            DropForeignKey("dbo.Enrollment", "CourseId", "dbo.Course");
            DropPrimaryKey("dbo.Course");
            AlterColumn("dbo.Course", "Id", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Course", "Id");
            AddForeignKey("dbo.CourseInstructor", "CourseId", "dbo.Course", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Enrollment", "CourseId", "dbo.Course", "Id", cascadeDelete: true);
        }
    }
}
