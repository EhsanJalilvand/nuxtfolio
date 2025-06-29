# Personal Portfolio – Nuxt 3

A professional personal portfolio website built using **Nuxt 3**.  
This project is intended to showcase personal information, technical skills, work experience, and projects in a clean, responsive, and modern format with support for multiple languages, email communication, and Dockerized deployment.

[Live Preview](https://ehsanjalilvand.dev)

---

## 📌 Features

- **Responsive Design** with light/dark mode toggle
- **Multilingual Support** (English, Persian, German) via `@nuxtjs/i18n`
- **GSAP Animations** for smooth transitions and effects
- **Custom Cursor Effects**
- **Contact Form** integrated with EmailJS
- **Configurable Email & Telegram Integration** via `.env`
- **Docker Support** for containerized deployment
- **Nuxt 3 Modular Architecture**
- **Tailwind CSS** for fast styling and utility-first design

---

## 🚀 Technologies

Nuxt 3, Tailwind CSS, GSAP, EmailJS, Vue Toastification, @nuxtjs/i18n, @nuxtjs/color-mode, @vueuse/nuxt, @heroicons/vue, lucide-vue-next

---

## 📥 Installation & Run (Local)

Clone the repository:

```bash
git clone https://github.com/EhsanJalilvand/nuxtfolio.git
cd nuxtfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 📝 Environment Variables

Create a `.env` file in the project root:

```env
# Telegram Bot config (optional)
NUXT_TELEGRAM_BOT_TOKEN=your-telegram-bot-token
NUXT_TELEGRAM_CHAT_ID=your-telegram-chat-id

# Email config (required for contact form)
NUXT_EMAIL_USER=your.email@example.com
NUXT_EMAIL_PASS=your-generated-app-password
NUXT_EMAIL_TO=recipient@example.com
```

For Email App Password configuration, check:  
[Google App Password Documentation](https://support.google.com/accounts/answer/185833)

---

## 🐳 Docker Support

You can run this project as a Docker container.

### 📦 Build the Docker image:

```bash
docker build -t nuxtfolio .
```

### 🛠️ Run the container:

```bash
docker run -d -p 3000:3000 --env-file .env --name nuxtfolio nuxtfolio
```

### 📂 Pass `.env` to container:

The `--env-file .env` option loads environment variables into the container.

Now visit [http://localhost:3000](http://localhost:3000)

---


