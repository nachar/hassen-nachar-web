<script setup>
const jobs = [
  {
    company: 'GFT',
    job_title: 'Front-End Engineer',
    period: '2023 - Today',
    description:
      'Contributed to the development of digital solutions for BBVA, working on both mobile and web platforms with a focus on scalability and performance.',
    roles: [
      'Developed the insurance section of BBVA’s website, including interactive simulators to enhance user experience',
      'Developed BBVA app for 5 countries using web technology to enable interaction with native components on iOS and Android.',
      'Collaborated with the architecture team on initiatives to improve cloud usage and optimization',
    ],
    achievements: [
      'Contributed to the development of the insurance platform for BBVA, specializing in interactive simulators to enhance user experience.',
      'Developed and maintained cross-platform solutions for both web and mobile applications.',
      'Collaborated with the architecture team on initiatives to improve cloud usage and optimization for the entire bank.',
    ],
  },
  {
    company: 'Modyo',
    job_title: 'Front-End Engineer',
    period: '2016 - 2023',
    description:
      'Developed web applications using Modyo CMS, created by the company. Collaborated closely with the architecture team to coordinate frontend technology decisions and supported internal process improvements. Led frontend developer teams to deliver high-quality solutions.',
    roles: [
      'Developed web and mobile applications for various financial sector projects across multiple countries.',
      'Mentoring and Coaching',
      'Led frontend developer teams on multiple projects, ensuring high-quality delivery.',
      'Served as the company’s lead frontend engineer, mentoring developers and guiding best practices.',
      'Acted as frontend architect for the company, coordinating technology decisions and standards across teams.',
    ],
    achievements: [
      'Successfully led front-end development teams on high-stakes projects across multiple countries.',
      'Served as the lead front-end engineer and architect, mentoring developers and defining company-wide best practices.',
      'Coordinated technology decisions and standards across teams, ensuring high-quality and scalable solutions.',
    ],
  },
  {
    company: 'Techmobile (Suika)',
    job_title: 'Android & Front-End Developer',
    period: '2014 - 2016',
    description:
      'Developed native Android and web applications in a small, versatile team using popular frontend frameworks.',
    roles: [
      'Developed native Android applications for various projects.',
      'Built web applications using popular frontend development frameworks.',
    ],
    achievements: [
      'Gained extensive experience in native Android application development for diverse projects.',
      'Built and maintained web applications for important clients using popular front-end frameworks.',
    ],
  },
  {
    company: 'DevLab',
    job_title: 'API & Front-End Developer',
    period: '2013 - 2014',
    description:
      'Developed hybrid web applications for Android and iOS, APIs for web and mobile, and websites for partner companies, working on projects that combined software and hardware components.',
    roles: [
      'Developed hybrid web applications for Android and iOS.',
      'Built APIs to support both web and mobile applications.',
      'Created websites for partner companies.',
    ],
    achievements: [
      'Developed applications for the mining industry to monitor and control environmental pollution. Integrated data from sensors via APIs to automate chemical release systems.',
      'Contributed to and led technical decision-making for company projects, combining software and hardware components.',
    ],
  },
];
</script>

<template>
  <v-list class="bg-transparent" lines="one">
    <v-card v-for="(job, index) in jobs" :key="index" class="mb-6" elevation="2" rounded="lg">
      <v-list-item
        class="pb-0"
        :title="job.job_title"
        :subtitle="`${job.company} | ${job.period}`"
      />

      <v-card-text class="pt-2 text-medium-emphasis">
        <p>{{ job.description }}</p>

        <div v-if="job.achievements && job.achievements.length" class="mt-4">
          <v-list-subheader class="font-weight-bold pa-0 mb-2">Key achievements:</v-list-subheader>
          <ul>
            <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </v-list>
</template>

<style scoped lang="scss">
ul {
  padding-left: 40px;
}
</style>
