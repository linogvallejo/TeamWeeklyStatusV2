﻿using TeamWeeklyStatus.Domain.Entities;
using TeamWeeklyStatus.Infrastructure.Repositories;
using TeamWeeklyStatus.Infrastructure;
using Microsoft.EntityFrameworkCore;
using TeamWeeklyStatus.Application.Interfaces;

namespace TeamWeeklyStatus.Infrastructure.Repositories
{
    public class TeamRepository : ITeamRepository
    {
        private readonly TeamWeeklyStatusContext _context;
        public TeamRepository(TeamWeeklyStatusContext context)
        {
            _context = context;
        }
        public async Task<Team> GetTeamByIdAsync(int teamId) => await _context.Teams
                .Where(predicate: t => t.Id == teamId)
                .Select(t => new Team
                {
                    Id = t.Id,
                    Name = t.Name,
                })
                .FirstOrDefaultAsync();

        public async Task<IEnumerable<Team>> GetAllTeamsAsync() => await _context.Teams
                .Select(t => new Team
                {
                    Id = t.Id,
                    Name = t.Name,
                }).OrderBy(t => t.Name)
                .ToListAsync();

        public async Task<Team> AddTeamAsync(Team team)
        {
            _context.Teams.Add(team);
            await _context.SaveChangesAsync();
            return team;
        }

        public async Task<Team> UpdateTeamAsync(Team team)
        {
            var existingTeam = await _context.Teams.FindAsync(team.Id);
            if (existingTeam == null)
            {
                throw new KeyNotFoundException($"Team with Id {team.Id} not found.");
            }

            existingTeam.Name = team.Name;

            _context.Teams.Update(existingTeam);
            await _context.SaveChangesAsync();

            return existingTeam;
        }

        public async Task<Team> DeleteTeamAsync(int teamId)
        {
            var team = await _context.Teams.FindAsync(teamId);
            if (team == null)
            {
                throw new KeyNotFoundException($"Team with Id {teamId} not found.");
            }

            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();

            return team;
        }

    }
}
