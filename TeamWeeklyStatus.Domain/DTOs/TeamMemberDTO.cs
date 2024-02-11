﻿
namespace TeamWeeklyStatus.Domain.DTOs
{
    public class TeamMemberDTO
    {
        public int TeamId { get; set; }
        public string? TeamName { get; set; }
        public int MemberId { get; set; }
        public string? MemberName { get; set; }
        public bool? IsTeamLead { get; set; }
        public bool? IsCurrentWeekReporter { get; set; }
        public bool? IsAdminMember { get; set; }
        public DateTime? StartActiveDate { get; set; }
        public DateTime? EndActiveDate { get; set; }

    }
}
