# nLDT-AppStore
nLDT App Store beschrijving

## Respec Document

Het respec document is te vinden op: [https://geonovum.github.io/nLDT-AppStore/](https://geonovum.github.io/nLDT-AppStore/)

### English

The English version of the NLDT Architecture can be found here: [https://geonovum.github.io/nLDT-AppStore/en/](https://geonovum.github.io/nLDT-AppStore/en/)

## Recipe

```mermaid
  graph LR;
    N&S-->Tygron;
    N&S-->Goudappel;
    Goudappel-->Clappform
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

    Oven-)Goudappel:execure process
    Goudappel->>data:get data
    data->>Goudappel: data
    Goudappel->>Goudappel: compute
    Goudappel--)Oven: success, results

    Oven-)Clappform:execure process
    Clappform->>data:get data
    data->>Clappform: data
    Clappform->>Clappform: compute
    Clappform--)Oven: success, results

    Oven->>Oven: await results
    Oven--)John: results    
```
