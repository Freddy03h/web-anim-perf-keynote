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
  newmargindesktop: require("../assets/new-margin-desktop.png"),
  newmarginmobile: require("../assets/new-margin-mobile.png"),
  newmarginmobileframe: require("../assets/new-margin-mobile-frame.png"),
  marginmobile3: require("../assets/margin-mobile-3.png"),
  newtransformmobile: require("../assets/new-transform-mobile.png"),
  newtransformwillchangemobile: require("../assets/new-transform-willchange-mobile.png"),
  caniusewillchange: require("../assets/caniuse-willchange.png"),
  // toto: require("../assets/toto"),
  // toto: require("../assets/toto"),
  // toto: require("../assets/toto"),
  // toto: require("../assets/toto"),
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
          <Heading caps fit size={1} textColor="tertiary">
            Render
          </Heading>
          <Heading caps fit size={1} textColor="primary">
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
          <Heading caps fit size={1} textColor="tertiary">
            Layout
          </Heading>
          <Heading caps fit size={1} textColor="primary">
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
          <Heading caps fit size={1} textColor="tertiary">
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
          <Heading caps fit size={1} textColor="tertiary">
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
          <Heading caps fit size={1} textColor="tertiary">
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

        <Slide bgColor="secondary">
          <Heading caps fit size={1} textColor="tertiary">
            Web
          </Heading>
          <Heading caps fit size={1} textColor="primary">
            Animation
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Web animation
          </Heading>

          <Text textColor="tertiary">Le but est d'atteindre les 60 FPS (images par seconde)</Text>
          <Text textColor="tertiary">Soit ~16.6ms entre chaque image</Text>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Framerate
          </Heading>

          <iframe width="840" height="470" src="https://www.youtube.com/embed/pfiHFqnPLZ4" frameborder="0" allowfullscreen></iframe>
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin animation
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/yiregu/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin Desktop
          </Heading>

          <img src={images.newmargindesktop} />
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin Mobile
          </Heading>

          <img src={images.newmarginmobile} />
        </Slide>

        <Slide>
          <img src={images.newmarginmobileframe} />
          <img src={images.marginmobile3} />
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Transform animation
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/vodive/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Transform Mobile
          </Heading>

          <img src={images.newtransformmobile} />
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Transform + will-change
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/rolaso/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            will-change Mobile
          </Heading>

          <img src={images.newtransformwillchangemobile} />
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            caniuse will-change
          </Heading>

          <img src={images.caniusewillchange} />
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps fit size={1} textColor="tertiary">
            Request
          </Heading>
          <Heading caps fit size={1} textColor="primary">
            Animation
          </Heading>
          <Heading caps fit size={1} textColor="tertiary">
            Frame
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            requestAnimationFrame
          </Heading>

          <List textColor="tertiary">
            <ListItem>Appelé avant le rendu de la frame</ListItem>
            <ListItem>Regroupe les transformations de la même frame</ListItem>
            <ListItem>Le callback n'est plus appelé lorsque la page n'est plus visible</ListItem>
          </List>
        </Slide>


      </Deck>
    );
  }
}
