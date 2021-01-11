import React from 'react';
import style from './Post.module.css';
import avatarUnName from "../../../../images/unnamed.png";

const Post = ({massage, likesCount, profile}) => {
    let avatar;
    if (profile && profile.photos.small != null) {
        avatar = profile.photos.small;
    }
    return (
        <div className={style.item}>
            <img src={avatar ? avatar : avatarUnName} alt={''}/>
            <div className={style.item__massage}>
                <span>{`${massage}`}</span>
            </div>
            <div>
                <span>Like {likesCount}</span>
            </div>
        </div>
    )
}

export default Post;