const menuData = {
    starters: [
        { name: "Garlic Bread", image: "garlic bread.jpg", price: 120, calories: 150, procedure: "Mix garlic with butter, spread on bread, and toast." },
        { name: "Cheese Balls", image: "cheese balls.jpg", price: 150, calories: 250, procedure: "Shape cheese into balls, coat in breadcrumbs, and fry." },
        { name: "Bruschetta", image: "bruschetta.jpg", price: 130, calories: 200, procedure: "Top toasted bread with diced tomatoes and basil." },
        { name: "Paneer Tikka", image: "panner tikka.jpg", price: 180, calories: 250, procedure: "Marinate paneer in spices and grill." },
        { name: "Chicken Tikka", image: "chicken tikka.jpg", price: 220, calories: 300, procedure: "Marinate chicken in yogurt and spices, then grill." },
        { name: "Vegetable Spring Rolls", image: "veg spring soup.jpg", price: 120, calories: 180, procedure: "Veg spring soup with seasonal vegetables and broth." },
        { name: "Hummus with Pita Bread", image: "hummus with pita bread.jpg", price: 160, calories: 300, procedure: "Serve hummus with warm pita bread." },
        { name: "Stuffed Mushrooms", image: "stuffed mushrooms.jpg", price: 190, calories: 250, procedure: "Stuff mushrooms with cheese and bake." },
        { name: "Chicken Wings", image: "chicken wings.jpg", price: 200, calories: 350, procedure: "Marinate chicken wings and deep fry." }
    ],
    mainCourse: [
        { name: "Margherita Pizza", image: "margherita pizza.jpg", price: 250, calories: 300, procedure: "Spread tomato sauce, add cheese and basil, and bake." },
        { name: "Spaghetti Carbonara", image: "spaghetti corbonara.jpg", price: 300, calories: 400, procedure: "Mix cooked spaghetti with eggs, cheese, and crispy bacon." },
        { name: "Grilled Chicken", image: "grilled chicken.jpg", price: 350, calories: 500, procedure: "Marinate and grill chicken." },
        { name: "Paneer Butter Masala", image: "panner butter masala.jpg", price: 280, calories: 450, procedure: "Cook paneer in tomato gravy with cream and spices." },
        { name: "Chicken Biryani", image: "chicken biryani.jpg", price: 350, calories: 600, procedure: "Layer spiced rice with marinated chicken and cook." },
        { name: "Veg Biryani", image: "veg biryani.jpg", price: 270, calories: 450, procedure: "Cook vegetables and layer with spiced rice." },
        { name: "Butter Chicken", image: "butter chicken.jpg", price: 320, calories: 500, procedure: "Cook chicken in a rich butter-based gravy." },
        { name: "Grilled Fish", image: "grilled fish.jpg", price: 400, calories: 350, procedure: "Season fish and grill until golden brown." },
        { name: "Mutton Rogan Josh", image: "mutton rogan gosh.jpg", price: 380, calories: 550, procedure: "Cook mutton in aromatic spices and gravy." }
    ],
    beverages: [
        { name: "Cappuccino", image: "cappuccino.jpg", price: 100, calories: 120, procedure: "Brew coffee, steam milk, and top with cocoa powder." },
        { name: "Fresh Lime Soda", image: "fresh lime soda.jpg", price: 80, calories: 80, procedure: "Mix lime juice, sugar, and soda water." },
        { name: "Mango Smoothie", image: "mango smothie.jpg", price: 120, calories: 200, procedure: "Blend mango with yogurt and honey." },
        { name: "Lassi", image: "lassi.jpg", price: 100, calories: 150, procedure: "Blend yogurt with water, sugar, and cardamom." },
        { name: "Iced Tea", image: "iced tea.jpg", price: 90, calories: 100, procedure: "Brew tea, chill, and serve with ice." },
        { name: "Mint Mojito", image: "mint mojito.jpg", price: 150, calories: 100, procedure: "Muddle mint with lime, add soda water." },
        { name: "Cold Coffee", image: "cold coffee.jpg", price: 110, calories: 150, procedure: "Blend coffee with ice and milk." }
    ],
    desserts: [
        { name: "Chocolate Lava Cake", image: "chocolate lava cake.jpg", price: 180, calories: 450, procedure: "Bake chocolate cake with a molten center." },
        { name: "Cheesecake", image: "cheese cake.jpg", price: 200, calories: 400, procedure: "Layer cream cheese and biscuit base." },
        { name: "Fruit Salad", image: "fruit salad.jpg", price: 150, calories: 150, procedure: "Mix fresh fruits with honey and lime." },
        { name: "Brownie with Ice Cream", image: "brownie with ice-cream.jpg", price: 180, calories: 350, procedure: "Serve warm brownie with ice cream." },
        { name: "Gulab Jamun", image: "gulab jamun.jpg", price: 140, calories: 300, procedure: "Deep-fry dough balls and soak in syrup." },
        { name: "Rasmalai", image: "rasmalai.jpg", price: 160, calories: 350, procedure: "Serve soft cheese balls in flavored milk." },
        { name: "Apple Pie", image: "apple pie.jpg", price: 220, calories: 400, procedure: "Bake apple filling in a pastry crust." }
    ]
};

function openMenu() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("menuSection").style.display = "block";
}

function showCategory(category) {
    const itemsSection = document.getElementById("itemsSection");
    itemsSection.innerHTML = ""; // Clear previous items

    menuData[category].forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "category";
        itemDiv.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width:100px; height:100px;">
                             <h4>${item.name}</h4><p>₹${item.price}</p>`;
        itemDiv.onclick = () => openModal(item);
        itemsSection.appendChild(itemDiv);
    });
}

function openModal(item) {
    document.getElementById("itemImage").src = item.image;
    document.getElementById("itemName").textContent = item.name;
    document.getElementById("itemPrice").textContent = item.price;
    document.getElementById("itemCalories").textContent = item.calories;
    document.getElementById("itemProcedure").textContent = item.procedure;
    document.getElementById("itemModal").style.display = "block";

}

function closeModal() {
    document.getElementById("itemModal").style.display = "none";
}


// Function to show QR code when "Buy" button is clicked
function showQRCode() {
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.style.display = "block"; // Show QR code container
}

// Function to close the modal (if not already present)
function closeModal() {
    document.getElementById("itemModal").style.display = "none";
    document.getElementById("qrCodeContainer").style.display = "none"; // Hide QR code container when modal closes
}
// Function to show/hide QR code when "Buy" button is clicked
function showQRCode() {
    const qrCodeContainer = document.getElementById("qrCodeContainer");

    // Toggle the display style between block and none
    if (qrCodeContainer.style.display === "block") {
        qrCodeContainer.style.display = "none"; // Hide QR code
    } else {
        qrCodeContainer.style.display = "block"; // Show QR code
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("itemModal").style.display = "none";
    document.getElementById("qrCodeContainer").style.display = "none"; // Hide QR code container when modal closes
}
