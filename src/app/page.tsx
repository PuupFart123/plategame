import styles from "./page.module.css";

const PLATES = [
  { rarity: "Common", size: "M", price: 2.99 },
  { rarity: "Common", size: "L", price: 4.99 },
  { rarity: "Common", size: "XL", price: 6.99 },
  { rarity: "Rare", size: "M", price: 5.99 },
  { rarity: "Rare", size: "L", price: 7.99 },
  { rarity: "Rare", size: "XL", price: 9.99 },
  { rarity: "Epic", size: "M", price: 8.99 },
  { rarity: "Epic", size: "L", price: 10.99 },
  { rarity: "Epic", size: "XL", price: 12.99 },
  { rarity: "Legendary", size: "M", price: 14.99 },
  { rarity: "Legendary", size: "L", price: 16.99 },
  { rarity: "Legendary", size: "XL", price: 19.99 },
  { rarity: "Anti-nonprofit", size: "M", price: 24.99 },
  { rarity: "Anti-nonprofit", size: "L", price: 29.99 },
  { rarity: "Anti-nonprofit", size: "XL", price: 39.99 },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>The Anti-nonprofit Plate Game</h1>
        <section className={`${styles.introSection} ${styles.lowercase}`}>
          <p className={styles.introChunk}>
            welcome to the <b>anti-nonprofit plate game</b>. plates come in different rarities and sizes. find plate listings on instagram at <a href="https://instagram.com/the.anti.nonprofit.plate.game" target="_blank" rel="noopener noreferrer"><b>&#64;the.anti.nonprofit.plate.game</b></a>.
          </p>
          <p className={styles.introChunk}>
            we are vehemently anti-nonprofit, and the purpose of this game is to spread awareness on the nnd, or the necessary nonprofit disease that affects the hippocampus and tricks high schoolers into starting nonprofits.
          </p>
          <p className={styles.introChunk}>
            buy a plate by venmoing us, and we&apos;ll drop it off at a secret location you&apos;ll only discover after your purchase.
          </p>
          <p className={styles.introChunk}>
            <b>venmo:</b> &#64;anti-npg or 206 403 7400
          </p>
        </section>
        <a
          href="https://www.instagram.com/the.anti.nonprofit.plate.game/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramButton}
        >
          Check out the Instagram
        </a>

        <section className={styles.catalogSection}>
          <h2>Plate Catalog</h2>
          <table className={styles.plateTable}>
            <thead>
              <tr>
                <th>Rarity</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {PLATES.map((plate, idx) => (
                <tr key={idx}>
                  <td>{plate.rarity.charAt(0).toUpperCase() + plate.rarity.slice(1).toLowerCase()}</td>
                  <td className={styles.upper}>{plate.size.toUpperCase()}</td>
                  <td>${plate.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={`${styles.howToPlaySection} ${styles.lowercase}`}>
          <h2>How It Works</h2>
          <ol>
            <li>Check out available plates on our <a href="https://instagram.com/the.anti.nonprofit.plate.game" target="_blank" rel="noopener noreferrer"><b>&#64;the.anti.nonprofit.plate.game</b></a>.</li>
            <li>Venmo <b>&#64;anti-npg</b> or <b>206 403 7400</b> the price of your chosen plate (include your Instagram handle in the note).</li>
            <li>After payment, you&apos;ll receive a secret location for your plate drop-off!</li>
          </ol>
        </section>

        <section className={`${styles.faqSection} ${styles.lowercase}`}>
          <h2>FAQ & Contact</h2>
          <ul>
            <li><b>What are the plate rarities?</b> Common, Rare, Epic, Legendary, and Anti-nonprofit. Each comes in Medium, Large, and Extra-Large.</li>
            <li><b>How do I pay?</b> Venmo <b>&#64;anti-npg</b> or <b>206 403 7400</b>.</li>
            <li><b>Where do I get my plate?</b> We&apos;ll DM you a secret location after your purchase!</li>
            <li><b>Questions?</b> DM us on <a href="https://instagram.com/the.anti.nonprofit.plate.game" target="_blank" rel="noopener noreferrer"><b>&#64;the.anti.nonprofit.plate.game</b></a>.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
