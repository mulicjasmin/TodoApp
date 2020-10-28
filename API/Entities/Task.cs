using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace API.Entities
{
    [Table("Tasks")]
    public class Task
    {
        public enum Status
        {
            Open,
            InProgress,
            Completed
        }
        public int Id { get; set; }
        public string name { get; set; }
        public DateTime timeSpent { get; set; }
        public Status status { get; set; }
        public int AppUserId { get; set; }
        public AppUser User { get; set; }
    }
}