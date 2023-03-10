export default {
  name: 'models',
  type: 'document',
  title: 'Models',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'imageArray',
      type: 'array',
      of: [{name: 'image', type: 'image', title: 'Image Array'}],
    },
    {name: 'age', type: 'string', title: 'Age'},
    {name: 'sex', type: 'string', title: 'Sex'},
    {name: 'link', type: 'string', title: 'Link'},
  ],
}
