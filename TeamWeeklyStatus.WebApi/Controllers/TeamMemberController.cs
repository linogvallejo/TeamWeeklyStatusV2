﻿using Microsoft.AspNetCore.Mvc;
using TeamWeeklyStatus.Application.DTOs;
using TeamWeeklyStatus.Application.Interfaces;
using TeamWeeklyStatus.WebApi.DTOs;

namespace TeamWeeklyStatus.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamMemberController : ControllerBase
    {
        private readonly ITeamMemberService _teamMemberService;
        public TeamMemberController(ITeamMemberService teamMemberService)
        {
            _teamMemberService = teamMemberService;
        }

        [HttpPost("GetAll")]
        public async Task<IActionResult> GetAllTeamMembers([FromBody] TeamMemberRequest request)
        {
            var members = await _teamMemberService.GetAllTeamMembersAsync((int)request.TeamId);
            if (members == null)
            {
                return NotFound();
            }
            return Ok(members);
        }

        [HttpPost("Add")]
        public async Task<IActionResult> AddTeamMember([FromBody] TeamMemberPostRequest request)
        {
            var teamMemberDto = new TeamMemberDTO
            {
                TeamId = request.TeamId,
                MemberId = request.MemberId,
                IsTeamLead = request.IsTeamLead,
                IsCurrentWeekReporter = request.IsCurrentWeekReporter,
                StartActiveDate = request.StartActiveDate,
                EndActiveDate = request.EndActiveDate
            };

            var addedTeamMember = await _teamMemberService.AddTeamMemberAsync(teamMemberDto);
            return Ok(addedTeamMember);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateTeamMember([FromBody] TeamMemberPostRequest request)
        {
            var teamMemberDto = new TeamMemberDTO
            {
                TeamId = request.TeamId,
                MemberId = request.MemberId,
                IsTeamLead = request.IsTeamLead,
                IsCurrentWeekReporter = request.IsCurrentWeekReporter,
                StartActiveDate = request.StartActiveDate,
                EndActiveDate = request.EndActiveDate
            };

            var updatedTeamMember = await _teamMemberService.UpdateTeamMemberAsync(teamMemberDto);
            return Ok(updatedTeamMember);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> RemoveTeamMember([FromQuery] int teamId, [FromQuery] int memberId)
        {
            var teamMemberDto = new TeamMemberDTO
            {
                TeamId = teamId,
                MemberId = memberId,
            };
            await _teamMemberService.DeleteTeamMemberAsync(teamMemberDto);
            return Ok();
        }

        [HttpPost("AssignCurrentWeekReporter")]
        public async Task<ActionResult> AssignCurrentWeekReporter([FromBody] AssignReporterRequest request)
        {
            await _teamMemberService.AssignCurrentWeekReporter(request.TeamId, request.MemberId);
            return Ok();
        }

        [HttpPost("GetMemberActiveTeams")]
        public async Task<IActionResult> GetActiveTeams([FromBody] MemberTeamsRequest request)
        {
            var activeTeams =  await _teamMemberService.GetActiveTeamsByMember(request.MemberId);
            if (activeTeams == null)
            {
                return NotFound();
            }
            return Ok(activeTeams);
        }

        [HttpPost("GetTeamActiveMembers")]
        public async Task<IActionResult> GetActiveMembers([FromBody] TeamMemberRequest request)
        {
            var activeMembers = await _teamMemberService.GetTeamActiveMembers((int)request.TeamId);
            if (activeMembers == null)
            {
                return NotFound();
            }
            return Ok(activeMembers);
        }

        [HttpPost("AutomaticAssignCurrentWeekReporter")]
        public async Task<IActionResult> CurrentWeekReporterAutomaticAssignment()
        {
            await _teamMemberService.CurrentWeekReporterAutomaticAssignment();
            return Ok();
        }

    }
}
