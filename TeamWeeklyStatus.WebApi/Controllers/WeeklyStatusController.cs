﻿using Microsoft.AspNetCore.Mvc;
using Asp.Versioning;
using TeamWeeklyStatus.Domain.Enums;
using TeamWeeklyStatus.Application.DTOs;
using TeamWeeklyStatus.Application.Interfaces.Services;
using TeamWeeklyStatus.Application.Interfaces.AI;

namespace TeamWeeklyStatus.WebApi.Controllers
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    [ApiVersion("2.0")]
    public class WeeklyStatusController : ControllerBase
    {
        private readonly IWeeklyStatusService _weeklyStatusService;
        private readonly IReminderService _reminderService;
        private readonly IWeeklyStatusRichTextService _weeklyStatusRichTextService;
        private readonly IContentEnhancementService _contentEnhancementService;

        public WeeklyStatusController(IWeeklyStatusService weeklyStatusService, IReminderService reminderService, IWeeklyStatusRichTextService weeklyStatusRichTextService, IContentEnhancementService contentEnhancementService)
        {
            _weeklyStatusService = weeklyStatusService;
            _reminderService = reminderService;
            _weeklyStatusRichTextService = weeklyStatusRichTextService;
            _contentEnhancementService = contentEnhancementService;
        }

        #region Version 1.0
        [HttpPost("GetByMemberIdAndStartDate", Name = "GetWeeklyStatusByMemberByStartDate")]
        [MapToApiVersion(1.0)]
        public async Task<IActionResult> GetWeeklyStatusByMemberByStartDate([FromBody] WeeklyStatusGetDTO request)
        {
            var weeklyStatus = await _weeklyStatusService.GetWeeklyStatusByMemberByStartDateAsync((int)request.MemberId, (int)request.TeamId, request.WeekStartDate);
            if (weeklyStatus == null)
            {
                return NotFound();
            }
            return Ok(weeklyStatus);
        }

        [HttpPost("GetAllWeeklyStatusesByStartDate", Name = "GetAllWeeklyStatusesByStartDate")]
        [MapToApiVersion(1.0)]
        public async Task<IActionResult> GetAllWeeklyStatusesByStartDate([FromBody] WeeklyStatusGetDTO request)
        {
            var weeklyStatuses = await _weeklyStatusService.GetAllWeeklyStatusesByStartDateAsync((int)request.TeamId, request.WeekStartDate);
            if (weeklyStatuses == null)
            {
                return NotFound();
            }
            return Ok(weeklyStatuses);
        }


        [HttpPost("Add", Name = "SaveWeeklyStatus")]
        [MapToApiVersion(1.0)]
        public async Task<IActionResult> SaveWeeklyStatus([FromBody] WeeklyStatusDTO request)
        {
            var newWeeklyStatus = await _weeklyStatusService.AddWeeklyStatusAsync(request);
            return Ok(newWeeklyStatus);
        }

        [HttpPut("Edit", Name = "UpdateWeeklyStatus")]
        [MapToApiVersion(1.0)]
        public async Task<IActionResult> UpdateWeeklyStatus([FromBody] WeeklyStatusDTO request)
        {
            var updatedWeeklyStatus = await _weeklyStatusService.UpdateWeeklyStatusAsync(request);
            return Ok(updatedWeeklyStatus);
        }
        #endregion


        #region Version 2.0
        [HttpPost("SendReminders", Name = "SendReminders")]
        [MapToApiVersion(1.0)]
        [MapToApiVersion(2.0)]
        public async Task<IActionResult> SendReminders([FromBody] ReminderDTO request)
        {
            if (!Enum.TryParse<EventName>(request.EventName, out var eventName))
            {
                return BadRequest("Invalid event name.");
            }
            await _reminderService.SendReminderEmails(eventName);
            return Ok();
        }

        [HttpPost("GetByMemberIdAndStartDate", Name = "GetWeeklyStatusByMemberByStartDate")]
        [MapToApiVersion(2.0)]
        public async Task<IActionResult> GetWeeklyStatusByMemberByStartDateV2([FromBody] WeeklyStatusGetDTO request)
        {
            var weeklyStatus = await _weeklyStatusRichTextService.GetWeeklyStatusByMemberByStartDateAsync((int)request.MemberId, (int)request.TeamId, request.WeekStartDate);
            if (weeklyStatus == null)
            {
                return NotFound();
            }
            return Ok(weeklyStatus);
        }

        [HttpPost("GetAllWeeklyStatusesByStartDate", Name = "GetAllWeeklyStatusesByStartDate")]
        [MapToApiVersion(2.0)]
        public async Task<IActionResult> GetAllWeeklyStatusesByStartDateV2([FromBody] WeeklyStatusGetDTO request)
        {
            var weeklyStatuses = await _weeklyStatusRichTextService.GetAllWeeklyStatusesByStartDateAsync((int)request.TeamId, request.WeekStartDate);
            if (weeklyStatuses == null)
            {
                return NotFound();
            }
            return Ok(weeklyStatuses);
        }


        [HttpPost("Add", Name = "SaveWeeklyStatus")]
        [MapToApiVersion(2.0)]
        public async Task<IActionResult> SaveWeeklyStatusV2([FromBody] WeeklyStatusRichTextDTO request)
        {
            var newWeeklyStatus = await _weeklyStatusRichTextService.AddWeeklyStatusAsync(request);
            return Ok(newWeeklyStatus);
        }

        [HttpPut("Edit", Name = "UpdateWeeklyStatus")]
        [MapToApiVersion(2.0)]
        public async Task<IActionResult> UpdateWeeklyStatusV2([FromBody] WeeklyStatusRichTextDTO request)
        {
            var updatedWeeklyStatus = await _weeklyStatusRichTextService.UpdateWeeklyStatusAsync(request);
            return Ok(updatedWeeklyStatus);
        }

        [HttpPost("GetAIEnhancedContent", Name = "GetAIEnhancedContent")]
        [MapToApiVersion(2.0)]
        public async Task<IActionResult> GetAIEnhancedContent([FromBody] PromptDTO request)
        {
            var enhancementTasks = new List<Task<KeyValuePair<string, string>>>();

            if (!string.IsNullOrWhiteSpace(request.DoneThisWeekContent))
            {
                enhancementTasks.Add(EnhanceContentAsync("DoneThisWeekContent", request.TeamId, request.DoneThisWeekContent));
            }

            if (!string.IsNullOrWhiteSpace(request.PlanForNextWeekContent))
            {
                enhancementTasks.Add(EnhanceContentAsync("PlanForNextWeekContent", request.TeamId, request.PlanForNextWeekContent));
            }

            if (!string.IsNullOrWhiteSpace(request.BlockersContent))
            {
                enhancementTasks.Add(EnhanceContentAsync("BlockersContent", request.TeamId, request.BlockersContent));
            }

            var results = await Task.WhenAll(enhancementTasks);

            var enhancedContent = new EnhancedContentDTO();

            foreach (var result in results)
            {
                switch (result.Key)
                {
                    case "DoneThisWeekContent":
                        enhancedContent.EnhancedDoneThisWeekContent = result.Value;
                        break;
                    case "PlanForNextWeekContent":
                        enhancedContent.EnhancedPlanForNextWeekContent = result.Value;
                        break;
                    case "BlockersContent":
                        enhancedContent.EnhancedBlockersContent = result.Value;
                        break;
                }
            }

            return Ok(enhancedContent);
        }

        private async Task<KeyValuePair<string, string>> EnhanceContentAsync(string contentType, int teamId, string content)
        {
            var enhancedContent = await _contentEnhancementService.EnhanceContentAsync(teamId, content);
            return new KeyValuePair<string, string>(contentType, enhancedContent);
        }
        #endregion

    }
}
