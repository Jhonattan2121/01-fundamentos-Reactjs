import styles from './Post.module.css'


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.user}>
                    <img 
                    className={styles.avatar}
                     src="https://github.com/jhonattan2121.png"  />
                     <div className={styles.authorInfo}></div>
                     <strong>Jhonattan Ferri</strong>
                     <span>Desenvolvedor Junior Web</span>
                </div>

                <time title='08 de Março às 03:03' dateTime='2023-03-08 03:03:30'>Publicado há 1h</time>
                
           </header>

           <div className={styles.content}>
           <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href="">👉 jane.design/doctorcare</a></p>

            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>

           </div>
        </article>
    );
}