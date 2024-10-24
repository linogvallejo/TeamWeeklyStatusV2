﻿using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TeamWeeklyStatus.Application.CompositionRoot;
using TeamWeeklyStatus.Infrastructure;
using TeamWeeklyStatus.Infrastructure.CompositionRoot;

namespace TeamWeeklyStatus.CompositionRoot
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddCompositionRoot(this IServiceCollection services, IConfiguration configuration)
        {
            // Configure Infrastructure Layer services
            services.AddInfrastructureLayer(configuration);

            // Configure Application Layer services
            services.AddApplicationLayer();

            return services;
        }
    }

}
