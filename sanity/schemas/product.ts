export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {name: 'name', type: 'string', title: 'Name of product'},
    {name: 'images', type: 'array', title: 'Product Images', of: [{type: 'image'}]},
    {name: 'description', type: 'text', title: 'Description of product'},
    {name: 'slug', type: 'slug', title: 'Product slug', options: {source: 'name'}},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'price_id', title: 'Stripe Price Id', type: 'string'},
    {name: 'category', type: 'reference', title: 'Product Category', to: [{type: 'category'}]},
  ],
}
