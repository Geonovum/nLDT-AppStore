# nLDT-AppStore

## Components

The sequence of 1) finding a recipe, 2) getting it and 3) executing it has been split in seperate services. Reason for these seperation is that each of the 3 can be offered in the market as commercial offerings. Each have value of their own. Also, seperating them give a clear cut "separation of concern" so that they can evolve without affecting other neighboring components.

### A catalog (aka AppStore)

A catalog ideally features an end-point using [API-Records](https://ogcapi.ogc.org/records) specification. Testbed 2026 Phase 2 is not looking for a new Catalog, rather than use an existing Catalog (that features API-Records)

#### Metadata

Metadata that describes Processes or Recipes is not different from Metadata that describes Datasets - both point to service end-points that provide access to the resource (a service that provides datasets, processes or recipes).

Processes (that have an end-point using [OGC API Processes](https://ogcapi.ogc.org/processes)) have a custom MIME type "application/process+json", the type for recipes has not been established, but for Testbed 2026 Phase, "application/recipe+json" is suggested as custom MIME type.

Recipes examples can be found [here]() and [here]().

### CookBook

A cookbook is a collection of recipes. The API for cookbook follows the same uri pattern as OGC API-Features.

Example: https://example.org/v1/collections/recipes/items/kids-omelette
Example: https://example.org/v1/collections/kids-omelette

Currently the CookBook is readonly (GET), but future version with provide full CRUD.

### Cook

A cook is a services that follows the recipe, step-by-step - aka a graph traversal.

- OWL
- azarro
- self

## Recipe


