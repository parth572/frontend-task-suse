Attached video : frontend_task.mp4

My design for the SUSE Repository Mirroring Tool (RMT) frontend focuses on creating a user-friendly and easy-to-use interface. To achieve this goal, I have used a minimalistic and clean design, with a focus on easy navigation and readability.

To improve UI performance, I have implemented event delegation, which allows for efficient handling of events in a large number of elements. I have also used CSS Flex for layout, as it allows for easy and flexible positioning of elements on the page. To build the project, I have chosen React library, which is a popular and widely used JavaScript library for building single-page applications.

The project utilizes two JSON files for data:

1. summary.json: Contains a short summary about RMT and how clients can use the proxy.
2. products.json: Provides an overview of the available products and their repositories on RMT.

The project also includes two reusable components:

1. Summary.js: Displays the summary information from the summary.json file.
2. ProductsPage.js: Lists the products and their repositories from the products.json file. On the product listing page, there is a "Show detail" button for each product that displays detailed information about the specific product and its repositories on RMT.

For the product page : (Available Products)

- About RMT
- How do I set up clients to use RMT?
- Available Products - name and description

For the Product and Repository Information Page :

- Product Name
- Product Description
- Repositories Name
- Repositories Description

In summary, my design decisions for the SUSE Repository Mirroring Tool frontend have been made with the goal of creating a user-friendly and easy-to-use interface that makes it easy for users to find and access the products and repositories they need.
