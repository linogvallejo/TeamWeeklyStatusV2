﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamWeeklyStatus.Application.DTOs
{
    public class PromptDTO
    {
        public int TeamId { get; set; }

        public string DoneThisWeekContent { get; set; }

        public string PlanForNextWeekContent { get; set; }

        public string BlockersContent { get; set; }

    }
}
