const restaurantMenus = {

    "Sangeethai-menu-btn": {
        name: "Sangeetha Veg Restaurant",

        sections: {

            "Breakfast": [
                ["Idly (2)", 44],
                ["Vadai", 41],
                ["Pongal", 64],
                ["Poori (3)", 84]
            ],

            "Dosai": [
                ["Plain Dosai", 70],
                ["Masala Dosai", 95],
                ["Ghee Dosai", 100],
                ["Onion Dosai", 90],
                ["Rava Dosai", 94]
            ],

            "Rice": [
                ["Curd Rice", 80],
                ["Lemon Rice", 80],
                ["Veg Rice", 120]
            ],

            "Beverages": [
                ["Filter Coffee", 40],
                ["Tea", 35],
                ["Fresh Juice", 80]
            ]

        }
    },


    "Murugan-menu-btn": {
        name: "Murugan Idli Shop",

        sections: {

            "Breakfast": [
                ["Idly (2)", 50],
                ["Vadai", 45],
                ["Pongal", 70],
                ["Poori (2)", 80]
            ],

            "Dosai": [
                ["Plain Dosai", 75],
                ["Masala Dosai", 100],
                ["Ghee Dosai", 110],
                ["Onion Dosai", 95]
            ],

            "Rice": [
                ["Curd Rice", 85],
                ["Lemon Rice", 85]
            ],

            "Beverages": [
                ["Filter Coffee", 45],
                ["Tea", 35]
            ]

        }
    },


    "Dindigul-menu-btn": {
        name: "Dindigul Thalappakatti",

        sections: {

            "Biryani": [
                ["Chicken Biryani", 280],
                ["Mutton Biryani", 340],
                ["Egg Biryani", 220]
            ],

            "Starters": [
                ["Chicken 65", 220],
                ["Chicken Lollipop", 260],
                ["Mutton Chukka", 280]
            ],

            "Main Course": [
                ["Chicken Curry", 240],
                ["Mutton Curry", 290],
                ["Parotta (2)", 80]
            ],

            "Beverages": [
                ["Fresh Lime Juice", 70],
                ["Lassi", 90]
            ]

        }
    },


    "Anjappar-menu-btn": {
        name: "Anjappar Restaurant",

        sections: {

            "Starters": [
                ["Chicken 65", 220],
                ["Chicken Lollipop", 260],
                ["Paneer 65", 180]
            ],

            "Biryani": [
                ["Chicken Biryani", 250],
                ["Mutton Biryani", 320],
                ["Egg Biryani", 200]
            ],

            "Chettinad Specials": [
                ["Chicken Chettinad", 240],
                ["Mutton Chettinad", 300],
                ["Fish Curry", 250]
            ],

            "Beverages": [
                ["Fresh Lime Soda", 70],
                ["Fresh Juice", 80]
            ]

        }
    },


    "A2B-menu-btn": {
        name: "Adyar Ananda Bhavan",

        sections: {

            "Breakfast": [
                ["Idly (2)", 45],
                ["Vadai", 40],
                ["Pongal", 65],
                ["Poori (2)", 80]
            ],

            "Dosai": [
                ["Plain Dosai", 70],
                ["Masala Dosai", 95],
                ["Ghee Roast", 110],
                ["Onion Dosai", 90]
            ],

            "Rice": [
                ["Curd Rice", 75],
                ["Lemon Rice", 80],
                ["Vegetable Rice", 120]
            ],

            "Beverages": [
                ["Filter Coffee", 40],
                ["Tea", 35],
                ["Fresh Juice", 75]
            ]

        }
    },


    "Buhari-menu-btn": {
        name: "Buhari Hotel",

        sections: {

            "Biryani": [
                ["Chicken Biryani", 280],
                ["Mutton Biryani", 350],
                ["Egg Biryani", 220]
            ],

            "Starters": [
                ["Chicken 65", 230],
                ["Chilli Chicken", 240],
                ["Chicken Manchurian", 250]
            ],

            "Main Course": [
                ["Chicken Curry", 250],
                ["Mutton Curry", 300],
                ["Parotta (2)", 80]
            ],

            "Beverages": [
                ["Fresh Lime Juice", 70],
                ["Fresh Juice", 80]
            ]

        }
    }

};


// Create one menu container

const menuPopup = document.createElement("div");

menuPopup.id = "restaurant-menu-popup";

document.body.appendChild(menuPopup);


// Find all View Menu buttons

const viewButtons = document.querySelectorAll(".view-button");


viewButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the restaurant using button ID

        const restaurant = restaurantMenus[button.id];


        if (!restaurant) {
            return;
        }


        // Start creating menu HTML

        let menuHTML = `
            <div class="popup-menu">

                <button id="close-menu">✕</button>

                <h2>${restaurant.name}</h2>
        `;


        // Create each category

        for (const category in restaurant.sections) {

            menuHTML += `
                <h3>${category}</h3>
                <ul>
            `;


            // Create food items

            restaurant.sections[category].forEach(function(item) {

                menuHTML += `
                    <li>
                        ${item[0]} - ₹${item[1]}
                    </li>
                `;

            });


            menuHTML += `
                </ul>
            `;

        }


        menuHTML += `
            </div>
        `;


        
        menuPopup.innerHTML = menuHTML;


        

        menuPopup.style.display = "block";


        // Close button

        document
            .querySelector("#close-menu")
            .addEventListener("click", function() {

                menuPopup.style.display = "none";

            });

    });

});

