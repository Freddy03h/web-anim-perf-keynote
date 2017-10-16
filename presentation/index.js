// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
//import createTheme from "spectacle/lib/themes/default";
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  renderengine: require("../assets/quicklook-render-engine.png"),
};
preloader(images);

const videos = {
  reflow: require("file-loader!../assets/video/reflow.mp4"),
  layout: require("file-loader!../assets/video/layout.mp4"),
  paint: require("file-loader!../assets/video/paint.mp4"),
  composite: require("file-loader!../assets/video/composite.mp4"),
};

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        progress="bar"
        controls={false}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Web Animation
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Performance
          </Heading>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Render
          </Heading>
          <Heading caps size={1} textColor="primary">
            Engine
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Render Engine
          </Heading>
          <img src={images.renderengine} />
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Layout
          </Heading>
          <Heading caps size={4} textColor="primary">
            aka. Reflow
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            CSS Layout Mode
          </Heading>

          <BlockQuote>
            <Quote>Algorithm determining the position and the size of boxes based on the way they interact with their sibling and ancestor boxes</Quote>
            <Cite>MDN</Cite>
          </BlockQuote>

          <Text textColor="tertiary">Block Layout, Inline Layout,<br/>Table Layout, Positioned Layout,<br/>Flexible Box Layout, Grid Layout</Text>
        </Slide>

        <Slide>
          <video src={videos.reflow} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Paint
          </Heading>
        </Slide>

        <Slide>
          <Text bold>Applique tous les styles visuels</Text>
          <List textColor="tertiary">
            <ListItem>background</ListItem>
            <ListItem>color</ListItem>
            <ListItem>box-shadow</ListItem>
            <ListItem>border-color</ListItem>
            <ListItem>…</ListItem>
          </List>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Composite
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>

          <List textColor="tertiary">
            <ListItem>Bitmaps envoyés au GPU</ListItem>
            <ListItem>GPU applique des opérations sur les textures (matrix operation, alpha blends, … )</ListItem>
            <ListItem>
              Certains éléments et certaines propriétés provoquent automatiquement la création d'un Layer
              <List textColor="tertiary">
                <ListItem>3D transform</ListItem>
                <ListItem>css animation opacity or transform</ListItem>
                <ListItem>accelerated css filters</ListItem>
                <ListItem>video, canvas</ListItem>
                <ListItem>…</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>

          <List textColor="tertiary">
            <ListItem>Hack pour forcer l'accélération GPU : <Code>translateZ(0)</Code></ListItem>
            <ListItem>Ne pas en abuser, surtout sur des éléments qui repaint</ListItem>
            <ListItem>À abandonner au profit de <Code>will-change</Code></ListItem>
          </List>
        </Slide>

        <Slide>
          <Text>(animation layers)</Text>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Anime
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Layout
          </Heading>
          <video src={videos.layout} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Paint
          </Heading>
          <video src={videos.paint} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>
          <video src={videos.composite} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        {/***************************/}

        {/*<Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>*/}

      </Deck>
    );
  }
}
