# Roll-Your-Own AppStore

## Components

The sequence of 
1) finding a recipe,
2) getting it and
3) executing it 

has been split in seperate services. Reason for these seperation is that each of the 3 can be offered in the market as commercial offerings. Each have value of their own. Also, seperating them give a clear cut "separation of concern" so that they can evolve without affecting other neighboring components.

This page helps with:
- insight in the concept
- how to run the various components of the AppStore

All code in the various repo's are in nodejs and can run OoB.
Tools used: VS Code, Nodejs (ExpressJs) and Bruno

### A catalog (aka AppStore)

A catalog ideally features an end-point using [API-Records](https://ogcapi.ogc.org/records) specification. Testbed 2026 Phase 2 is not looking for a new Catalog, rather than use an existing Catalog (that features API-Records)

An example catalog (aka AppStore) [here](https://github.com/Geonovum/nLDT-appstore). This is a dummy catalog, with only 1 metadata record.

#### example API call:
`GET {{serviceHost}}?query=rain+mobility` returns 1 DCAT-AP-NL metadata record

#### Metadata

Metadata that describes Processes or Recipes is not different from Metadata that describes Datasets - both point to service end-points that provide access to the resource (a service that provides datasets, processes or recipes).

Processes (that have an end-point using [OGC API Processes](https://ogcapi.ogc.org/processes)) have a custom MIME type "application/process+json", the type for recipes has not been established, but for Testbed 2026 Phase, "application/recipe+json" is suggested as custom MIME type.

Recipes examples can be found [here](https://github.com/Geonovum/nLDT-AppStore/blob/main/public/rain-mobility.ttl). This dummy metadata record contains the link to the recipe.

### CookBook

A cookbook is a collection of recipes. The API for cookbook follows the same uri pattern as OGC API-Features.

- Example: https://example.org/v1/collections/recipes/items/kids-omelette
- Example: https://example.org/v1/collections/kids-omelette

Currently the CookBook is readonly (GET), but future version with provide full CRUD.

### Cook

A cook is a services that follows the recipe, step-by-step - aka a graph traversal.

- [OWL](https://www.commonwl.org/)
- [azarro](https://www.openapis.org/arazzo-specification)
- [self](https://github.com/Geonovum/nLDT-CookBook/blob/61ba5e4485d714da8683c9c4d08636f8b7f0a366/public/dt-rain-traffic.json#L62-L162)

## Recipe

A recipe is the encoding of the sequential calling of processes (aka directed acyclical graph (dag)). 

An example encoding of a dag has been provided in this [recipe](https://github.com/Geonovum/nLDT-CookBook/blob/61ba5e4485d714da8683c9c4d08636f8b7f0a366/public/dt-rain-traffic.json#L62-L162). This example is not normative. The aim of the Testbed 2026 phase 2 is to establish an encoding that has consensus in the Testbed community. The consensus encoding will be brought to OGC (API Processes) group as input.
