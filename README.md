# nLDT-AppStore
nLDT App Store beschrijving

## Respec Document

Het respec document is te vinden op: [https://geonovum.github.io/nLDT-AppStore/](https://geonovum.github.io/nLDT-AppStore/)

### English

The English version of the NLDT Architecture can be found here: [https://geonovum.github.io/nLDT-AppStore/en/](https://geonovum.github.io/nLDT-AppStore/en/)

## Sequence diagram

```mermaid
  graph LR;
    N&S-->Tygron;
```


## Sequence diagram

```mermaid
sequenceDiagram
    participant John
  
    John->>AppStore:Find recipe
    AppStore->>John:Recipe
    John-)Oven:bake met parameters
    Oven->>Oven: traverse graph
    Oven-)N&S:execute process
    N&S->>data:get data
    data->>N&S: data
    N&S->>N&S: compute
    N&S--)Oven: success, results
    Oven-)Tygron:execure process
    Tygron->>data:get data
    data->>Tygron: data
    Tygron->>Tygron: compute
    Tygron--)Oven: success, results
    Oven->>Oven: await results
    Oven--)John: results    
```
