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
      type: 'image',
      of: [{name: 'imageApplication', type: 'image', title: 'imageApplication'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
