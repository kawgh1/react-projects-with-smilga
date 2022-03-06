# react-projects-5-menu

[https://react-projects-5-menu.netlify.app/](https://react-projects-5-menu.netlify.app/)

-   Great example of dynamically creating categories based solely on items taken from API/data

              File: App.js
              ...

              import React, { useEffect, useState } from "react";
              import Menu from "./Menu";
              import Categories from "./Categories";
              import itemData from "./data";

              // create an array of Set objects of categories based on the menu item data
              // this means if a new menu item with a new category is added, it won't break our app
              // example new item with category "dinner" -> will dynamically create a new button/category "dinner"

              const allCategories = [
                  "all",
                  ...new Set(itemData.map((item) => item.category)),
              ];

              console.log(allCategories); // [ "all", "breakfast", "lunch", "shakes" ]



              function App() {

                  const [menuItems, setMenuItems] = useState(itemData || []);
                  const [categories, setCategories] = useState(allCategories);

                  // here 'itemData' is what we get from API/data - it never changes
                  // 'menuItems' - what is displayed - is dynamic
                  // if user selects 'breakfast' - we set 'menuItems' = 'breakfast'
                  // but we're always filtering off of the original, unchanged 'itemData' from API/data
                  //
                  // notice also, we don't need useEffect to achieve this functionality

                  const filterItems = (category) => {
                      if (category === "all") {
                          setMenuItems(itemData);
                          return;
                      }
                      const newItems = itemData.filter((item) => item.category === category);
                      setMenuItems(newItems);
                  };

                  return (
                      <main>
                          <section className="menu section">
                              <div className="title">
                                  <h2>Our Menu</h2>
                                  <div className="underline"></div>
                              </div>
                              <Categories categories={categories} filterItems={filterItems} />
                              <Menu menuItems={menuItems} />
                          </section>
                      </main>
                  );
              }

              export default App;
