import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../public/styleDatabase.js";
import classNames from "classnames";

class Home extends React.Component {
  constructor() {
    super();
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.search();
    }
  }

  search() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("itemName");
    let item = document.getElementsByClassName("item");

    for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        return alert("Sorry, no results");
      } else {
        console.log(x[i]);
        let table = document.getElementById("table");
        table.style.display = "none";
        let outerContainer = document.getElementById("outerContainer");
        return outerContainer.appendChild(item[i]);
      }
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Doen Database</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.nav}>
            <h2>A Comprehensive, Searchable Database of DÔEN Products</h2>
            <h6>More styles coming soon...</h6>
            <input
              type="text"
              id="searchbar"
              placeholder="Search.."
              onKeyPress={this.onKeyUp}
            />
            <div>
              <button
                className={styles.clear}
                onClick={() => window.location.reload(false)}
              >
                Clear results
              </button>
            </div>
          </div>
          <div id="outerContainer">
            <div id="table" className={styles.table}>
              {data.map((item, i) => (
                <div className={classNames("item", styles.row)} key={i}>
                  <div className={classNames("itemName", styles.text)}>
                    <div>Style: {item.style}</div>
                    <div>Color: {item.color}</div>
                  </div>
                  <img className={styles.image} src={item.photo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
