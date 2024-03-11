import { Component, OnInit } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { Chart, registerables } from 'chart.js';
import { appoinment } from 'src/app/Model/appoinment';
import { PatientRepository } from 'src/app/Repository/patient-repository';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
})

export class PatientDashboardComponent implements OnInit {
  constructor(
    private commonpropertiesService: CommonpropertiesService,
    private patientRepository: PatientRepository
  ) {}
  LoginUserName = this.commonpropertiesService.getUserName();
  LoginUserImage = this.commonpropertiesService.getImage();
  appoinments: appoinment[] = [];

  ngOnInit(): void {
    this.getAllAppointments();
  }

  async getAllAppointments() {
    this.appoinments = await this.patientRepository.getAppoinmentStatus(this.LoginUserName);

    const currentDate = new Date();
    const pastFourMonths = this.getPastFourMonths(currentDate);

    const appointmentsForPastFourMonths = this.appoinments.filter(
      (appointment) => new Date(appointment.date) >= pastFourMonths
    );

    const appointmentsGroupedByMonth = this.groupAppointmentsByMonth(appointmentsForPastFourMonths);

    const labels: string[] = [];
    const data: number[] = [];

    for (const month of appointmentsGroupedByMonth.keys()) {
      labels.push(month);
      data.push(appointmentsGroupedByMonth.get(month)?.length || 0);
    }

    Chart.register(...registerables);

    const ctx = document.getElementById('barChart') as HTMLCanvasElement | null;

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Appointments in the Past Four Months',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }

  private getPastFourMonths(currentDate: Date): Date {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1);
  }

  private groupAppointmentsByMonth(appointments: appoinment[]): Map<string, appoinment[]> {
    const groupedAppointments = new Map<string, appoinment[]>();

    for (const appointment of appointments) {
      const monthKey = this.getMonthKey(new Date(appointment.date));
      if (!groupedAppointments.has(monthKey)) {
        groupedAppointments.set(monthKey, []);
      }
      groupedAppointments.get(monthKey)?.push(appointment);
    }
    return groupedAppointments;
  }

  private getMonthKey(date: Date): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }
}
