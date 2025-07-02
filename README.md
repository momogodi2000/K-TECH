# K-TECH MULTI SERVICES - Application Web Officielle

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8.svg)](https://web.dev/progressive-web-apps/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)

## 🚀 Vue d'ensemble

Application web moderne et responsive pour K-TECH MULTI SERVICES, offrant des services informatiques professionnels à Douala, Cameroun.

### 🎯 Caractéristiques principales

- ✅ **Progressive Web App (PWA)** - Fonctionne hors ligne
- ✅ **Responsive Design** - Optimisé pour mobile
- ✅ **Animations 3D** - Experience interactive avec Three.js
- ✅ **Multi-canal de contact** - WhatsApp, téléphone, email
- ✅ **SEO optimisé** - Pour le marché camerounais
- ✅ **Multilingue** - Français/Anglais
- ✅ **Performance optimale** - Score Lighthouse > 90

## 📋 Prérequis

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker (optionnel pour le déploiement)
- Git

## 🛠️ Installation

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/k-tech-multi-services.git
cd k-tech-multi-services
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

Créer un fichier `.env` à la racine du projet:

```env
# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# API Endpoints (optionnel)
VITE_API_URL=https://api.k-tech-services.cm

# WhatsApp Business (optionnel)
VITE_WHATSAPP_API_KEY=your_api_key
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🏗️ Build de production

### Build standard

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

### Prévisualiser le build

```bash
npm run preview
```

## 🐳 Déploiement avec Docker

### 1. Build de l'image Docker

```bash
docker-compose build
```

### 2. Lancer les conteneurs

```bash
docker-compose up -d
```

### 3. Arrêter les conteneurs

```bash
docker-compose down
```

### Configuration Docker personnalisée

Pour une configuration SSL/HTTPS, décommentez les lignes appropriées dans `docker-compose.yml`:

```yaml
volumes:
  - ./ssl/certs:/etc/nginx/ssl:ro
```

## 📁 Structure du projet

```
k-tech-multi-services/
├── public/               # Fichiers statiques
│   ├── icons/           # Icônes PWA
│   └── images/          # Images du site
├── src/
│   ├── components/      # Composants React
│   │   ├── common/      # Composants réutilisables
│   │   ├── layout/      # Layout (Header, Footer)
│   │   ├── sections/    # Sections de pages
│   │   ├── contact/     # Composants de contact
│   │   └── 3d/          # Composants Three.js
│   ├── pages/           # Pages de l'application
│   ├── hooks/           # Custom React hooks
│   ├── services/        # Services API
│   ├── utils/           # Utilitaires
│   ├── styles/          # Fichiers CSS
│   └── locales/         # Fichiers de traduction
├── docker-compose.yml   # Configuration Docker
├── Dockerfile           # Image Docker
├── nginx.conf           # Configuration Nginx
└── vite.config.js       # Configuration Vite
```

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build
- `npm run lint` - Vérifie le code avec ESLint
- `npm run test` - Lance les tests
- `npm run docker:build` - Build l'image Docker
- `npm run docker:up` - Lance les conteneurs Docker
- `npm run docker:down` - Arrête les conteneurs Docker

## 📱 PWA Features

L'application est une Progressive Web App complète avec:

- ✅ Service Worker pour le fonctionnement hors ligne
- ✅ Manifest pour l'installation sur mobile
- ✅ Icônes pour toutes les plateformes
- ✅ Mise en cache intelligente des ressources
- ✅ Mises à jour automatiques

## 🎨 Personnalisation

### Couleurs

Modifier les couleurs dans `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#1E40AF', // Couleur principale
  },
  accent: {
    500: '#F97316', // Couleur d'accent
  }
}
```

### Contenu

Modifier les informations de l'entreprise dans `src/utils/constants.js`:

```javascript
export const COMPANY_INFO = {
  name: 'K-TECH MULTI SERVICES',
  // ... autres informations
}
```

## 🚀 Déploiement en production

### Option 1: Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### Option 2: Netlify

```bash
# Build et déployer
npm run build
# Glisser le dossier 'dist' dans Netlify
```

### Option 3: VPS avec Docker

```bash
# Sur votre serveur
git clone [votre-repo]
cd k-tech-multi-services
docker-compose up -d
```

## 📈 Performance

- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Taille du bundle: < 500KB gzipped

## 🔐 Sécurité

- Headers de sécurité configurés dans Nginx
- Content Security Policy activé
- HTTPS obligatoire en production
- Protection CSRF sur les formulaires

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**K-TECH MULTI SERVICES**
- 📱 WhatsApp: +237 673 164 426
- 📧 Email: kamdoumtanguetsop@gmail.com
- 📍 Adresse: Douala - Bepanda, Cameroun
- 🌐 Site web: [www.k-tech-services.cm](https://www.k-tech-services.cm)

---

Développé avec ❤️ par K-TECH MULTI SERVICES © 2025