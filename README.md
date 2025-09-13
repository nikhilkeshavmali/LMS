EduConnect Student Portal - GitHub README
markdown
# EduConnect Student Portal

A modern, responsive student portal with authentication, dashboard, and course management features. Built with pure HTML, CSS, and JavaScript.
![Uploading image.png…]()


## 🌟 Features

- **User Authentication**: Secure login and signup system with form validation
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Dashboard**: View courses, announcements, and academic progress
- **Course Management**: Track progress and access course materials
- **Modern UI**: Clean, attractive interface with smooth animations
- **Local Storage**: Data persistence using browser's local storage

## 🚀 Live Demo

Check out the live demo: [EduConnect on Vercel](https://educonnect-student-portal.vercel.app)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties, Flexbox, Grid, and animations
- **JavaScript**: DOM manipulation, localStorage, and interactive features
- **Google Fonts**: Poppins typeface for clean typography
- **Material Icons**: Modern icon set for intuitive UI

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/educonnect-student-portal.git
Navigate to the project directory:

bash
cd educonnect-student-portal
Open any of the HTML files in your browser:

bash
# For login page
open index.html

# For signup page
open signup.html

# For dashboard (requires login)
open dashboard.html
📁 File Structure
text
educonnect-student-portal/
├── index.html          # Login page
├── signup.html         # Registration page
├── dashboard.html      # Main dashboard
├── css/
│   ├── style.css       # Main stylesheet
│   └── auth.css        # Authentication page styles
├── js/
│   ├── script.js       # Main JavaScript
│   ├── auth.js         # Authentication logic
│   └── dashboard.js    # Dashboard functionality
└── README.md          # Project documentation
🎨 Customization
Theming
The application uses CSS custom properties for theming. Modify the :root and .dark-mode CSS variables to change the color scheme:

css
:root {
  --primary-blue: #2563eb;
  --light-blue: #eff6ff;
  /* Add your custom colors */
}
Adding New Courses
Edit the courses section in dashboard.html:

html
<div class="course-card" data-type="course" data-title="Course Name">
  <!-- Course content -->
</div>
Modifying Announcements
Update the announcements list in dashboard.html:

html
<li class="announcement-item" data-type="announcement" data-title="New Announcement">
  <!-- Announcement content -->
</li>
📱 Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

🚀 Deployment
Deploy to Vercel
Fork the project

Create a new repository on GitHub with your project files

Go to vercel.com

Sign up or log in with your GitHub account

Click "New Project" and import your GitHub repository

Vercel will automatically detect your project and configure settings

Click "Deploy" - your site will be live at a URL like your-project-name.vercel.app

Deploy to Netlify
Build your project (if needed)

Drag and drop your project folder to netlify.com

Your site will be live instantly with a random URL

Customize the site name in the Netlify dashboard

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

🙏 Acknowledgments
Icons by Google Material Icons

Images from Unsplash

Fonts from Google Fonts

UI inspiration from modern educational platforms

📞 Support
If you have any questions or issues, please open an issue on GitHub or contact us at nikhilmali27103@gmail.com

