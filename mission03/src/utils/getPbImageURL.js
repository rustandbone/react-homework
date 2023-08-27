import pb from '@/api/pocketbase';

export const getPbImageURL = (item, fileName = 'img') =>
  `https://react-mission.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
