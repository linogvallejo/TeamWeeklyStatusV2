﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamWeeklyStatus.Application.Interfaces;
using TeamWeeklyStatus.Domain.Entities;
using TeamWeeklyStatus.Infrastructure.Repositories;

namespace TeamWeeklyStatus.Infrastructure.CompositionRoot
{
    public static class ServiceRegistration
    {
        public static IServiceCollection AddInfrastructureLayer(this IServiceCollection services, IConfiguration configuration)
        {
            var sqlServerConnectionString = configuration.GetConnectionString("AzureSqlConnection");

            services.AddDbContext<TeamWeeklyStatusContext>(
                options => options.UseSqlServer(sqlServerConnectionString)
            );

            services.AddSingleton<IDesignTimeDbContextFactory<TeamWeeklyStatusContext>,
                TeamWeeklyStatusContextFactory>();

            // Register repositories
            services.AddScoped<IRepository<Team>, Repository<Team>>();
            services.AddScoped<IRepository<Member>, Repository<Member>>();
            services.AddScoped<IRepository<TeamMember>, Repository<TeamMember>>();
            services.AddScoped<IRepository<WeeklyStatus>, Repository<WeeklyStatus>>();
            services.AddScoped<IRepository<DoneThisWeekTask>, Repository<DoneThisWeekTask>>();
            services.AddScoped<IRepository<PlanForNextWeekTask>, Repository<PlanForNextWeekTask>>();
            services.AddScoped<IMemberRepository, MemberRepository>();
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<ITeamMemberRepository, TeamMemberRepository>();
            services.AddScoped<IWeeklyStatusRepository, WeeklyStatusRepository>();


            return services;
        }
    }

}
