﻿using Microsoft.AspNetCore.Mvc;
using TeamWeeklyStatus.Application.Interfaces;
using TeamWeeklyStatus.Domain.Enums;
using TeamWeeklyStatus.WebApi.DTOs;

namespace TeamWeeklyStatus.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeeklyStatusController : ControllerBase
    {
        private readonly IWeeklyStatusService _weeklyStatusService;
        private readonly IReminderService _reminderService;

        public WeeklyStatusController(IWeeklyStatusService weeklyStatusService, IReminderService reminderService)
        {
            _weeklyStatusService = weeklyStatusService;
            _reminderService = reminderService;
        }

        [HttpPost("GetByMemberIdAndStartDate", Name = "GetWeeklyStatusByMemberByStartDate")]
        public async Task<IActionResult> GetWeeklyStatusByMemberByStartDate([FromBody] WeeklyStatusGetRequest request)
        {
            var weeklyStatus = await _weeklyStatusService.GetWeeklyStatusByMemberByStartDateAsync((int)request.MemberId, (int)request.TeamId, request.WeekStartDate);
            if (weeklyStatus == null)
            {
                return NotFound();
            }
            return Ok(weeklyStatus);
        }

        [HttpPost("GetAllWeeklyStatusesByStartDate", Name = "GetAllWeeklyStatusesByStartDate")]
        public async Task<IActionResult> GetAllWeeklyStatusesByStartDate([FromBody] WeeklyStatusGetRequest request)
        {
            var weeklyStatuses = await _weeklyStatusService.GetAllWeeklyStatusesByStartDateAsync((int)request.TeamId, request.WeekStartDate);
            if (weeklyStatuses == null)
            {
                return NotFound();
            }
            return Ok(weeklyStatuses);
        }


        [HttpPost("Add", Name = "SaveWeeklyStatus")]
        public async Task<IActionResult> SaveWeeklyStatus([FromBody] WeeklyStatusPostRequest request)
        {
            var weeklyStatusDto = new Application.DTOs.WeeklyStatusDTO
            {
                MemberId = request.MemberId,
                WeekStartDate = request.WeekStartDate,
                DoneThisWeek = request.DoneThisWeek.Select(dtw => new Application.DTOs.DoneThisWeekTaskDTO
                {
                    TaskDescription = dtw.TaskDescription,
                    Subtasks = dtw.Subtasks.Select(sub => new Application.DTOs.SubtaskDTO { SubtaskDescription = sub.SubtaskDescription }).ToList()
                }).ToList(),
                PlanForNextWeek = request.PlanForNextWeek.Select(pfnw => new Application.DTOs.PlanForNextWeekTaskDTO
                {
                    TaskDescription = pfnw.TaskDescription,
                    Subtasks = pfnw.Subtasks.Select(sub => new Application.DTOs.SubtaskNextWeekDTO { SubtaskDescription = sub.SubtaskDescription }).ToList()
                }).ToList(),
                Blockers = request.Blockers,
                UpcomingPTO = request.UpcomingPTO,
                TeamId = request.TeamId
            };
            var newWeeklyStatus = await _weeklyStatusService.AddWeeklyStatusAsync(weeklyStatusDto);
            return Ok(newWeeklyStatus);
        }

        [HttpPut("Edit", Name = "UpdateWeeklyStatus")]
        public async Task<IActionResult> UpdateWeeklyStatus([FromBody] WeeklyStatusPostRequest request)
        {
            var weeklyStatusDto = new Application.DTOs.WeeklyStatusDTO
            {
                Id = request.Id,
                MemberId = request.MemberId,
                WeekStartDate = request.WeekStartDate,
                DoneThisWeek = request.DoneThisWeek.Select(dtw => new Application.DTOs.DoneThisWeekTaskDTO
                {
                    TaskDescription = dtw.TaskDescription,
                    Subtasks = dtw.Subtasks.Select(sub => new Application.DTOs.SubtaskDTO { SubtaskDescription = sub.SubtaskDescription }).ToList()
                }).ToList(),
                PlanForNextWeek = request.PlanForNextWeek.Select(pfnw => new Application.DTOs.PlanForNextWeekTaskDTO
                {
                    TaskDescription = pfnw.TaskDescription,
                    Subtasks = pfnw.Subtasks.Select(sub => new Application.DTOs.SubtaskNextWeekDTO { SubtaskDescription = sub.SubtaskDescription }).ToList()
                }).ToList(),
                Blockers = request.Blockers,
                UpcomingPTO = request.UpcomingPTO,
                TeamId = request.TeamId
            };
            var updatedWeeklyStatus = await _weeklyStatusService.UpdateWeeklyStatusAsync(weeklyStatusDto);
            return Ok(updatedWeeklyStatus);
        }

        [HttpPost("SendReminders", Name = "SendReminders")]
        public async Task<IActionResult> SendReminders([FromBody] ReminderRequest request)
        {
            if (!Enum.TryParse<EventName>(request.EventName, out var eventName))
            {
                return BadRequest("Invalid event name.");
            }
            await _reminderService.SendReminderEmails(eventName);
            return Ok();
        }
    }
}
