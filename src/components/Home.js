import { Container } from "../styles/HomeStyles"
import Section from "./Section"

const Home = () => {
  return (
    <Container>
      <Section
        title="Model 3"
        description="For Immediate Delivery, Explore Existing Inventory and Used Inventory"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar and Powerwall"
        description="Rebates are now available in selected states on Powerwall and solar. Learn more"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Accesories"
        description="Order Online for Touchless Delivery"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  )
}

export default Home
