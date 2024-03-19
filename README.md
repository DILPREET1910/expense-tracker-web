# [Expense-Tracker-Web](https://expense-tracker-web-dilpreet1910s-projects.vercel.app)


[Demo video](https://github.com/DILPREET1910/expense-tracker-web/assets/81746463/3ee9c788-5875-4b54-9aec-e46aa5cf0a1f)


The Expense Tracker is a personal finance tool designed to help individuals monitor their spending habits and manage their expenses effectively. This intuitive application enables users to create custom categories and add expenses accordingly. By offering a comprehensive view of all data entries and a dynamic dashboard displaying total costs within specified date ranges and across categories, this tool assists in gaining insights into spending patterns.

I initially developed this website to gain a better understanding of my spending habits, aiming to track where and how I spend my money. By keeping a record of expenses and visualizing spending patterns, this tracker aims to facilitate smarter financial decisions and improve overall spending habits.

# Features
- Create and manage custom spending categories
- Add expenses with/without detailed description 
- View all expense entries
- Dynamic dashboard showcasing total expenses within specified date ranges and across categories
- Synced across all devices
- Share your expense with your friends and family

# Getting Started

Just visit the link https://expense-tracker-web-dilpreet1910s-projects.vercel.app/ sign up and starting tracking your expenses

### Self Host

Alternatively you can build and deploy it to your own server. I have used Postgres for database, hosted on Vercel and clerk for authentication. So you will have to create environment variables and pass the necessary parameters/keys accordingly.

# Contribute in making the app better
Contributions are most welcome! If you find any issues or have suggestions for improvements, please feel free to [open an issue](https://github.com/DILPREET1910/expense-tracker-web/issues).

In this Next.js/React project:
- all code related to backend logic and database read write operations are nested under `app/lib/` folder.
- Most of the UI components are nested under `app/ui` directory.
- Pages in `app/sing-in` `app/sign-up` contains the clerk authentication redirects - UI code.
- Remaining files in `app/` directory and `app/dashboard` directory are responsible for page routing and data fetching.

 Each file within these directory is meticulously commented and named according to its specific use case. This structured approach ensures that understanding the functionality of each part of the codebase is straightforward.

# ToDo
- Link bank transactions history so that user can quickly select category for each transaction and description if they want and add them
- Local caching for PWA. 
