// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pricing, Testimonial, Notebook, Subject, Page } = initSchema(schema);

export {
  Pricing,
  Testimonial,
  Notebook,
  Subject,
  Page
};