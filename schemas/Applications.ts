export default {
  name: 'applications',
  title: 'Applications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'imageApplication',
      type: 'applicationArray',
      of: [{name: 'image', type: 'applicationArray', title: 'imageApplication'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
