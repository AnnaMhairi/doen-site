import Head from "next/head";
import styles from "../styles/Home.module.css";
import styleData from "../public/styleDatabase.js";
import classNames from "classnames";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Button,
  Input,
  InputGroup,
  IconButton,
  Stack,
  SimpleGrid,
  Box,
  Link,
  Flex,
  Icon,
} from "@chakra-ui/core";
import logo from "../public/logo.png";
import NextLink from "next/link";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showAlert: false,
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.search = this.search.bind(this);
  }

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.search();
    }
  }

  renderAlert() {
    return (
      <Alert status="error">
        <AlertIcon />
        Sorry, no results.
      </Alert>
    );
  }

  search() {
    this.setState({ showAlert: false });
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();

    let list = document.getElementById("table").innerHTML.toLowerCase();
    let itemNames = document.getElementsByClassName("styleName");
    let items = document.getElementsByClassName("item");
    let table = document.getElementById("table");
    let outerContainer = document.getElementById("outerContainer");

    if (!list.includes(input)) {
      return this.setState({ showAlert: true });
    } else {
      for (let i = 0; i < styleData.length; i++) {
        if (
          itemNames[i].childNodes[2].nodeValue.toLowerCase().includes(input)
        ) {
          table.style.display = "none";
          return outerContainer.appendChild(items[i]);
        } else {
          continue;
        }
      }
    }
  }

  render() {
    return (
      <div className={styles.topContainer}>
        <Head>
          <title>Doen Database</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.nav}>
            <div className={styles.innerNav}>
              <div className={styles.header}>DÔEN Directory</div>
              <div className={styles.buttonGroup}>
                <NextLink href="https://discourse.doendirectory.com">
                  <Button className={styles.communityBtn} size="sm">
                    Join the Community!
                  </Button>
                </NextLink>
                <NextLink href="https://discourse.doendirectory.com">
                  <Button className={styles.communityBtn} size="sm">
                    Discuss
                  </Button>
                </NextLink>
              </div>
            </div>
            <Stack spacing={4}>
              <Heading className={styles.subHeading} as="h3" size="lg">
                Search for and discover every DÔEN style
              </Heading>
              <InputGroup>
                <Input
                  type="text"
                  id="searchbar"
                  placeholder="Search.."
                  onKeyPress={this.onKeyUp}
                />
                <IconButton
                  aria-label="Search database"
                  icon="search"
                  onClick={() => this.search()}
                />
              </InputGroup>
              <div>
                <Button
                  className={styles.clear}
                  size="sm"
                  onClick={() => window.location.reload(false)}
                >
                  Clear results
                </Button>
              </div>
              {this.state.showAlert && this.renderAlert()}
            </Stack>
          </div>
          <div id="outerContainer">
            <div id="table">
              <SimpleGrid
                columns={[1, null, 2]}
                spacing={10}
                id="table"
                className={styles.table}
              >
                {styleData.map((item, i) => (
                  <Box
                    className={classNames("item", styles.row)}
                    key={i}
                    p={5}
                    shadow="md"
                    borderWidth="1px"
                  >
                    <div className={classNames("styleBox", styles.text)}>
                      <div className="styleName">Style: {item.style}</div>
                      <div>Color: {item.color}</div>
                      <Link
                        href={`https://google.com/search?q=doen+${
                          item.style.split(" ")[0]
                        }+${item.style.split(" ")[1]}`}
                        isExternal
                      >
                        Find it <Icon name="external-link" mx="2px" />
                      </Link>
                    </div>
                    <img className={styles.image} src={item.photo} />
                  </Box>
                ))}
              </SimpleGrid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
