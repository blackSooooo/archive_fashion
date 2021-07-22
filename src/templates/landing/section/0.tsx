import styles from 'sass/templates/landing.module.scss'

export default function Section0() {
  return (
    <section className={styles.section0}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/videos/Raf_Simons.mp4" type="video/mp4" />
        <track kind="captions" />
      </video>
      <div className={styles.content}>
        <p className={styles.title}>Raf Simons</p>
      </div>
    </section>
  )
}
