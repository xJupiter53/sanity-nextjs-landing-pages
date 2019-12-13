export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df3e511125355a9c9f67d94',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-85icxcgt',
                  apiId: 'f0d0aa52-367f-4ee3-8f03-314b462dd994'
                },
                {
                  buildHookId: '5df3e51192246784c58adfc2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9x3dpsp3',
                  apiId: 'b8ae9c22-b835-434d-b1b4-fdac542578e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xJupiter53/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9x3dpsp3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
