<script setup>
const projects = [
  {
    company: 'GFT',
    projects: {
      web: [
        {
          title: 'Web BBVA',
          sector: 'Financial',
        },
        {
          title: 'FinOps Champions',
          sector: 'Financial',
        },
      ],
      mobile: [
        {
          title: 'App BBVA',
          sector: 'Financial',
        },
      ],
    },
  },
  {
    company: 'Modyo',
    projects: {
      web: [
        {
          title: 'PC Factory',
          sector: 'Retail',
        },
        {
          title: 'Banco Mundo Mujer',
          sector: 'Financial',
        },
        {
          title: 'Dando by CFG',
          sector: 'Fintech',
        },
        {
          title: 'BCI Miami',
          sector: 'Financial',
        },
        {
          title: 'Santander Superdigital',
          sector: 'Financial',
        },
        {
          title: 'Consorcio',
          sector: 'Financial',
        },
        {
          title: 'Copec',
          sector: 'Energy',
        },
        {
          title: 'Santander',
          sector: 'Financial',
        },
        {
          title: 'Cinemark Chile',
          sector: 'Entertainment',
        },
        {
          title: 'Cinemark Colombia',
          sector: 'Entertainment',
        },
        {
          title: 'Cinemark Perú',
          sector: 'Entertainment',
        },
        {
          title: 'Cinemark Bolivia',
          sector: 'Entertainment',
        },
        {
          title: 'Cinemark Paraguay',
          sector: 'Entertainment',
        },
        {
          title: 'BCI Chile',
          sector: 'Financial',
        },
        {
          title: 'Sencillito',
          sector: 'Fintechs',
        },
        {
          title: 'Cocha',
          sector: 'Tourism',
        },
      ],
      mobile: [
        {
          title: 'PagoClick (Copec)',
          sector: 'Energy',
        },
        {
          title: 'Cinemark Chile',
          sector: 'Entertainment',
        },
      ],
    },
  },
  {
    company: 'Techmobile',
    projects: {
      web: [
        {
          title: 'Bioscell',
          sector: 'Biotechnology',
        },
        {
          title: 'Marina Golf Rapel',
          sector: 'Tourism',
        },
        {
          title: 'Productora del Lago',
          sector: 'Media',
        },
      ],
      mobile: [
        {
          title: 'Mundo Copec',
          sector: 'Energy',
        },
        {
          title: 'Tribuna Centenario',
          sector: 'Sports',
        },
      ],
    },
  },
  {
    company: 'DevLab',
    projects: {
      web: [
        {
          title: 'IMS',
          sector: 'Mining',
        },
        {
          title: 'Aygcamp',
          sector: 'Technology',
        },
        {
          title: 'Vías Chile',
          sector: 'Infrastructure',
        },
      ],
      mobile: [
        {
          title: 'IMS',
          sector: 'Mining',
        },
        {
          title: 'Aygcamp',
          sector: 'Technology',
        },
      ],
    },
  },
];

const calculateTotalProjects = (projectsObject) => {
  const webCount = projectsObject.web ? projectsObject.web.length : 0;
  const mobileCount = projectsObject.mobile ? projectsObject.mobile.length : 0;
  return webCount + mobileCount;
};
</script>

<template>
  <v-list class="bg-transparent" lines="two">
    <v-list-group v-for="(company, index) in projects" :key="index" :value="company.company">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          :title="company.company"
          :subtitle="`Total projects: ${calculateTotalProjects(company.projects)}`"
          rounded="xl"
        />
      </template>

      <v-list-group v-if="company.projects.web" :value="`${index}-web`">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Web" class="pl-12" rounded="xl" />
        </template>
        <v-list-item
          v-for="(project, projectIndex) in company.projects.web"
          :key="`web-${index}-${projectIndex}`"
          :title="project.title"
          :subtitle="`Sector: ${project.sector}`"
          class="pl-16"
          rounded="xl"
        />
      </v-list-group>

      <v-list-group v-if="company.projects.mobile" :value="`${index}-mobile`">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Mobile" class="pl-12" rounded="xl" />
        </template>
        <v-list-item
          v-for="(project, projectIndex) in company.projects.mobile"
          :key="`mobile-${index}-${projectIndex}`"
          :title="project.title"
          :subtitle="`Sector: ${project.sector}`"
          class="pl-16"
          rounded="xl"
        />
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<style scoped>
.v-list-item,
.v-list-group {
  margin-bottom: 8px;
}
</style>
