import styles from '@/styles/footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.mainDiv}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <a href="#">About</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Help</a>
          </div>
          <div className={styles.copyright}>
            &copy; 2023 MMDB. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
