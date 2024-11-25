﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamWeeklyStatus.Domain.Entities;

namespace TeamWeeklyStatus.Application.Interfaces.Repositories
{
    public interface IAIEngineRepository
    {
        Task<List<AIEngine>> GetAIEnginesAsync();
    }
}