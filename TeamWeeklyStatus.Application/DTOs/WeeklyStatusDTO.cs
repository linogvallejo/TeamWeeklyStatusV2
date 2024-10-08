﻿namespace TeamWeeklyStatus.Application.DTOs
{
    public class WeeklyStatusDTO
    {
        public int Id { get; set; }
        public DateTime WeekStartDate { get; set; }
        public List<DoneThisWeekTaskDTO> DoneThisWeek { get; set; }
        public List<PlanForNextWeekTaskDTO> PlanForNextWeek { get; set; }
        public string Blockers { get; set; }
        public List<DateTime> UpcomingPTO { get; set; }
        public int MemberId { get; set; }

        public int TeamId { get; set; }

    }
}
