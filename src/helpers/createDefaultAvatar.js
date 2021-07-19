const defaultAvatars = [
  '/assets/images/pullDog.jpg',
  '/assets/images/avatar2.jpg',
  '/assets/images/avatar3.jpg',
  '/assets/images/avatar4.jpg'
]

function getAvatarUser(userId, userAvatar) {
  const idxDefaultAvatar = userId % defaultAvatars.length; // 0 1 2 3
  const avatar = userAvatar || defaultAvatars[idxDefaultAvatar];

  return avatar
}

export default getAvatarUser
