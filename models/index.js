// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Testimonial, Notebook, Subject, Page } = initSchema(schema);

export {
  Testimonial,
  Notebook,
  Subject,
  Page
};