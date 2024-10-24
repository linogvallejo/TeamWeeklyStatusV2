﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TeamWeeklyStatus.Infrastructure;

#nullable disable

namespace TeamWeeklyStatus.Infrastructure.Migrations
{
    [DbContext(typeof(TeamWeeklyStatusContext))]
    [Migration("20241019181524_AddIsActiveTeam")]
    partial class AddIsActiveTeam
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.DoneThisWeekTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("TaskDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WeeklyStatusId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("WeeklyStatusId");

                    b.ToTable("DoneThisWeekTask");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.Member", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsAdmin")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.PlanForNextWeekTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("TaskDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WeeklyStatusId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("WeeklyStatusId");

                    b.ToTable("PlanForNextWeekTask");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.Subtask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TaskId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TaskId");

                    b.ToTable("Subtasks");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.SubtaskNextWeek", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TaskId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TaskId");

                    b.ToTable("SubtasksNextWeek");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("EmailNotificationsEnabled")
                        .HasColumnType("bit");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("SlackNotificationsEnabled")
                        .HasColumnType("bit");

                    b.Property<bool?>("WeekReporterAutomaticAssignment")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.TeamMember", b =>
                {
                    b.Property<int>("TeamId")
                        .HasColumnType("int");

                    b.Property<int>("MemberId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("EndActiveDate")
                        .HasColumnType("datetime2");

                    b.Property<bool?>("IsCurrentWeekReporter")
                        .HasColumnType("bit");

                    b.Property<bool?>("IsTeamLead")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("StartActiveDate")
                        .HasColumnType("datetime2");

                    b.HasKey("TeamId", "MemberId");

                    b.HasIndex("MemberId");

                    b.ToTable("TeamMembers");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.WeeklyStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Blockers")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("MemberId")
                        .HasColumnType("int");

                    b.Property<int?>("TeamId")
                        .HasColumnType("int");

                    b.Property<string>("UpcomingPTO")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("WeekStartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("MemberId");

                    b.HasIndex("TeamId");

                    b.ToTable("WeeklyStatuses");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.DoneThisWeekTask", b =>
                {
                    b.HasOne("TeamWeeklyStatus.Domain.Entities.WeeklyStatus", "WeeklyStatus")
                        .WithMany("DoneThisWeekTasks")
                        .HasForeignKey("WeeklyStatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WeeklyStatus");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.PlanForNextWeekTask", b =>
                {
                    b.HasOne("TeamWeeklyStatus.Domain.Entities.WeeklyStatus", "WeeklyStatus")
                        .WithMany("PlanForNextWeekTasks")
                        .HasForeignKey("WeeklyStatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WeeklyStatus");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.Subtask", b =>
                {
                    b.HasOne("TeamWeeklyStatus.Domain.Entities.DoneThisWeekTask", "Task")
                        .WithMany("Subtasks")
                        .HasForeignKey("TaskId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Task");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.SubtaskNextWeek", b =>
                {
                    b.HasOne("TeamWeeklyStatus.Domain.Entities.PlanForNextWeekTask", "Task")
                        .WithMany("Subtasks")
                        .HasForeignKey("TaskId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Task");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.TeamMember", b =>
                {
                    b.HasOne("TeamWeeklyStatus.Domain.Entities.Member", "Member")
                        .WithMany("TeamMembers")
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TeamWeeklyStatus.Domain.Entities.Team", "Team")
                        .WithMany("TeamMembers")
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Member");

                    b.Navigation("Team");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.WeeklyStatus", b =>
                {
                    b.HasOne("TeamWeeklyStatus.Domain.Entities.Member", "Member")
                        .WithMany("WeeklyStatuses")
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TeamWeeklyStatus.Domain.Entities.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId");

                    b.Navigation("Member");

                    b.Navigation("Team");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.DoneThisWeekTask", b =>
                {
                    b.Navigation("Subtasks");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.Member", b =>
                {
                    b.Navigation("TeamMembers");

                    b.Navigation("WeeklyStatuses");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.PlanForNextWeekTask", b =>
                {
                    b.Navigation("Subtasks");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.Team", b =>
                {
                    b.Navigation("TeamMembers");
                });

            modelBuilder.Entity("TeamWeeklyStatus.Domain.Entities.WeeklyStatus", b =>
                {
                    b.Navigation("DoneThisWeekTasks");

                    b.Navigation("PlanForNextWeekTasks");
                });
#pragma warning restore 612, 618
        }
    }
}