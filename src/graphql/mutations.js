/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createStreet = /* GraphQL */ `
  mutation CreateStreet(
    $input: CreateStreetInput!
    $condition: ModelStreetConditionInput
  ) {
    createStreet(input: $input, condition: $condition) {
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
export const updateStreet = /* GraphQL */ `
  mutation UpdateStreet(
    $input: UpdateStreetInput!
    $condition: ModelStreetConditionInput
  ) {
    updateStreet(input: $input, condition: $condition) {
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
export const deleteStreet = /* GraphQL */ `
  mutation DeleteStreet(
    $input: DeleteStreetInput!
    $condition: ModelStreetConditionInput
  ) {
    deleteStreet(input: $input, condition: $condition) {
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
export const createBuild = /* GraphQL */ `
  mutation CreateBuild(
    $input: CreateBuildInput!
    $condition: ModelBuildConditionInput
  ) {
    createBuild(input: $input, condition: $condition) {
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
export const updateBuild = /* GraphQL */ `
  mutation UpdateBuild(
    $input: UpdateBuildInput!
    $condition: ModelBuildConditionInput
  ) {
    updateBuild(input: $input, condition: $condition) {
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
export const deleteBuild = /* GraphQL */ `
  mutation DeleteBuild(
    $input: DeleteBuildInput!
    $condition: ModelBuildConditionInput
  ) {
    deleteBuild(input: $input, condition: $condition) {
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
export const createRooms = /* GraphQL */ `
  mutation CreateRooms(
    $input: CreateRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    createRooms(input: $input, condition: $condition) {
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
export const updateRooms = /* GraphQL */ `
  mutation UpdateRooms(
    $input: UpdateRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    updateRooms(input: $input, condition: $condition) {
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
export const deleteRooms = /* GraphQL */ `
  mutation DeleteRooms(
    $input: DeleteRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    deleteRooms(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
