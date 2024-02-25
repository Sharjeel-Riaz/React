import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import product from "../sanity-circuit-bazaar/schemaTypes/product";
import banner from "../sanity-circuit-bazaar/schemaTypes/banner";

export const schema = {
  name: "default",
  types: schemaTypes.concat([product, banner]),
};
