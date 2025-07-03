import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  companyUrl: string;
  circleColor: string;
  type: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  experiences: Experience[] = [
    {
      company: 'Techno Global Inc.',
      position: 'IONIC/ANGULAR Developer',
      period: 'Apr 2024 - Present',
      location: 'Remote',
      description: 'Full-time development using IONIC and Angular frameworks (IOS, Android, Web)',
      companyUrl: 'https://technoglobalinc.com',
      circleColor: '#1976d2',
      type: 'Full-time'
    },
    {
      company: 'Analityco App',
      position: 'Web Developer',
      period: 'Sep 2020 - Jan 2024',
      location: 'Remote',
      description: 'Led development using the latest versions of Angula',
      companyUrl: 'https://analityco.com',
      circleColor: '#4CAF50',
      type: 'Full-time'
    },
    {
      company: 'Newshore',
      position: 'Junior Advanced Developer Engineer',
      period: 'Dec 2019 - Aug 2020',
      location: 'Manizales, Caldas, Colombia',
      description: 'Frontend development and engineering tasks',
      companyUrl: 'https://newshore.es',
      circleColor: '#FF5722',
      type: 'Full-time'
    },
    {
      company: 'AVANZAMAS SAS',
      position: 'Junior Frontend Developer',
      period: 'May 2019 - Nov 2019',
      location: 'Colombia',
      description: 'Frontend development focusing on user interfaces',
      companyUrl: 'https://avanzamas.com',
      circleColor: '#673AB7',
      type: 'Full-time'
    },
    {
      company: 'SINCOSOFT',
      position: 'Developer',
      period: 'Feb 2018 - Mar 2019',
      location: 'Cra. 12 #7950',
      description: 'Software development and maintenance',
      companyUrl: 'https://sinco.com.co',
      circleColor: '#2196F3',
      type: 'Full-time'
    }
  ];
}