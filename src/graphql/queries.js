/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStreet = /* GraphQL */ `
  query GetStreet($id: ID!) {
    getStreet(id: $id) {
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
export const listStreets = /* GraphQL */ `
  query ListStreets(
    $filter: ModelStreetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBuild = /* GraphQL */ `
  query GetBuild($id: ID!) {
    getBuild(id: $id) {
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
export const listBuilds = /* GraphQL */ `
  query ListBuilds(
    $filter: ModelBuildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuilds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRooms = /* GraphQL */ `
  query GetRooms($id: ID!) {
    getRooms(id: $id) {
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
export const listRoomss = /* GraphQL */ `
  query ListRoomss(
    $filter: ModelRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      name
      link
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        link
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchPropertys = /* GraphQL */ `
  query SearchPropertys(
    $filter: SearchablePropertyFilterInput
    $sort: SearchablePropertySortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPropertys(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
