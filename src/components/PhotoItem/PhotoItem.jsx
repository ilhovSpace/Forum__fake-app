import React from 'react'

const img = {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  }

const PhotoItem = ({ photo }) => {
    return (
        <div className='Photo-item'>
            <img src={photo.thumbnailUrl} />
        </div>
    )
}

export default PhotoItem
