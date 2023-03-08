import styles from './Avatar.module.css'

export function Avatar({ hashBorder = true, src }) {
    return (
        <img 
            className={hashBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}  />
    );
}