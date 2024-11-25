﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamWeeklyStatus.Application.DTOs;

namespace TeamWeeklyStatus.Application.Interfaces.AI
{
    public interface IAIEngineService
    {
        Task<List<AIEngineDto>> GetAIEnginesAsync();
    }
}