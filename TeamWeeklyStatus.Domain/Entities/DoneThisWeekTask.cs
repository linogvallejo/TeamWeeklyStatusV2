﻿namespace TeamWeeklyStatus.Domain.Entities
{
    public class DoneThisWeekTask
    {
        public int Id { get; set; }
        public string TaskDescription { get; set; }

        public int WeeklyStatusId { get; set; }
        public WeeklyStatus WeeklyStatus { get; set; }

        public List<Subtask> Subtasks { get; set; } = new List<Subtask>();
    }

}