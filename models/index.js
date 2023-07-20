// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, Notes, TagsNotes } = initSchema(schema);

export {
  Tags,
  Notes,
  TagsNotes
};