import React from 'react'
import Menus from './Menus'
import Footer from './Footer'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Stack, Text } from '@chakra-ui/react'

const Peanut1 = () => {
  return (
    <>
      <Menus />
      <Stack spacing={8} mt={8} ml={8} mr={8} mb={12}>

        <Breadcrumb fontWeight="bold" spacing="8px" separator="•">
          <BreadcrumbItem _hover={{ color: "orange" }}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem _hover={{ color: "orange" }}>
            <BreadcrumbLink href='/recipe'>Healthy & Delicious Recipe</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Text fontSize="2xl" fontWeight="bold">Peanut Butter Waffles with Pintola: A Delicious Start to Your Day</Text>
        <Text fontSize="sm" color="gray.500" fontStyle="italic">by Admin • 2 min read</Text>

        <Image
          h="auto"
          w="100%"
          maxH="400px"
          objectFit="cover"
          src="https://pintola.in/cdn/shop/articles/unnamed_3_800x.jpg?v=1711443260"
          alt="Peanut Butter Waffles with Pintola"
        />

        <Text fontSize="lg" textAlign="justify">
          There's nothing like waking up to the aroma of freshly made waffles. But what if you could make them even better? With Pintola Peanut Butter, you can elevate your waffle game to a whole new level. These Peanut Butter Waffles are not only scrumptious but also packed with the goodness of Pintola Peanut Butter. Here's how you can make them:
        </Text>

        <Text fontWeight="bold" mt={4}>Ingredients:</Text>
        <Stack spacing={1} ml={4}>
          <Text>Flour: 117 grams</Text>
          <Text>Sugar: 26 grams</Text>
          <Text>Baking Powder: 5 grams</Text>
          <Text>Baking Soda: 3 grams</Text>
          <Text>Salt: 1 gram</Text>
          <Text>Melted Butter: 30 ml</Text>
          <Text>Pintola Peanut Butter: 60 grams</Text>
          <Text>Egg: 1</Text>
          <Text>Buttermilk: 230 ml</Text>
          <Text>Vanilla: 1 tsp</Text>
        </Stack>

        <Text fontWeight="bold" mt={4}>Preparation:</Text>
        <Stack spacing={4} ml={4}>
          <Text>Mix Dry Ingredients: In a bowl, combine the flour, sugar, baking powder, baking soda, and salt. Set aside.</Text>
          <Text>Combine Wet Ingredients: In another bowl, whisk together the Pintola Peanut Butter, melted butter, egg, buttermilk, and vanilla until well mixed.</Text>
          <Text>Combine Wet and Dry Ingredients: Gradually add the wet ingredients to the dry ingredients, mixing until just combined. Be careful not to overmix.</Text>
          <Text>Cook the Waffles: Preheat your waffle maker. Pour the batter into the waffle maker and cook according to the manufacturer's instructions, usually until the waffles are golden and crispy.</Text>
          <Text>Serve: Serve the waffles hot, stacked high, and topped with your favorite fruits and a generous dollop of Pintola Peanut Butter for an extra burst of flavor.</Text>
        </Stack>

        <Text fontWeight="bold" mt={4}>Tips:</Text>
        <Stack spacing={2} ml={4}>
          <Text>Adjusting Sweetness: You can tweak the amount of sugar in the recipe to suit your taste preferences.</Text>
          <Text>Preventing Stickiness: Ensure to grease the waffle maker before pouring the batter to prevent the waffles from sticking.</Text>
        </Stack>

        <Text fontSize="lg" textAlign="justify">
          These Peanut Butter Waffles are a fantastic way to start your day with a burst of energy and flavor. The creamy richness of Pintola Peanut Butter adds a delightful twist to the classic waffle, making it a breakfast favorite that's both satisfying and delicious. So why wait? Grab your Pintola Peanut Butter and make your mornings special with these heavenly waffles!
        </Text>

      </Stack>

      <Footer />
    </>
  )
}

export default Peanut1
