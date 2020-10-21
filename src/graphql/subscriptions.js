/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
      id
      name
      url
      createdAt
      updatedAt
      rooms {
        id
        number
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyRoomsId
      build {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyBuildId
      street {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyStreetId
      thumbnail {
        id
        name
        url
        property {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        createdAt
        updatedAt
      }
      price
      page
      location
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
      id
      name
      url
      createdAt
      updatedAt
      rooms {
        id
        number
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyRoomsId
      build {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyBuildId
      street {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyStreetId
      thumbnail {
        id
        name
        url
        property {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        createdAt
        updatedAt
      }
      price
      page
      location
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
      id
      name
      url
      createdAt
      updatedAt
      rooms {
        id
        number
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyRoomsId
      build {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyBuildId
      street {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyStreetId
      thumbnail {
        id
        name
        url
        property {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        createdAt
        updatedAt
      }
      price
      page
      location
    }
  }
`;
export const onCreateStreet = /* GraphQL */ `
  subscription OnCreateStreet {
    onCreateStreet {
      id
      name
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStreet = /* GraphQL */ `
  subscription OnUpdateStreet {
    onUpdateStreet {
      id
      name
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStreet = /* GraphQL */ `
  subscription OnDeleteStreet {
    onDeleteStreet {
      id
      name
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBuild = /* GraphQL */ `
  subscription OnCreateBuild {
    onCreateBuild {
      id
      name
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBuild = /* GraphQL */ `
  subscription OnUpdateBuild {
    onUpdateBuild {
      id
      name
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBuild = /* GraphQL */ `
  subscription OnDeleteBuild {
    onDeleteBuild {
      id
      name
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRooms = /* GraphQL */ `
  subscription OnCreateRooms {
    onCreateRooms {
      id
      number
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRooms = /* GraphQL */ `
  subscription OnUpdateRooms {
    onUpdateRooms {
      id
      number
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRooms = /* GraphQL */ `
  subscription OnDeleteRooms {
    onDeleteRooms {
      id
      number
      properties {
        items {
          id
          name
          url
          createdAt
          updatedAt
          propertyRoomsId
          propertyBuildId
          propertyStreetId
          price
          page
          location
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      name
      url
      property {
        id
        name
        url
        createdAt
        updatedAt
        rooms {
          id
          number
          createdAt
          updatedAt
        }
        propertyRoomsId
        build {
          id
          name
          createdAt
          updatedAt
        }
        propertyBuildId
        street {
          id
          name
          createdAt
          updatedAt
        }
        propertyStreetId
        thumbnail {
          id
          name
          url
          createdAt
          updatedAt
        }
        price
        page
        location
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      name
      url
      property {
        id
        name
        url
        createdAt
        updatedAt
        rooms {
          id
          number
          createdAt
          updatedAt
        }
        propertyRoomsId
        build {
          id
          name
          createdAt
          updatedAt
        }
        propertyBuildId
        street {
          id
          name
          createdAt
          updatedAt
        }
        propertyStreetId
        thumbnail {
          id
          name
          url
          createdAt
          updatedAt
        }
        price
        page
        location
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      name
      url
      property {
        id
        name
        url
        createdAt
        updatedAt
        rooms {
          id
          number
          createdAt
          updatedAt
        }
        propertyRoomsId
        build {
          id
          name
          createdAt
          updatedAt
        }
        propertyBuildId
        street {
          id
          name
          createdAt
          updatedAt
        }
        propertyStreetId
        thumbnail {
          id
          name
          url
          createdAt
          updatedAt
        }
        price
        page
        location
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
